window.addEventListener("orientationchange", function() {
	hideViewsMenu();
	initiscroll();
}, false);

$(window).load(function() {
	$('.viewsButton').unbind('click');
	$('.viewsButton').click(function (event) {
		toggleViewsMenu();
		return false;
	});

	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
	initiscroll();
	try{
		$(".viewlink").each(function(){
			$(this).addEventListener("click", function(){
				$.blockUI();
			});
		});
	}catch(e){}
});

function toggleViewsMenu() {
	if ($("#menuPane").hasClass("offScreen")) {
		$("#menuPane").removeClass("offScreen").addClass("onScreen");
		$("#menuPane").animate({
			"left": "+=700px"
		}, "slow");
	} else {
		$("#menuPane").removeClass("onScreen").addClass("offScreen");
		$("#menuPane").animate({
			"left": "-=700px"
		}, "slow");
	}
}

function hideViewsMenu(){
	if (!$("#menuPane").hasClass("offScreen")){
		$("#menuPane").removeClass("onScreen").addClass("offScreen");
		$("#menuPane").animate({
			"left": "-=700px"
		}, "slow");
	}
}

var firedrequests;
function loadPage(url, target, menuitem){
	var thisArea = $("#" + target);
	thisArea.load(url, function(){

		if (firedrequests != null){
			firedrequests = new Array();
		}
		initiscroll();
		return false;
	});		
	var menuitems = $("#menuitems li");
	menuitems.removeClass("viewMenuItemSelected");
	menuitems.addClass("viewMenuItem");
	$(".menuitem" + menuitem).removeClass("viewMenuItem");
	$(".menuitem" + menuitem).addClass("viewMenuItemSelected");
	hideViewsMenu();
}

function openPage(url, target){
	$.blockUI();
	document.location.href = url;
}

function initiscroll(){
	document.addEventListener('touchmove', function (e){e.preventDefault()});
	//Initialise any iScroll that needs it
	try{
		pullUpEl = document.getElementById('pullUp');	
		pullUpOffset = pullUpEl.offsetHeight;
	}catch(e){}
	try{
		scrollContent.destroy();
		delete scrollContent;
	}catch(e){}
	$(".iscrollmenu").each(function(){
		scrollContent = new iScroll($(this).attr("id"))
	});
	$(".iscrollcontent").each(function(){
		scrollContent = new iScroll($(this).attr("id"), {
			useTransition: true,
			onRefresh: function () {
			if (pullUpEl){
				if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				}
			}
		},
		onScrollMove: function () {
			if (pullUpEl){
				if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
					pullUpEl.className = 'flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
					this.maxScrollY = this.maxScrollY;
				} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
					this.maxScrollY = pullUpOffset;
				}
			}
		},
		onScrollEnd: function () {
			if (pullUpEl){
				if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
					$(".loadmorebutton").click();
				}
			}
		}
		});
	});
}
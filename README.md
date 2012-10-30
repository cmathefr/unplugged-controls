# Unplugged Custom Controls Library
You can see a demonstration of the custom controls at [unp.londc.com](http://unp.londc.com/ "unp.londc.com").

* * *

## Introduction
This project will create a suite of re-usable and performant custom controls which are tailored towards use in the Teamstudio Unplugged mobile application. The custom controls will perform common tasks with the aim of making developing a mobile interface to an existing Notes or Domino application a simple process which does not require specialist mobile development knowledge.

The project is split into two stages; stage one will see the creation of the custom controls themselves (outlined in more detail later); stage two will create three applications using the new custom controls.

The code for the project will be made available via four projects on Github, one containing the custom controls and then one each for the template which are developed using the custom controls. Once the project has been completed the custom controls will be released to OpenNTF and made available to the Importer and Exporter project which allows tighter integration to Domino Designer for developers.

The custom controls will be developed to work with the following different browsers:
* iOS 5 (for iPhone 4+ and iPad 2+)
* Android 3.x
* Android 4.x
* Chrome (Desktop)
* Safari (Desktop)

If required then further work can be undertaken to make the custom controls work in Firefox and Internet Explorer, however the templates which we are developing already have a (sometimes basic) web interface already defined. Our suggestion is that this project be aimed entirely at Webkit based browsers (i.e. the mobile browsers plus Safari and Chrome on the desktop).

## Deliverables

### Header Custom Control
* Grey / Black gradient as per existing Unplugged templates
* Unplugged Logo in top left corner for tablets in landscape mode
* Home button in top right
* Search box in top right for tablet devices
* Search button in top right for phones
* The developer will specify the type of search being executed (a database search or a local search). 
* If the search is against the database, the developer will specify the name of the XPage which the user will be taken to to display search results
* It will be possible for the developer to disable the search button / box function
* Title text in the centre of the bar
* The bar will differ will be deeper for tablet devices
* For devices with less than 1000px width, a “Views” button will be available which will integrate with the Views List custom control
* It will be possible for the developer to disable the views button
* Back button in the top left which will replace either the Logo or the Views button if the developer enables it
* The bar will always be fixed to the top of the page and push the top of any content to be below it.
* When switching between orientations the bar will automatically reconfigure itself.
Footer Custom Control
* Grey / Black gradient as per existing Unplugged templates
* In the bottom left will be a button which will sync the current application. For tablets this button will include text, for phones it will just be an icon
* In the bottom right will be a button which will take the user to a new document as specified by the developer
* It will be possible to hide this button
* In the centre will be text showing the last time the application was sync’d
* The bar will always be fixed to the bottom of the page and will push the bottom of any content to be above it.
* When switching between orientations the bar will automatically reconfigure itself.

### Views List Custom Control
This custom control will handle the navigation between views in the application. It is assumed that if you use this, that the Header Custom Control will also be used which handles the showing / hiding of the list for phones.

* The custom control will allow the developer to pass in a list of menu items which will be displayed in the application
* If the user is on a phone or portrait tablet, the list will be hidden by default and will only show when then user presses the “Views” button in the header bar
* If the user is on a landscape tablet (i.e. screen resolution is greater than 1000px wide) the list will automatically display
* The list will not scroll if the content portion of the page scrolls
* The list of items will be independently scrollable if it is taller than the screen


### Scrollable Area Custom Control
This custom control will be allow the developer to simply add a scrollable region to their application, they will be able to specify the size of the region and put content inside it using an editable area.

The control will use the iScroll JavaScript library to handle scrolling.


###Flat View Custom Control
This custom control will display the contents of a non-categorised view. The view will be able to display any amount of data (i.e. very large data sets) by dynamically loading data as the user scrolls down the page.

* The developer can specify the name of the view to display
* The control will display data from two columns in the view, the main description (summary column) and then a sub description (detail column)
* The developer will specify which XPage will be opened when the user clicks a document in the view
* The developer will specify whether the view should fill the entire contents of the page or whether it will be slightly inset with rounded corners
* The developer will specify how many rows of data to load initially and then whether more data is loaded using “Load More” button which the user must press or whether the next chunk of data is loaded as the user scrolls down the page (i.e. infinite scrolling)


### Search Results Custom Control
This custom control will be used by the developer if they have enabled the database search from the header bar. The custom control will expect a URL parameter containing the search query.

* The developer will specify the name of the view which is being searched against
* The control will display data from two columns in the view, the main description (summary column) and then a sub description (detail column)
* The developer will specify which XPage will be opened when the user clicks a document in the view
* The developer will specify whether the view should fill the entire contents of the page or whether it will be slightly inset with rounded corners
* The developer will specify the maximum rows of data to be returned in the search results


### Accordion (Small Data) Custom Control
This custom control will be used to display categorised views for small data sets (which is taken to be less than 100 rows of data). Each category will be displayed as an accordion item. When the view is opened initially all categories will be collapsed.

* All data will be loaded when the page loads
* The developer will pass in the name of the view
* As with the flat view, the control will display data from two columns in the view, the main description and then sub description.
* The developer will specify which XPage is opened when a document is clicked.
* When a category is clicked it will expand and any open category will be collapsed


### Accordion (Large Data) Custom Control
This custom control will be used to display categorised views for large data sets (more than 100 documents). Each category will be displayed as an accordion item. When the view is opened initially all categories will be collapsed.

* Only category names will be loaded when the page loads initially.
* The developer will pass in the name of the view
* As with the flat view, the control will display data from two columns in the view, the main description and then sub description.
* The developer will specify which XPage is opened when a document is clicked.
* When a category is clicked there will be an AJAX request which gets all of the documents which appear in that category and display them within the accordion. Any existing open category will be closed.


### Form Viewer Custom Control
This custom control provides a simple wrapper into which fields can be added by the developer.

* The developer will need to define the document data binding outside the custom control
* The wrapper will have a border defined
* There will be documentation and examples of how to add fields of different types in read mode
* Text
* Textarea
* Date
* Time
* Number
* Checkbox
* Radio Button
* Combo Box
* List Box
* Rich Text (read only)
* File Attachment
* The wrapper will contain an Edit button which switches the current document to use the Form Editor Custom Control
* To support the Edit button the developer will specify the name of the XPage to open for edit mode


### Form Editor Custom Control
This custom control provides a simple wrapper into which fields can be added by the developer.

* The developer will need to define the document data binding outside the custom control
* The wrapper will have a border defined
* There will be documentation and examples of how to add fields of different types in edit mode
* Text
* Textarea
* Date
* Time
* Number
* Checkbox
* Radio Button
* Combo Box
* List Box
* Rich Text (read only)
* File Attachment
* There will be a Save button which saves the document and then switches it into read mode using the Form Viewer Custom Control
* There will be a Cancel button which sends the user to the home page if they are composing a new document or to the existing document in read mode if is being edited.
* To support the Save and Cancel buttons the developer will specify the name of the XPage to open for read mode


### Dialog Box Custom Control
The Dialog Box custom control will be a simple wrapper which will be available to the developer to have content which will only be displayed when the user presses a button.

* The dialog will be displayed using a JavaScript call
* The dialog will be hidden using a JavaScript call
* The dialog will contain OK and Cancel buttons which can individually be hidden by the developer as required.
* The OK button can be passed the name of a JavaScript function to call when it is clicked.
* Without the above JavaScript function being called, the OK and Cancel buttons will simply hide the dialog and do nothing else.
* The dialog will scale to fit inside the screen resolution which is being used, but it will not be draggable.
* The dialog will have a maximum height and width, if the content which the developer puts inside it is larger than the maximums then the content will be scrollable.


### Swipe View Custom Control
The Swipe View control will allow the developer to quickly display all images which are attached to a Rich Text field in a document.

* To use it the developer will add the Custom Control to another XPage or Custom Control where there is a document data binding. 
* They will pass in the data binding to the Custom Control and the name of the Rich Text field which is going to be used.
* The swipe view will display all image files which are stored in the Rich Text field.
* An image is defined as a file with one of the following extensions:
* Jpg
* Jpeg
* Png
* Gif


### Templates
Each of the templates will use the custom controls as defined above, there will not be any code changes made to the custom controls themselves. Any custom code (such as the form designs or any extra views) will be created in different design elements.
#### Document Library Template
A new set of views will be created to be used by the Custom Controls, and new Custom Controls will be created to display individual documents.
#### Teamroom Template
A new set of views will be created to be used by the Custom Controls, and new Custom Controls will be created to display individual documents.
#### Journal Template
A new set of views will be created to be used by the Custom Controls, and new Custom Controls will be created to display individual documents.

## Testing
### Mobile Devices
The nature of this project is that we have to test in different environments, we are going to cover the following platforms to make sure they work consistently across the board:
* iOS Devices
* iPhone 4 +
* iPad 2 +
* Android Devices
* Android 3.x (Honeycomb) for phone
* Android 4.1 (Jellybean) for tablets

### Desktop Browsers
By default we are only going to test browsers for the desktop which are based on Webkit such as Chrome and Safari. This project will not aim to get the custom controls working in Firefox or Internet Explorer.

## Definitions
### Performant
The aim for all page loads is that they will happen within one second of the user performing an operation. This is based upon the iOS platform using an iPhone 4 as the test case (on the assumption that more recent hardware will be the same or faster). The tests will be run against the three sample templates. Performance for larger custom forms may not stay within these targets depending upon the device being used and the size of the screens being loaded.

### Phone vs Tablet
We are calling devices phones or tablets based upon the screen resolutions.

* A screen width of greater than 1000px is taken to be a tablet in landscape mode
* A screen width of greater than 700px but less than 1000px is assumed to be a tablet in portrait mode
* A screen width of less than 700px but greater than or equal to 480px is taken to be a phone in landscape mode
* A screen width of less than 480px is taken to be a phone in portrait mode

It’s worth noting that retina iOS devices physically have more pixels than they report to me the developer, so all the above figures are based on the reported pixels as opposed to the physical number of pixels.
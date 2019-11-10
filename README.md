# Screenflow-JXA-API

The ScreenFlow-JXA-API is the replacement API for the ScreenFlow-AppleScript-API. This repository is much more up to date than the last and boasts significantly more functionality.

Version: 0.0.1

## Status: Abandoned

This project was initially designed due to frustrations with editing complex videos in screenflow. Unfortunately this API never really saw any significant development and I no longer have the time (or patience with JXA) to maintain it. I.E. I have abandoned the project. Please feel free to fork it and expand it into your own screenflow API, as I will not be working on this for the forseeable future.

## Installation:

Download `screenflow.js` into `~/Library/Script Libraries/`

If the `Script Libraries` folder doesn't exist, create it.

_(Hint: if you don't know what ~ means, In Finder click the "Go" menu and click on "Go to Folder...", then type ~)_

An installer for this would be joyous...

## Usage:

When writing a script include the line:

```javascript
var sf = Library("screenflow") 
Application('ScreenFlow').activate()
delay(0.2)
```

Now all the functionality of the sf library is available through variable `sf`:

```javascript
//Add all videos in-line to project:
var vidCount = sf.getVideoCount()
for (var i = 0;i<vidCount;i++){
	sf.end()
	sf.addVideoAtCursorI(i)
}
```

_Note: You may be wondering why "Application('ScreenFlow').activate()" and "delay(0.1)" are required actions. In general these actions are NOT required. However for certain actions ScreenFlow is required to be the active window. So for the sake of preventing the addition of known (and unavoidable) issues, activate the application at the start of a script and leave it active while running your scripts._

## Keyboard Shortcuts:

As demonstrated in one of my example videos you can use keyboard shortcuts to execute scripts. To do this:

1. Open Automator.
2. Make a new Service.
3. Make sure it receives 'no input' at all programs.
4. Select "Run Javascript" and paste your code into the box provided.
5. Save

Now go to System Preferences > Keyboard > Shortcuts.
Select Services from the sidebar and find your service. Add a shortcut by double clicking (none).

Finally go to System Preferences: Security > Privacy > Accesability
Add Automator and the preferred app to run the shortcut (in this case ScreenFlow).

More info:
http://apple.stackexchange.com/questions/175215/how-do-i-assign-a-keyboard-shortcut-to-an-applescript-i-wrote


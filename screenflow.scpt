function canvasResize(w,h){
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Open resize canvas menu
	ScreenFlow.windows[0].buttons[6].click()
	
	//Due to the way ScreenFlow works, these elements have to be focused to be changed
	ScreenFlow.windows[0].textFields[0].attributes['AXFocused'].value=true
	ScreenFlow.windows[0].textFields[0].value = w.toString()

	//Due to the way ScreenFlow works, these elements have to be focused to be changed	
	ScreenFlow.windows[0].textFields[1].attributes['AXFocused'].value=true
	ScreenFlow.windows[0].textFields[1].value = h.toString()
	
	//Confirm chages.
	ScreenFlow.windows[0].buttons[0].click()
}

function start(){
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Click rewind button
	ScreenFlow.windows[0].buttons[5].click()
}


function end(){
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Click forward-wind button
	ScreenFlow.windows[0].buttons[3].click()
}



/*
 * Insert picture at video cursor
 *     videoName should be a string
 *     Videos added using ui element in bottom left hand corner.
 *
 * Warning - As of ScreenFlow 4.5.2 Videos can have the same name!!!
 */

function addVideoAtCursor(videoName){
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Open menu
	ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].click()
	
	//Get menu items
	var menuItems = ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].menus[0].menuItems()
	
	//Find videoName
	for(var i = 0;i<menuItems.length;i++){
		if (menuItems[i].title() == videoName){
			menuItem[i].click()
			break
		}
	}
}

/*
 * Get all video names
 *     videoName should be a string
 *     Videos added using ui element in bottom left hand corner.
 *
 * Warning - As of ScreenFlow 4.5.2 Videos can have the same name!!!
 */

function getVideoNames(){
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Open "addVideoAtCursor" menu
	ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].click()
	
	//Get menu items
	var menuItems = ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].menus[0].menuItems()
	
	//Close "addVideoAtCursor" menu
	system.keycode(53) 
	
	//Get video names
	videos=[]
	for(var i = 0;i<menuItems.length;i++){
		videos.push(menuItems[i].title())
	}
	
	return videos
}

/*
 * Insert picture at video cursor at given index
 *     index is an integer
 */

function addVideoAtCursorI(index){
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Open menu
	ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].click()
	
	//Get menu items
	var menuItems = ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].menus[0].menuItems()
	

	menuItems[index].click()
}

/*
 * Get video count
 */

function getVideoCount(){
	
	var system = Application('System Events')
	var ScreenFlow = system.processes['ScreenFlow']
	
	//Open "addVideoAtCursor" menu
	ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].click()
	
	//Get menu items
	var menuItems = ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].menus[0].menuItems()
	
	//Close "addVideoAtCursor" menu
	system.keyCode(53)
	
	return menuItems.length
	
}

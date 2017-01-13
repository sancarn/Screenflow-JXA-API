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
	ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].cancel() 
	
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
	

	menuItem[index].click()
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
	ScreenFlow.windows[0].scrollAreas[0].popUpButtons[0].cancel() 
	
	return menuItems.length
}
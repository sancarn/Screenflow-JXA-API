function getPixel(picturePath,x,y){
	ObjC.import('Foundation')
	ObjC.import('AppKit')
	
	//Get image from file
	var img = $.NSImage.alloc.initWithContentsOfFile($(picturePath))
	
	//If img is objC's nil then return a blank array
	if(img==$()){
	    return []
	}
	
	//Get a point object
	var pnt = $.NSMakePoint(x,y)
	
	//Target the image
	img.lockFocus
	
	//Target read point from target
	var clr = $.NSReadPixel(pnt)
	
	//Untarget the image
	img.unlockFocus
	
	//Release img - saving memory
	img.release
	
	//Return R,G,B and A
	return [
			parseInt(255*clr.redComponent),	
			parseInt(255*clr.greenComponent),
			parseInt(255*clr.blueComponent),
			clr.alphaComponent
		   ];
}

//getPixel("/Users/Sancarn/Pictures/RedSquare.png",10,10)




function pixelColorAtScreenCoord(displayID,x,y){
	ObjC.import('Foundation')
	ObjC.import('AppKit')
	image = $.CGDisplayCreateImageForRect(displayID,$.CGRectMake(x,y,1,1));
	bitmap = $.NSBitmapImageRep.alloc.initWithCGImage(image)
	$.CGImageRelease(image)
	color = bitmap.colorAtXY($(x),$(y))
    bitmap.release
    return [
			parseInt(255*color.redComponent),	
			parseInt(255*color.greenComponent),
			parseInt(255*color.blueComponent),
			color.alphaComponent
		   ];

	

}
//displayIDs == CGGetDisplaysWithPoint(...)
//displayIDs == CGGetDisplaysWithRect(...)
//displayID=$.CGMainDisplayID();x=10;y=10
//pixelColorAtScreenCoord($.CGMainDisplayID(),10,10)



function captureScreenPart(x,y,w,h,path){
	//Largely ported from:
	//NSBitmapImageRep *imgRep = [[image representations] objectAtIndex: 0];
	//NSData *data = [imgRep representationUsingType: NSPNGFileType properties: nil];
	//[data writeToFile: @"/path/to/file.png" atomically: NO];
	
	ObjC.import('Foundation')
	ObjC.import('AppKit')
	displayID = $.CGMainDisplayID()
	image = $.CGDisplayCreateImageForRect(displayID,$.CGRectMake(x,y,w,h));
	bitmap = $.NSBitmapImageRep.alloc.initWithCGImage(image)
	pngData = bitmap.representationUsingTypeProperties($.NSPNGFileType,$())
	pngData.writeToFileAtomically(path,true)
	displayID.release
	image.release
	bitmap.release
	pngData.release
}

button = Application("System Events").applicationProcesses["ScreenFlow"].windows[0].buttons[3]
if(button.description() == "Fast Forward"){
    frame = button.attributes['AXFrame'].value()
	ffdFrame = [frame[0], frame[1], frame[2]-frame[0], frame[3]-frame[1]]
	ffdFrame = [ffdFrame[0] + ffdFrame[2] + 5, ffdFrame[1]+2, ffdFrame[2]+78, ffdFrame[3]-5]
    captureScreenPart(ffdFrame[0], ffdFrame[1], ffdFrame[2], ffdFrame[3],"/Users/Sancarn/Pictures/newPicture.png")
}

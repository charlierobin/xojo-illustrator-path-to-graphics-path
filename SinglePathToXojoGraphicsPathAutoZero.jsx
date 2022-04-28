(function(){
	
	#include "XojoGraphicsPathsLib.jsx";
	
	if ( app.activeDocument.selection.length == 0 )
	{
		alert( "Please select a path" );
		return;
	}
	
	if ( app.activeDocument.selection.length > 1 )
	{
		alert( "Just one path selected, please!" );
		return;
	}
	
	var selectedObject = app.activeDocument.selection[ 0 ];
	
	if ( selectedObject.typename != "PathItem" )
	{
		alert( "Only works on PathItems" );
		return;
	}
	
	var xOffset = selectedObject.geometricBounds[ 0 ];
	var yOffset = selectedObject.geometricBounds[ 1 ];
	
	var xojo = convertPathPoints( selectedObject, xOffset, yOffset, "p" );
	
	var xojoCodeTextFrame = app.activeDocument.textFrames.add();
	
	xojoCodeTextFrame.position = [ 0, 0 ];
	
	xojoCodeTextFrame.contents = xojo;	
	
})();

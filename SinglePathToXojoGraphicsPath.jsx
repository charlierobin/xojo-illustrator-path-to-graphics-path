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
	
	{/* prompt (name, "preset", "title"); */}
	
	var xojo = convertPathPoints( selectedObject, 0, 0, "p" );
	
	var xojoCodeTextFrame = app.activeDocument.textFrames.add();
	
	xojoCodeTextFrame.position = [ 0, 0 ];
	
	xojoCodeTextFrame.contents = xojo;

})();


(function(){
	
	#include "XojoGraphicsPathsLib.jsx";
	
	if ( app.activeDocument.selection.length == 0 )
	{
		alert( "Please select one or more paths" );
		return;
	}
	
	for ( var i = 0; i < app.activeDocument.selection.length; i++ )
	{
		if ( app.activeDocument.selection[ i ].typename != "PathItem" )
		{
			alert( "Only works on PathItems" );
			return;
		}
	}
	
	var xojo = "var p as GraphicsPath = new GraphicsPath()" + "\r" + "\r";
	
	for ( var i = 0; i < app.activeDocument.selection.length; i++ )
	{
		var path = app.activeDocument.selection[ i ];
		
		xojo = xojo + convertPathPoints( path, 0, 0, "p" );
		
		xojo = xojo + "\r";
	}
	
	var xojoCodeTextFrame = app.activeDocument.textFrames.add();
	
	xojoCodeTextFrame.position = [ 0, 0 ];
	
	xojoCodeTextFrame.contents = xojo;
	
})();

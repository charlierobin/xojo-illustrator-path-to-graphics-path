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
	
	var xojo = "";
	
	var counter = 1;
	
	var existing = {};
	
	for ( var i = 0; i < app.activeDocument.selection.length; i++ )
	{
		var path = app.activeDocument.selection[ i ];
		
		var name = path.name;
	
		if ( name == "" )
		{
			name = "path" + counter;
			
			counter++;
		}
	
		name = replaceAll( name, " ", "" );
	
		if ( existing[ name ] !== undefined )
		{
			name = name + "Copy";
		}
	
		existing[ name ] = true;
	
		var xOffset = path.geometricBounds[ 0 ];
		var yOffset = path.geometricBounds[ 1 ];
		
		xojo = xojo + "var " + name + " as GraphicsPath = new GraphicsPath()" + "\r" + "\r";
		
		xojo = xojo + convertPathPoints( path, xOffset, yOffset, name );
		
		xojo = xojo + "\r" + "\r";
	}
	
	var xojoCodeTextFrame = app.activeDocument.textFrames.add();
	
	xojoCodeTextFrame.position = [ 0, 0 ];
	
	xojoCodeTextFrame.contents = xojo;
	
})();

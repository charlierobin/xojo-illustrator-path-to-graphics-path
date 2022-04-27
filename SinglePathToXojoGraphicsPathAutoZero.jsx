(function(){
	
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
	
	var xojo = "";
	
	var xOffset = selectedObject.geometricBounds[ 0 ];
	var yOffset = selectedObject.geometricBounds[ 1 ];
	
	var previousP = null;
	
	var firstP = selectedObject.pathPoints[ 0 ];
	
	for ( var i = 0; i < selectedObject.pathPoints.length; i++ )
	{
		p = selectedObject.pathPoints[ i ];
		
		if ( i == 0 )
		{
			xojo = "p.MoveToPoint( ";
			
			xojo = xojo + ( p.anchor[ 0 ] - xOffset ) + ", " + ( - p.anchor[ 1 ] + yOffset );
			
			xojo = xojo + " )" + "\r" + "\r";
		}
		else 
		{
			xojo = xojo + "p.AddCurveToPoint( ";
			
			xojo = xojo + ( previousP.rightDirection[ 0 ] - xOffset ) + ", " + ( - previousP.rightDirection[ 1 ] + yOffset );
			
			xojo = xojo + ", ";
			
			xojo = xojo + ( p.leftDirection[ 0 ] - xOffset ) + ", " + ( - p.leftDirection[ 1 ] + yOffset );
			
			xojo = xojo + ", ";
			
			xojo = xojo + ( p.anchor[ 0 ] - xOffset ) + ", " + ( - p.anchor[ 1 ] + yOffset );
			
			xojo = xojo + " )" + "\r";
		}
		
		previousP = p;
	}
	
	
	xojo = xojo + "p.AddCurveToPoint( ";
	
	xojo = xojo + ( previousP.rightDirection[ 0 ] - xOffset ) + ", " + ( - previousP.rightDirection[ 1 ] + yOffset );
	
	xojo = xojo + ", ";
	
	xojo = xojo + ( firstP.leftDirection[ 0 ] - xOffset ) + ", " + ( - firstP.leftDirection[ 1 ] + yOffset );
	
	xojo = xojo + ", ";
	
	xojo = xojo + ( firstP.anchor[ 0 ] - xOffset ) + ", " + ( - firstP.anchor[ 1 ] + yOffset );
	
	xojo = xojo + " )" + "\r";
	
	
	var xojoCodeTextFrame = app.activeDocument.textFrames.add();
	
	xojoCodeTextFrame.position = [ 0, 0 ];
	
	xojoCodeTextFrame.contents = xojo;	
	
})();

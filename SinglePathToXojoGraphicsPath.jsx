if ( app.activeDocument.selection.length == 0 )
{
	alert( "Please select a PathItem" );
}
else
{
	var topObject = app.activeDocument.selection[ 0 ];
	
	if ( topObject.typename != "PathItem" )
	{
		alert( "Only works on PathItems" );
	}
	else
	{
		var xojo = "";
		
		var previousP = null;
		
		var firstP = topObject.pathPoints[ 0 ];
		
		for( var i = 0; i < topObject.pathPoints.length; i++ )
		{
			p = topObject.pathPoints[ i ];
			
			if ( i == 0 )
			{
				xojo = "p.MoveToPoint( ";
				
				xojo = xojo + Math.round( p.anchor[ 0 ] ) + ", " + Math.round( - p.anchor[ 1 ] );
				
				xojo = xojo + " )" + "\r" + "\r";
			}
			else 
			{
				xojo = xojo + "p.AddCurveToPoint( ";
				
				xojo = xojo + Math.round( previousP.rightDirection[ 0 ] ) + ", " + Math.round( - previousP.rightDirection[ 1 ] );
				
				xojo = xojo + ", ";
				
				xojo = xojo + Math.round( p.leftDirection[ 0 ] ) + ", " + Math.round( - p.leftDirection[ 1 ] );
				
				xojo = xojo + ", ";
				
				xojo = xojo + Math.round( p.anchor[ 0 ] ) + ", " + Math.round( - p.anchor[ 1 ] );
				
				xojo = xojo + " )" + "\r";
			}
			
			previousP = p;
		}
		
		
		xojo = xojo + "p.AddCurveToPoint( ";
		
		xojo = xojo + Math.round( previousP.rightDirection[ 0 ] ) + ", " + Math.round( - previousP.rightDirection[ 1 ] );
		
		xojo = xojo + ", ";
		
		xojo = xojo + Math.round( firstP.leftDirection[ 0 ] ) + ", " + Math.round( - firstP.leftDirection[ 1 ] );
		
		xojo = xojo + ", ";
		
		xojo = xojo + Math.round( firstP.anchor[ 0 ] ) + ", " + Math.round( - firstP.anchor[ 1 ] );
		
		xojo = xojo + " )" + "\r";
		
		
		var xojoCodeTextFrame = app.activeDocument.textFrames.add();
		
		xojoCodeTextFrame.position = [ 0, 0 ];
		
		xojoCodeTextFrame.contents = xojo;
		
	}
}

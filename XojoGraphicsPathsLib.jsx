function convertPathPoints( path, xOffset, yOffset, instanceName )
{
	var xojo = "";
	
	var previousP = null;
	
	var firstP = path.pathPoints[ 0 ];
	
	for ( var i = 0; i < path.pathPoints.length; i++ )
	{
		p = path.pathPoints[ i ];
		
		if ( i == 0 )
		{
			xojo = instanceName + ".MoveToPoint( ";
			
			xojo = xojo + ( p.anchor[ 0 ] - xOffset ) + ", " + ( - p.anchor[ 1 ] + yOffset );
			
			xojo = xojo + " )" + "\r" + "\r";
		}
		else 
		{
			xojo = xojo + instanceName + ".AddCurveToPoint( ";
			
			xojo = xojo + ( previousP.rightDirection[ 0 ] - xOffset ) + ", " + ( - previousP.rightDirection[ 1 ] + yOffset );
			
			xojo = xojo + ", ";
			
			xojo = xojo + ( p.leftDirection[ 0 ] - xOffset ) + ", " + ( - p.leftDirection[ 1 ] + yOffset );
			
			xojo = xojo + ", ";
			
			xojo = xojo + ( p.anchor[ 0 ] - xOffset ) + ", " + ( - p.anchor[ 1 ] + yOffset );
			
			xojo = xojo + " )" + "\r";
		}
		
		previousP = p;
	}
	
	if ( path.closed )
	{
		xojo = xojo + instanceName + ".AddCurveToPoint( ";
		
		xojo = xojo + ( previousP.rightDirection[ 0 ] - xOffset ) + ", " + ( - previousP.rightDirection[ 1 ] + yOffset );
		
		xojo = xojo + ", ";
		
		xojo = xojo + ( firstP.leftDirection[ 0 ] - xOffset ) + ", " + ( - firstP.leftDirection[ 1 ] + yOffset );
		
		xojo = xojo + ", ";
		
		xojo = xojo + ( firstP.anchor[ 0 ] - xOffset ) + ", " + ( - firstP.anchor[ 1 ] + yOffset );
		
		xojo = xojo + " )" + "\r";
	}
	
	return xojo;
}

function escapeRegExp( string ) 
{
  return string.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
}

function replaceAll( str, find, replace ) 
{
  return str.replace( new RegExp( escapeRegExp( find ), 'g' ), replace );
}

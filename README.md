# Adobe Illustrator Paths ▸ Xojo GraphicsPath commands
 
I cleared up the code a little, moved some common functions into a shared library file, and added some (limited) supported for multiple selected paths, together with auto-zero versions
which look at the bounding boxes of the selected paths and automatically offset the resulting points/control points so that the object is drawn at `0,0` (when copied/pasted into Xojo).

`MultiplePathsToSingleXojoGraphicsPath` takes multiple paths and puts them all into a single GraphicsPath `p`.

`MultiplePathsToXojoGraphicsPaths` takes multiple paths and generates a GraphicsPath for each, named after the object name in Illustrator (if possible).

`MultiplePathsToXojoGraphicsPathsAutoZero` is the same as above, but auto-zeroes each path so that they all draw at `0,0`.

(In other words, multiple paths from `MultiplePathsToSingleXojoGraphicsPath` and `MultiplePathsToXojoGraphicsPaths` will keep their relative  positions to each other, but paths from `MultiplePathsToXojoGraphicsPathsAutoZero` will not.)

`SinglePathToXojoGraphicsPath` takes a single path, puts it into a single path `p`. (This is closest to the original script described below.)

`SinglePathToXojoGraphicsPathAutoZero` takes and outputs a single path, as above, but auto-zeros the path origin.

**(There is a little inconsistency with whether or not the provided code includes the declaration for the GraphicsPath variable, as all of these scripts were grown organically, ie: depending on how I was using them at the time. So sometimes there is a var declare included, sometimes not, when I was just pasting the generated code after my own declares.)**

### Original README

Create Xojo GraphicsPath-friendly methods for any single selected path in Adobe Illustrator.

The JSX script needs to be installed into your appropriate Illustrator scripts directory.

On my Mac, I put them into:

`/Applications/Adobe Illustrator 2022/Presets/Scripts`

(You might find some localisation directories within the Presets directory, so you will need to choose the appropriate one for your system setup.)

Illustrator should find the script the next time you launch it. (Check under the `File` ▸ `Scripts` menu.)

The script assumes that your Illustrator artwork is setup with the origin matching that of Xojo’s Graphics class, ie: the `0,0` of the rulers is to the upper left of the path you are working with.

**A common mistake is having the Illustrator ruler origin at the wrong point, so the generated points are then drawn offscreen in the Xojo graphics environment.**

You’ll find that open paths have a final `AddCurveToPoint` which closes the path, so you need to delete that line if you want the path to remain open in Xojo.

https://ai-scripting.docsforadobe.dev/scriptingJavascript/yourFirstScript.html


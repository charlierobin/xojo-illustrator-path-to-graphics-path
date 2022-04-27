# Adobe Illustrator Paths ▸ Xojo GraphicsPath commands
 
Create Xojo GraphicsPath-friendly methods for any single selected path in Adobe Illustrator.

The JSX script needs to be installed into your appropriate Illustrator scripts directory.

On my Mac, I put them into:

`/Volumes/external/Applications/Adobe Illustrator 2022/Presets/Scripts`

(You might find some localisation directories within the Presets directory, so you will need to choose the appropriate one for your system setup.)

Illustrator should find the script the next time you launch it. (Check under the `File` ▸ `Scripts` menu.)

The script assumes that your Illustrator artwork is setup with the origin matching that of Xojo’s Graphics class, ie: the 0,0 of the rulers is to the upper left of the path you are working with.

**A common mistake is not having the Illustrator ruler origin at the wrong point, so the generated points are then drawn offscreen in the Xojo graphics environment.**

You’ll find that open paths have a final AddCurveToPoint which closes the path, so you need to delete that line if you want the path to remain open in Xojo.

https://ai-scripting.docsforadobe.dev/scriptingJavascript/yourFirstScript.html


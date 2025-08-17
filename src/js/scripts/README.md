# NOTE
These scripts are implemented via the end of "src-js-settings.js" with window.__require. These are here to help a viewer edit a script relavent to their goal. <br><br>
## how to apply a patch?
1. Find the settings.js file, and find the last instance of "window.__require".
2.  Inside of this declaration, find the label of the script you have updated. (Ex. api.js)
3. Replace the code wrapped INSIDE OF THE FUNCTION <br>
 api: [function(t, o, e) { //do not break/remove the function <br>
   //replace this code with the updated <br>
}
## Easier way to do ts?
I have experimented node.js (update resMap.js AND settings.js with compiled/bundled versions of updated scripts/asssets)<br>
I did succeeded. However, I would like to finish fully breakinng down this project to release an official (bugless) script.

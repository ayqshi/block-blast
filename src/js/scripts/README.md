# NOTE
These scripts are implemented via "bundled_scripts.js" with window.__require. These are here to help a viewer edit a script relavent to their goal. <br><br>
## how to apply a patch?
1. Find the bundled_scripts.js file, and find the instance of the file(s) needing changed. (Ex. "api.js: []")
3. Replace the code wrapped INSIDE OF THE FUNCTION <br>
 api: [function(t, o, e) { //do not break/remove the function <br>
   //replace this code with the updated <br>
}
## Easier way to do ts?
I have experimented node.js (update resMap.js AND bundled_scripts.js with compiled/bundled versions of updated scripts/asssets)<br>
I will note it is possible, however it will need to hold until I have finished Open Sourcing and perfecting.

# BrookhouserCloseAllTabs
Brookhouser's Close All Tabs

To get this to work:
1. Download this zip file.
2. Extract the folder and save it locally (Chrome Extensions can't test if it is in Google Drive)
3. Go to Chrome Extensions by typing chrome://extensions in URL bar
4. Toggle on Developer Mode if it is not already on
5. Click on Load unpacked
6. Open the folder that you extracted in step 2.
7. Now that should install the extension for you to test.

<b>Usage:</b> 
Right-click to show 'Close all tabs' in the Right-click menu.
Keyboard shortcuts:
Alt+B to close all other tabs.

<b>Advanced</b>
You can change the manifest.json to change the keyboard shortcuts. You can't use ones that are reserved in Chrome.
You can also change the icon by adding your own to the folder and naming it icon.png or changing the icon file name in the manifest.json to match the one you put in this folder.

If you change the manifest.json to use sample2.js instead of sample.js there are additional commands that fire with keyboard shortcuts.
Extra commands from sample2.js:
Create a new tab.
Create 20 new windows.
Remove all other windows.

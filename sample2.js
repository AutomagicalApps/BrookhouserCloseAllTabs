
//onclick callback function it automatically gets 2 parameters from the onclick in contextMenus.create callback
function closeTabs(info, tab) {
  //close all tabs as per here: https://stackoverflow.com/questions/34897417/how-i-can-close-all-tabs-in-google-chrome-window-using-api
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      //make sure not to delete our tab, given by tab.id
      if(tabs[i].id!==tab.id){
        chrome.tabs.remove(tabs[i].id);
      }
    }
});
}

// Create a contextMenu (the right click one in Chrome)
chrome.contextMenus.create({"title": "Close all other tabs", "onclick":closeTabs});

//Close on the default button click of Alt+B for Brookhouser
chrome.browserAction.onClicked.addListener(function(current){
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      //make sure not to delete our tab, given by tab.id
      if(tabs[i].id!==current.id){
        chrome.tabs.remove(tabs[i].id);
      }
    }
  });
});

//create 20 tabs
chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);
  if(command=='toggle-feature'){
    chrome.tabs.create({url: 'https://www.automagicalapps.com'});
  }
  else if(command=='toggle-feature-foo'){
    for(let i=0;i<20;i++){
    chrome.windows.create({url: 'https://www.automagicalapps.com'});
    }
  }
  else if(command=='toggle-feature-foo-undo'){
   chrome.windows.getCurrent((win)=>{
      chrome.windows.getAll((windows)=>{
        for(var wins in windows){
          if(windows[wins].id!==win.id){
            chrome.windows.remove(windows[wins].id);
          }
        }
      });
    });
  }
});


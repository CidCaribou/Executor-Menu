chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['loader.js']
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('?executor')) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['loader.js'] 
    })
    .then(() => console.log("loader.js has been executed."))
    .catch(err => console.error("Failed to execute loader.js:", err));
  }
});



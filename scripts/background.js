chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let tabUrl = tab.url ?? tab.pendingUrl;
  // let fullUrl = tabUrl.split('?')
  // const queryParams = fullUrl[1]
  // let domainOnlyUrl = fullUrl[0];
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('www.medium.com')
  ) {
    try {
      chrome.tabs.sendMessage(tabId, {"page": "feed"})

    } catch (error) {
      chrome.tabs.sendMessage(tabId, {error})
    }

  }
});

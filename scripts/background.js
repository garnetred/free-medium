chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let tabUrl = tab.url ?? tab.pendingUrl;
  let fullUrl = tabUrl.split('?')
  const queryParams = fullUrl[1]
  let domainOnlyUrl = fullUrl[0];
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('www.reddit.com')
  ) {
    const tedditUrl = domainOnlyUrl.replace('reddit.com', 'teddit.net')
    const newUrl = queryParams ? `${tedditUrl}?${queryParams}` : tedditUrl;
    chrome.tabs.update(tabId, { url: newUrl });
  }
});

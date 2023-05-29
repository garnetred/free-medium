chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let tabUrl = tab.url ?? tab.pendingUrl;
  // let fullUrl = tabUrl.split('?')
  // const queryParams = fullUrl[1]
  // let domainOnlyUrl = fullUrl[0];
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('medium.com')
  ) {
    try {
      // chrome.tabs.sendMessage(tabId, {"onMedium": true, "error": null})
        const allCookies = getCookies();
        console.log(allCookies)
    } catch (error) {
      // chrome.tabs.sendMessage(tabId, {"onMedium": false, "error": error})
    }

  }
});

    const getCookies = async() => {
      const cookies = await chrome.cookies.getAll({details: {"name": '_dd_s'}});
      return cookies;
    }

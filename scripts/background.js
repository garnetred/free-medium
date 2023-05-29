chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('medium.com')
  ) {
    try {
      getCookies();
      chrome.tabs.sendMessage(tabId, { onMedium: true, error: null });
    } catch (error) {
      chrome.tabs.sendMessage(tabId, {
        onMedium: false,
        error: `The following error has appeared: ${error}`,
      });
    }
  }
});

const getCookies = async () => {
  const cookies = await chrome.cookies.getAll({});
  deleteCookies(cookies);
  return cookies;
};

const deleteCookies = (totalCookies) => {
  if (totalCookies.length) {
    totalCookies.forEach((cookie) => {
      const currentDomain =
        cookie.domain[0] === '.' ? `www${cookie.domain}` : cookie.domain;
      const cookieUrl = `${
        cookie.secure ? 'https://' : 'http://'
      }${currentDomain}${cookie.path}`;
      chrome.cookies.remove({ name: cookie.name, url: cookieUrl });
    });
  }
};

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
      const allCookies = getCookies();
      console.log(allCookies, 'cookies before');
      // deleteCookies(allCookies);
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
  // const cookies = await chrome.cookies.getAllCookieStores();
  deleteCookies(cookies);
  return cookies;
};

const deleteCookies = (totalCookies) => {
  console.log('in delete cookies');
  console.log('cookies', totalCookies);
  if (totalCookies.length) {
    totalCookies.forEach((cookie) => {
      console.log(cookie, 'cookie');
      const currentDomain =
        cookie.domain[0] === '.' ? `www${cookie.domain}` : cookie.domain;
      console.log('cookie domain', cookie.domain[0]);
      const cookieUrl = `${
        cookie.secure ? 'https://' : 'http://'
      }${currentDomain}${cookie.path}`;
      console.log(cookieUrl);
      chrome.cookies.remove({ name: cookie.name, url: cookieUrl });
    });
  }
  // return totalCookies;
};

chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { onMedium, error } = obj;
      if (response && onMedium) {
        // localStorage.clear();
        // console.log('local storage cleared')
        const allCookies = getCookies();
        console.log(allCookies)
      } else {
        console.error(error)
      }
    });


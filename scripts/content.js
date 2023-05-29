chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page } = obj;
    if (response) {
      console.log('message received', page);
    }
  });
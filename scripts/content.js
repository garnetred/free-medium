chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { onMedium, error } = obj;
  if (response && onMedium) {
    localStorage.clear();
    console.log('local storage cleared');
  } else {
    console.error(error);
  }
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { onMedium, error } = obj;
  if (response && onMedium) {
    localStorage.clear();
  } else {
    console.error(error);
  }
});

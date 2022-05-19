let color = 'https://cf.ltkcdn.net/dogs/images/std/279404-800x533-australian-shepherd.webp';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background image set to %cgreen', `color: ${color}`);
});
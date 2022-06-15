/*global chrome */

export const setStorage = ({ key, value }) => {
  chrome.storage.sync.set({[key]: value}, function() {
  });
}

export const getStorage = ({ key }) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, function(result) {
      resolve(result && result[key] ? result[key] : null);
    });
  })
}
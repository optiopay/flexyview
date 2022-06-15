/*global chrome */

const shouldReplaceNewTabSetting = true;

// chrome.webRequest.onHeadersReceived.addListener(function(e) {
//   if (o(e.tabId) && e.frameId) {
//       var n = e.responseHeaders.filter(function(e) {
//           return "x-frame-options" !== e.name.toLowerCase()
//       });

//       console.log("Stripped off x-frame-options");

//       return {
//           responseHeaders: n
//       }
//   }
// })


// chrome.tabs.onUpdated.addListener(function(tab) {
//   if (tab.url === "chrome://newtab/") {
//     if (shouldReplaceNewTabSetting === true) {
//       chrome.tabs.update(tab.id, {
//         url: chrome.extension.getURL("new-page-override.html")
//       });
//     }
//   }
// });

// chrome.tabs.onCreated.addListener(function(tab) {
//   if (tab.url === "chrome://newtab/") {
//     if (shouldReplaceNewTabSetting === true) {
//       chrome.tabs.update(tab.id, {
//         url: chrome.extension.getURL("new-page-override.html")
//       });
//     }
//   }
// });

// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     return {cancel: details.url.indexOf("://aurora-pp.opstaging.de") !== -1};
//   },
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );

// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) { return {cancel: true}; },
//   {urls: ["*://www.evil.com/*"]},
//   ["blocking"]
// );
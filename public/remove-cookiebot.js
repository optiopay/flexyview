// (function init() {
//   if (document.readyState !== "complete") {
//     setTimeout(init, 1000);
//   }

//   removeOffendingIframe();

//   function removeOffendingIframe() {
//     var contentIframe = document.getElementById("aurora-content-iframe");

//     if (contentIframe) {
//       var targetIframe = contentIframe.contentWindow.document.querySelector('iframe[src^="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html"]');
//       if (targetIframe) {
//         targetIframe.remove();
//         console.log("Frame removed!!!");
//       } else {
//         // run function again
//         setTimeout(removeOffendingIframe, 1000);
//       }
//     } else {
//       // run function again
//       setTimeout(removeOffendingIframe, 1000);
//     }
//   }
// })();
/*
If the mouseover was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyItemProperties(e) {
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;
  console.log("content script sending message:", target.href);
  chrome.runtime.sendMessage({"mouseoverURL": target.href});
}
/*
Add notifyExtension() as a listener to mousover events.
*/
window.addEventListener("mouseover", notifyItemProperties);

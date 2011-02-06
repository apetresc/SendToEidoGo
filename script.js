// A generic onclick callback function.
function onSgfClick(info, tab) {
  window.open('http://www.eidogo.com/#url:' + info.linkUrl, '_newtab');
}

var id = chrome.contextMenus.create({
  "title" : "Open SGF in EidoGo",
  "contexts" : ["link"],
  "onclick" : onSgfClick,
  "targetUrlPatterns" : [
    "*://*/*.sgf",
    "*://dragongoserver.net/sgf.php?gid=*"
  ]
});


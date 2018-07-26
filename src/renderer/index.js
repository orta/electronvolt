const webview = document.createElement("webview")
webview.src = "https://cms.artsy.net";
webview.allowpopups = true

const style = webview.style
style.position = "absolute"
style.width = "100%"
style.height = "100%"
style.top = 0
style.left = 0
style.display = "inline-flex !important"

const load = () => {
  webview.removeEventListener('did-finish-load', load);
};

webview.addEventListener('did-finish-load', load)
document.body.appendChild(webview)

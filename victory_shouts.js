
VICTORY_PNG_SRC = 'http://dominion.isotropic.org/static/youwin.png';

function is_victory_png(node){
    for (childNode in node.childNodes){
        if(node.childNodes[childNode].tagName == 'IMG'){
            if (node.childNodes[childNode].src == VICTORY_PNG_SRC){
                return true;
            }
        }
    }
    return false
}

document.body.addEventListener('DOMNodeInserted', function(ev) {
    if (is_victory_png(ev.target)){
        chrome.extension.sendRequest({make_victory_shout: true})
    }
});
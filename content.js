console.log("Chrome Extension Start");

window.addEventListener('mouseup', mouseUpped);

function mouseUpped(){
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);
    if(selectedText.length > 0){
        let message = {
            text: selectedText
        };  
        chrome.runtime.sendMessage(message);
    }
}

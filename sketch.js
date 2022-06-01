function setup() {
    noCanvas();

    let bgpage = chrome.extension.getBackgroundPage();
    let words = bgpage.word.trim();

    let url = `https://api.wordnik.com/v4/word.json/${words}/definitions?limit=2&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=e0d094e089e87c411680f08f6ab0e7be39143f84626e8c9e4`
    loadJSON(url, gotData);
    function gotData(data) {
        createP(data[1].text);
    }
    // let newurl = `https://api.wordnik.com/v4/word.json/${words}/audio?useCanonical=false&limit=2&api_key=e0d094e089e87c411680f08f6ab0e7be39143f84626e8c9e4`
    // loadJSON(newurl, newData);
    // function newData(data) {
    //     createAudio(data[1].fileUrl).autoplay(true);
    // }

}
// e0d094e089e87c411680f08f6ab0e7be39143f84626e8c9e4
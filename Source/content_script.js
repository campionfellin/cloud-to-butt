var elements = document.getElementsByTagName('*');

var phrases = [
    "the big orange",
    "the liar",
    "the scumbag",
    "the president elect",
    "the bad businessman"
]


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/\bTrump\b/g, generateRandomPhrase());

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function generateRandomPhrase() {
    

    var location = Math.floor(Math.random() * 5);

    return phrases[location];
}
let index = 0;

function consoleRec(source,numberOfElements) {
    console.log(source[index++]);
    if (index < numberOfElements) consoleRec(source,numberOfElements)

}

module.exports = consoleRec;

let index = 0;

function consoleRec(source,numberOfElements) {
    console.log(source[index++]);
    if (index < numberOfElements){
        consoleRec(source,numberOfElements)
    } else {
        index =0;
    }

}

module.exports = consoleRec;

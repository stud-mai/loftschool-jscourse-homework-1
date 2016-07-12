let index = 0;

function consoleRec(source) {
    console.log(source[index++]);
    if (index < source.length){
        consoleRec(source)
    } else {
        index = 0
    }
}

module.exports = consoleRec;

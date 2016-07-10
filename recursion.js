let index = 0;

function consoleRec(source) {
    console.log(source[index++]);
    if (index < source.length) consoleRec(source);
}

module.exports = consoleRec;

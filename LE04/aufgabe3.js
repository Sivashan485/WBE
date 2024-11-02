require('./scripts.js')

function oldAndLiving(SCRIPTS) {
    let list = [];
    for (let script of SCRIPTS) {
        if (script.year < 0 && script.living === true) {
            list.push(script.name);
        }
    }
    return list;
}

function numberOfCodes(script) {
    let numberOfCodes = 0;
    for (let range of script.ranges) {
        numberOfCodes += range[1] - range[0];
    }
    return numberOfCodes;
}

console.log(numberOfCodes(SCRIPTS[3]));
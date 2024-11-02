module.exports = { scriptOfSample }
require('./scripts.js')


function scriptOfSample(character, SCRIPTS) {
    const characterCode = character.charCodeAt(0);
    for (let script of SCRIPTS) {
        for (let range of script.ranges) {
            if (range[0] <= characterCode && characterCode < range[1]) {
                return script.name;
            }
        }
    }
    return "unknown";
}

function scriptsInString(string, SCRIPTS) {
    let languages = {};
    for (let i = 0; i < string.length; i++) {
        let script = scriptOfSample(string[i], SCRIPTS);
        if (languages[script]) {
            languages[script]++;
        } else {
            languages[script] = 1;
        }
    }
    return languages;
}

//O Es gibt eine Krilische Zeichen das sollte uns eigentlich skeptisch machen.  
console.log( scriptsInString('https://pоstfinance.ch', SCRIPTS) )
// { Han: 5, unknown: 7, Latin: 10, Cyrillic: 3 }
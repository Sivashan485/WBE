function findTag(text) {
    if(!text.includes("<") || !text.includes(">")){
        return undefined
    }
    text = text.toString();

    let isBracketOpen = false; 
    let tag = "" ;
    let tagAlreadySet = false;

    for (let i = 0; i < text.length; i++) {
        if(!tagAlreadySet){
            if(text[i]==="<"){
                if(isBracketOpen===true){
                    tag = "";
                }
                isBracketOpen= true;
                i++
            }
            if(text[i]===">"){
                isBracketOpen= false;
                tagAlreadySet = true;
            }
            if(isBracketOpen===true){
                tag+=text[i]
            }
        }
            
    }
    if(tag.includes(" ")) {
        return undefined
    }
    return tag

}
module.exports = { findTag }

console.log(findTag("<header>Text</header>"));
console.log(findTag("blabla <br> blabla"));
console.log(findTag("123245 </header> bla"));
console.log(findTag("123245 <hea der> bla"));
console.log(findTag("123245 <hea<der> bla"));
console.log(findTag("123245 <hea<der bla"));
// vowel and consonents count

var text="pneumonoultramicroscopicsilicovolcanoconiosis"
var vowelCount=0
var consonentCount=0
var vowels="aeiou"
for (ch of text){
    if (vowels.includes(ch)){  //includes noted
        vowelCount++
    }
    else {
        consonentCount++
    }
}
console.log(`vowelcount ${vowelCount}`);
console.log(`consonentcount ${consonentCount}`);
console.log(`totalcount ${text.length}`);

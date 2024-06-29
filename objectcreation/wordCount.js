text="hai hello hai hello hello hai hai"
/*var words=text.split(" ")
var wc={}
for (let w of words){
    if (w in wc){
        wc[w]+=1
    }
    else{
        wc[w]=1
    }
}
console.log(wc);
*/

var wc={}
text.split(" ").map(w=>w in wc ? wc[w]+=1 :wc[w]=1)

console.log(wc);
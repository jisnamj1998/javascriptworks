word="hellopython"
var wc={}
/*for (ch of word){
    ch in wc ? wc[ch]+=1 :wc[ch]=1
}
console.log(wc);
*/

word.split("").map(ch=>ch in wc ? wc[ch]+=1 :wc[ch]=1)
console.log(wc);
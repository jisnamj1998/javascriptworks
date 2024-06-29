var text="pneumonoultramicroscopicsilicovolcanoconiosis"
var wc={}
text.split("").map(ch=> ch in wc ? wc[ch]+=1 :wc[ch]=1)
//console.log(wc);
var nestedArray=Object.entries(wc)
var mostRecChar=nestedArray.reduce((ch1,ch2)=>ch1[1]>ch2[1] ?ch1 :ch2)
console.log(mostRecChar);

var word1="listen"
var word2="silent"
var sorWord1=word1.split("").sort().join("")
var sorWord2=word2.split("").sort().join("")
console.log(sorWord1==sorWord2 ? "anagram" : "not anagram");

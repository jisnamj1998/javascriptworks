source_word="container"
target_word="can"
wc={ch:source_word.count(ch) (for ch of) set(source_word)}
for( ch of target_word){
    if (ch in wc &&  wc.get(ch)>0){
        wc[ch]-=1
    }
    else{
        console.log("not knagaroo word");
        break
    }
}
else{
    console.log("kangaroo word"); 
}             
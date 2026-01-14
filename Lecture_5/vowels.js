function returnVowels(name){
    let count=0;
    for(const char of name){
        if(char=="a" || char=="i" || char=="o" || char=="u" || char=="e"){
            count++;
        }
    }
    console.log(count);
    
}
let result=returnVowels("aman kumar");
console.log(result);


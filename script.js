var text = "Doc is learning how to code. JavaScript is Doc's new language. But she is having a heard time with it. Teach Doc how to code in JS."; 
var myName = "Doc";
var hits = [];
for(var i = 0; i <= text.length; i++) {
if (text[i] === myName[0]){
     for(var j = i; j < i + myName.length; j++){
        hits.push(text[j]);
    }
      }
    }
    console.log(hits);

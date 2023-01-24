//your code here
'use strict';

const h3El = document.getElementById('wordCount');

function myFunction(e){
    let text = document.getElementById('evaluatedText').value;
    h3El.textContent = `Word Count : ${text.length}`;
}
let htmlCode = document.querySelector('#html-box');
let cssCode = document.querySelector('#css-box');
let jsCode = document.querySelector('#js-box');
let outputBox = document.querySelector('#output-box');

let htmlCodeOutput,cssCodeOutput,jsCodeOutput="";

htmlCode.addEventListener('keyup',()=>{
    htmlCodeOutput=htmlCode.value;
    outputBox.contentDocument.body.innerHTML=htmlCodeOutput;
})

cssCode.addEventListener('keyup',()=>{
    cssCodeOutput=cssCode.value;
    outputBox.contentDocument.head.innerHTML=`<style> ${cssCodeOutput}</style>`;
})

jsCode.addEventListener('keyup',()=>{
    jsCodeOutput=jsCode.value;
    outputBox.contentWindow.eval(jsCodeOutput);
})


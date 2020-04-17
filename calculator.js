var calInput =  calForm.result;
function getVal(InputResult){
   calInput.value = calInput.value + InputResult;
   calInput.value = calInput.value.replace(/^0/,""); //.replace() reg Expression to remove leading zero
}
function calculate(){
    //prevent users to input empty value
    if(calInput.value ==""){ 
        alert("Please input value"); 
    }else(calInput.value = eval(calInput.value));
}

var clearBtn = calForm.equl;
clearBtn.addEventListener('dblclick', function(){
    calInput.value =0; //default the calculator to zero so that it will not be empty
});


function backspaceArrow(){
    document.calForm.result.value =
            document.calForm.result.value.substring(0,document.calForm.result.value.length -1);
}

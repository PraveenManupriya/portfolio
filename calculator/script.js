let viewScreen = document.querySelector('#viewScreen');

function display(num){
    viewScreen.value += num;
}

function calculate(){
    try{
        viewScreen.value = eval(viewScreen.value);
    }
    catch(err){
        viewScreen.value ="Invalid";
    }
}

function cl(){
    viewScreen.value =""
}
function del(){
    viewScreen.value = viewScreen.value.slice(0,-1);
}
const formBuilder = new FormBuilder();
formBuilder.addGroup("login", {});
setTimeout(function (){
    console.log(formBuilder.getInput("login0"));
}, 10000);
const formBuilder = new FormBuilder();
formBuilder.addGroup("login", {});
setTimeout(function (){
    formBuilder.deleteLine("login0", 2);
    log("rerendered")
}, 5000);
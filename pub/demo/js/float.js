(function showFloat(){
    const formBuilder = new FormBuilder();
    let formId13 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
    let formId14 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
    formBuilder.createTabForm({"Login": formId13, "Sign up": formId14}, "body", {drag: false, close: true, float: true});
    // for your experience, please click the button to run this code snippet
})()

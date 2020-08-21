const formBuilder = new FormBuilder();

function showFloat(){
    let formId13 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
    let formId14 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
    formBuilder.createTabForm({"Login": formId13, "Sign up": formId14}, "body", {drag: false, close: true, float: true});
    // for your experience, please click the button to run this code snippet
}

function showConcate(){
    const formId7 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
    const formId8 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
    formBuilder.createTabForm({"Login": formId7, "Sign up": formId8}, "body");
   // for your experience, please click the button to run this code snippet
}

function showDrag(){
    
    const formId9 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
    const formId10 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
    formBuilder.createTabForm({"Drag": formId9, "Here": formId10}, "body", {drag: true, close: false, float: false});
   // for your experience, please click the button to run this code snippet
}

function showClose(){
    
    const formId11 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
    const formId12 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
    formBuilder.createTabForm({"Login": formId11, "Sign up": formId12}, "body", {drag: false, close: true, float: false});
   // for your experience, please click the button to run this code snippet
}
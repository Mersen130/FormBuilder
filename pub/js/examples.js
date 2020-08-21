const formBuilder = new FormBuilder();

function addGroupDemo(){
    const formId1 = formBuilder.addGroup("login");
    const formId2 = formBuilder.addGroup("login", {useCss: false});  // disable the css styling for the new form
}

function createTabForm1Demo(){
    const formId1 = formBuilder.addGroup("question", { customCss: { width: "auto" } });
    const formId2 = formBuilder.addGroup("contactMe", { customCss: { width: "auto" } });
    const formId3 = formBuilder.addGroup("mediaPost", { customCss: { width: "auto" } });
    formBuilder.createTabForm({"Question": formId1, 
                                "Contact Me": formId2, 
                                "Media(Drag Here)": formId3
                            }, "body", {drag: true, close: true, float: false});
}

function createTabForm2Demo(){
    const formId4 = formBuilder.addGroup("login", { customCss: { width: "auto" } });
    const formId5 = formBuilder.addGroup("signup", { customCss: { width: "auto" } });
    formBuilder.createTabForm({"login": formId4, 
                                "signup1": formId5
                            }, "body", {"float": true, "close": true});
}

function getLastAddedDemo(){
    const formId1 = formBuilder.addGroup("login");
    alert(formId1 === formBuilder.getLastAdded());
}

function getInputDemo(){
    const formId1 = formBuilder.addGroup("login");
    alert(formBuilder.getInput(formId1));  // [undefined, undefined, undefined], assume no user input
}

function getStyleDemo(){
    const formId1 = formBuilder.addGroup("login");
    console.log(formBuilder.getStyle(formId1));
}

function selectFormDemo(){
    const formId1 = formBuilder.addGroup("login");
    formBuilder.selectForm(formId1).css( "width", "200%" );  // set formId1's width to 200%
}

function appendLineDemo(){
    const newSubmitButton = [{
        name: "",
        tag: "input",
        type: "submit",
        placeholder: "",
        value: "Cancel",
    }];
    const formId1 = formBuilder.addGroup("login");
    const formId2 = formBuilder.appendLine(formId1, newSubmitButton);
}

function rerenderDemo(){
    const formId1 = formBuilder.addGroup("login");
    const formId2 = formBuilder.rerender(formId1);
}

function insertLineDemo(){
    const newEmailInput = [{
        name: "Email",
        tag: "input",
        type: "email",
        placeholder: "123456@example.com",
        value: "",
    }]
    const formId1 = formBuilder.addGroup("login");
    formBuilder.insertLine(formId1, 1, newEmailInput);
    // insert an email field at the line2 of formId1
}

function appendElementAtLineDemo(){
    const newEmailInput = {
        name: "Email",
        tag: "input",
        type: "email",
        placeholder: "123456@example.com",
        value: "",
    }
    const formId1 = formBuilder.addGroup("login");
    formBuilder.appendElementAtLine(formId1, 1, newEmailInput);
    // add an email field at the end of line1 of formId1
}

function insertElementAtLineDemo(){
    const newEmailInput = {
        name: "Email",
        tag: "input",
        type: "email",
        placeholder: "123456@example.com",
        value: "",
    }
    const formId1 = formBuilder.addGroup("login");
    formBuilder.insertElementAtLine(formId1, 1, 0, newEmailInput);
    // add an email field at the begining of line1 of formId1
}


function setElementPropertiesAtLineDemo(){
    const formId1 = formBuilder.addGroup("login");
    formBuilder.setElementPropertiesAtLine(formId1, {"name": "Email", "type": "email"}, 0);
    // equivalent to below since line 0 only have 1 element
    // formBuilder.setElementPropertiesAtLine(formId1, {"name": "Email", "type": "email"}, 0, [0]);
    // set elements' names in line0 to "Email" and tag to "email"
}

function changeParentDemo(){
    $("body").append("<h1 id='hippo'>I'm #hippo, press f12 to see the parent-children relationship</h1>")
    const formId1 = formBuilder.addGroup("login"); // default parent of addGroup is <body></body>
    // assume we have an element with id = "hippo"
    formBuilder.changeParent(formId1, "#hippo"); // formId1 is now a children of #hippo
}

function onEventDemo(){
    const callback = () => {
        alert(formBuilder.getInput(formId1));
    }
    const formId1 = formBuilder.addGroup("login");
    formBuilder.onEvent(formId1, 0, 0, "change", callback).onEvent(formId1, 1, 0, "change", callback);
    // alert when inputs are typed in line 0 and line 1.
}

function removeFormDemo(){
    const formId1 = formBuilder.addGroup("login");
    const formId2 = formBuilder.removeForm(formId1).addGroup("signup");
    // remove formId1 and add signup form
}

function deleteLineDemo(){
    const formId1 = formBuilder.addGroup("login");
    formBuilder.deleteLine(formId1, 1);
    // delete formId's line 1
}

function deleteElementAtLineDemo(){
    const formId1 = formBuilder.addGroup("personalInfo");
    formBuilder.deleteElementAtLine(formId1, 3, 0);
    // delete the first element at line 3
}
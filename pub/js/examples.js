$(document).ready(()=>{
const body = $("body");
$(".vl").css({
    "position": "fixed",
    "border-left": "1px solid grey",
    "height": "100vh",
    "float": "left",
    "top": "0",
    "left": "550px",
    "z-index": "100",
})
$("h2").css({
    "position": "relative",
    "float": "left",
    "left": "150px",
})
$("h2").last().css("left", "500px");
$("hr").css({
    "position": "relative",
    "width": "100%",
})
function formatLastCode(){
    $("code").last().css({
        "position": "relative",
        "bottom": "300px",
        "font-family": "Consolas,\"courier new\"",
        "color": "crimson",
        "background-color": "#f1f1f1",
        "padding": "2px",
        "font-size": "105%",
    })
}

// #1.1 make a signup form
let descriotion = "<p>Make a default signup form:<br>Password fields have default input checking</p>"
const formBuilder = new FormBuilder();
let formId = formBuilder.addGroup("signup", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const formBuilder = new FormBuilder();<br>2: const formId = formBuilder.addGroup(\"signup\", {});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #1.2 make login form
descriotion = "<p>Make a default login form:</p>"
formId = formBuilder.addGroup("login", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"login\", {});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #2 delete line 2
descriotion = "<p>Delete line 2:</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.deleteLine(formId, 3).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {});<br>2: formBuilder.deleteLine(formId, 3);</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #3 append one line
descriotion = "<p>Append one custom line:</p>"
formId = formBuilder.addGroup("signup", {});
const newSubmit = [{
    name: "",
    tag: "input",
    type: "submit",
    placeholder: "",
    value: "Cancel",
}]
formBuilder.appendLine(formId, newSubmit).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const newSubmit = [{name: \"\",<br>tag: \"input\",<br>,type: \"submit\",<br>placeholder: \"\",<br>value: \"Cancel\",<br>}]<br>2: formId = formBuilder.addGroup(\"signup\", {});<br>3: formBuilder.appendLine(formId, newSubmit);</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #4 insert one line at the second line of the form
const emailInput = [{
    name: "Email",
    tag: "input",
    type: "text",
    placeholder: "123456@example.com",
    value: "",
}]
descriotion = "<p>Insert one custom line at line 2 of the form:</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.insertLine(formId, 1, emailInput).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const emailInput = [{name: "Email",<br>tag: "input",<br>type: "text",<br>placeholder: \"123456@example.com\",<br>value: \"\",<br>}]<br>2: formId = formBuilder.addGroup(\"signup\", {});<br>3: formBuilder.insertLine(formId, 1, emailInput);</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #5 on event handler
descriotion = "<p>Alert with input on change:</p>"
formId = formBuilder.addGroup("signup", {});
const callback = () => {
    alert(formBuilder.getInput(formId));
}
formBuilder.onEvent(formId, 1, 0, "change", callback)
.onEvent(formId, 2, 0, "change", callback)
.onEvent(formId, 3, 0, "change", callback)
.onEvent(formId, 4, 0, "change", callback)
.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup("signup", {});<br>2: const callback = () => <br>{alert(formBuilder.getInput(formId));}<br>3: formBuilder.onEvent(formId, 1, 0, "change", callback)<br>.onEvent(formId, 2, 0, "change", callback)<br>.onEvent(formId, 3, 0, "change", callback),<br>.onEvent(formId, 4, 0, "change", callback);<br></code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #6 customize form
descriotion = "<p>Customize signup form:<br>disable fieldset, labels, and default input checking</p>"
formId = formBuilder.addGroup("signup", {useLabel: false, fieldset: false, useCheck: false});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {useLabel: false,<br> fieldset: false, useCheck: false});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #7 customize form
descriotion = "<p>Customize signup form:<br>disable default css styling</p>"
formId = formBuilder.addGroup("signup", {useCss: false});
formBuilder.selectForm(formId).css({"position": "relative", "top": "100px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {useCss: false});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #8 customize form
descriotion = "<p>Customize signup form:<br>customize css</p>"
formId = formBuilder.addGroup("signup", {customCss: {"width": "200px", "height": "400px"}});
formBuilder.selectForm(formId).css({"position": "relative"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", <br>{customCss: {\"width\": \"200px\", \"height\": \"400px\"});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #9 delete last form
descriotion = "<p>delete last form</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {})<br>2: formBuilder.removeForm(formId); <br>(or formBuilder.removeForm(formBuilder.getLastAdded()))`).css( {"position": "relative"});
formatLastCode();
body.append("<button id=\"deletelast\">remove last form</button>")
$("#deletelast").click(function(){
    formBuilder.removeForm(formId);
    $(this).html(formId + " removed");
})
body.append("<hr>")

// #9 delete all
descriotion = "<p>delete all forms</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {})<br>2: formBuilder.removeAllForm();`).css( {"position": "relative"});
formatLastCode();
body.append("<button id=\"deleteall\">remove all forms</button>")
$("#deleteall").click(function(){
    formBuilder.removeAllForm();
    $(this).html("all forms removed");
})
body.append("<hr>")
})
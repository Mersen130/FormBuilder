$(document).ready(()=>{
const body = $("body");
$(".vl").css({
    "position": "fixed",
    "border-left": "1px solid grey",
    "height": "100vh",
    "float": "left",
    "top": "0",
    "left": "550px",
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

// #1 make a signup form
let descriotion = "<p>Make a signup form:</p>"
const formBuilder = new FormBuilder();
let formId = formBuilder.addGroup("signup", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const formBuilder = new FormBuilder();<br>2: const formId = formBuilder.addGroup(\"signup\", {});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #2 delete line 2
descriotion = "<p>Delete line 2:</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.deleteLine(formId, 3).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const formBuilder = new FormBuilder();<br>2: const formId = formBuilder.addGroup(\"signup\", {});<br>3: formBuilder.deleteLine(formId, 3);</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #3 append one line
descriotion = "<p>Append one custom line:</p>"
formId = formBuilder.addGroup("signup", {});
const emailInput = [{
    name: "Email",
    tag: "input",
    placeholder: "123456@example.com",
    value: "",
}]
formBuilder.appendLine(formId, emailInput).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const emailInput = [{name: \"Email\",<br>tag: \"input\",<br>placeholder: \"123456@example.com\",<br>value: \"\",<br>}]<br>2: const formBuilder = new FormBuilder();<br>3: const formId = formBuilder.addGroup(\"signup\", {});<br>4:formBuilder.appendLine(formId, emailInput);</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #4 insert one line at the second line of the form
descriotion = "<p>Insert one custom line at line 2 of the form:</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.insertLine(formId, 2, emailInput).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const emailInput = [{name: \"Email\",<br>tag: \"input\",<br>placeholder: \"123456@example.com\",<br>value: \"\",<br>}]<br>2: const formBuilder = new FormBuilder();<br>3: const formId = formBuilder.addGroup(\"signup\", {});<br>4:formBuilder.insertLine(formId, 2, emailInput);</code>`).css( {"position": "relative"});
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

// #7 customize form
})
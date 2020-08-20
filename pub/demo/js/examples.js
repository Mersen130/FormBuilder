$("#login").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formBuilder = <span class="hljs-keyword" style="color: rgb(102, 102, 234);">new</span> FormBuilder();
<span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId1 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"login"</span>, { parentSelector: <span class="hljs-string" style="color: rgb(123, 151, 38);">"#login"</span> });</pre>`)
$("#signup").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId2 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"signup"</span>, { parentSelector: <span class="hljs-string" style="color: rgb(123, 151, 38);">"#signup"</span> });</pre>`)
$("#mediapost").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId3 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"mediaPost"</span>, { parentSelector: <span class="hljs-string" style="color: rgb(123, 151, 38);">"#mediapost"</span> });
</pre>`)
$("#personalinfo").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId4 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"personalInfo"</span>, { parentSelector: <span class="hljs-string" style="color: rgb(123, 151, 38);">"#personalinfo"</span> });
</pre>`)
$("#question").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId5 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"question"</span>, { parentSelector: <span class="hljs-string" style="color: rgb(123, 151, 38);">"#question"</span> });
</pre>`)
$("#contactme").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId6 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"contactMe"</span>, { parentSelector: <span class="hljs-string" style="color: rgb(123, 151, 38);">"#contactme"</span> });
</pre>`)
$("#concate").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId7 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"login"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
<span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId8 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"signup"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
formBuilder.createTabForm({<span class="hljs-string" style="color: rgb(123, 151, 38);">"Login"</span>: formId7, <span class="hljs-string" style="color: rgb(123, 151, 38);">"Sign up"</span>: formId8}, <span class="hljs-string" style="color: rgb(123, 151, 38);">"#concate"</span>);</pre>`)
$("#draggable").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId9 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"login"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
<span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId10 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"signup"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
formBuilder.createTabForm({<span class="hljs-string" style="color: rgb(123, 151, 38);">"Login"</span>: formId9, <span class="hljs-string" style="color: rgb(123, 151, 38);">"Sign up"</span>: formId10}, <span class="hljs-string" style="color: rgb(123, 151, 38);">"#draggable"</span>, {drag: <span class="hljs-literal" style="color: rgb(223, 83, 32);">true</span>, close: <span class="hljs-literal" style="color: rgb(223, 83, 32);">true</span>, float: <span class="hljs-literal" style="color: rgb(223, 83, 32);">false</span>});
</pre>`)
$("#closable").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId11 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"login"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
<span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId12 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"signup"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
formBuilder.createTabForm({<span class="hljs-string" style="color: rgb(123, 151, 38);">"Login"</span>: formId11, <span class="hljs-string" style="color: rgb(123, 151, 38);">"Sign up"</span>: formId12}, <span class="hljs-string" style="color: rgb(123, 151, 38);">"#closable"</span>, {drag: <span class="hljs-literal" style="color: rgb(223, 83, 32);">false</span>, close: <span class="hljs-literal" style="color: rgb(223, 83, 32);">true</span>, float: <span class="hljs-literal" style="color: rgb(223, 83, 32);">false</span>});
</pre>`)
$("#float").append(`<pre class="hljs" style="display: block; overflow-x: auto; background: rgb(241, 239, 238); color: rgb(104, 97, 94); padding: 0.5em;"><span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId13 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"login"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
<span class="hljs-keyword" style="color: rgb(102, 102, 234);">const</span> formId14 = formBuilder.addGroup(<span class="hljs-string" style="color: rgb(123, 151, 38);">"signup"</span>, { customCss: {width: <span class="hljs-string" style="color: rgb(123, 151, 38);">"auto"</span>} });
formBuilder.createTabForm({<span class="hljs-string" style="color: rgb(123, 151, 38);">"Login"</span>: formId13, <span class="hljs-string" style="color: rgb(123, 151, 38);">"Sign up"</span>: formId14}, <span class="hljs-string" style="color: rgb(123, 151, 38);">"body"</span>, {drag: <span class="hljs-literal" style="color: rgb(223, 83, 32);">false</span>, close: <span class="hljs-literal" style="color: rgb(223, 83, 32);">true</span>, float: <span class="hljs-literal" style="color: rgb(223, 83, 32);">true</span>});
<span class="hljs-comment" style="color: rgb(118, 110, 107);">// for your experience, please click the button to run this code snippet</span></pre>`)
$("#float").append(`<button id='floatBtn' onclick='showFloat()'>Try it >>></button>`)




const formBuilder = new FormBuilder();
const formId1 = formBuilder.addGroup("login", { parentSelector: "#login" });
const formId2 = formBuilder.addGroup("signup", { parentSelector: "#signup" });
const formId3 = formBuilder.addGroup("mediaPost", { parentSelector: "#mediapost" });
const formId4 = formBuilder.addGroup("personalInfo", { parentSelector: "#personalinfo" });
const formId5 = formBuilder.addGroup("question", { parentSelector: "#question" });
const formId6 = formBuilder.addGroup("contactMe", { parentSelector: "#contactme" });

const formId7 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
const formId8 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
formBuilder.createTabForm({"Login": formId7, "Sign up": formId8}, "#concate");

const formId9 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
const formId10 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
formBuilder.createTabForm({"Login": formId9, "Sign up": formId10}, "#draggable", {drag: true, close: true, float: false});

const formId11 = formBuilder.addGroup("login", { customCss: {width: "auto"} });
const formId12 = formBuilder.addGroup("signup", { customCss: {width: "auto"} });
formBuilder.createTabForm({"Login": formId11, "Sign up": formId12}, "#closable", {drag: false, close: true, float: false});

function showFloat(){
    window.open("/demo/float.html");
}


// the following code were used in alpha release

// const formId4 = formBuilder.addGroup("login");
// const formId5 = formBuilder.addGroup("signup");
// formBuilder.createTabForm({"login": formId4, "signup1": formId5}, "body", {"drag": true}).addGroup("signup")

/* $(document).ready(()=>{
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
    "width": "auto",
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
const descriotion = "<p>Make a default signup form:<br>Password fields have default input checking</p>"
const formBuilder = new FormBuilder();
const formId = formBuilder.addGroup("signup");
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: const formBuilder = new FormBuilder();<br>2: const formId = formBuilder.addGroup(\"signup\", {});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #1.2 make login form
descriotion = "<p>Make a default login form:</p>"
formId = formBuilder.addGroup("login");
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"login\", {});</code>`).css( {"position": "relative"});
formatLastCode();

body.append("<hr>")

// #2 deconste line 2
descriotion = "<p>Deconste line 2:</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.deconsteLine(formId, 3).selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {});<br>2: formBuilder.deconsteLine(formId, 3);</code>`).css( {"position": "relative"});
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

// #9 deconste last form
descriotion = "<p>deconste last form</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {})<br>2: formBuilder.removeForm(formId); <br>(or formBuilder.removeForm(formBuilder.getLastAdded()))`).css( {"position": "relative"});
formatLastCode();
body.append("<button id=\"deconstelast\">remove last form</button>")
$("#deconstelast").click(function(){
    formBuilder.removeForm(formId);
    $(this).html(formId + " removed");
})
body.append("<hr>")

// #9 deconste all
descriotion = "<p>deconste all forms</p>"
formId = formBuilder.addGroup("signup", {});
formBuilder.selectForm(formId).css({"position": "relative", "left": "250px"});
$(`#${formId}Div`).append(`<code>${descriotion}1: formId = formBuilder.addGroup(\"signup\", {})<br>2: formBuilder.removeAllForm();`).css( {"position": "relative"});
formatLastCode();
body.append("<button id=\"deconsteall\">remove all forms</button>")
$("#deconsteall").click(function(){
    formBuilder.removeAllForm();
    $(this).html("all forms removed");
})
body.append("<hr>")
}) */
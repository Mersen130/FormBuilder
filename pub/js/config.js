
function demoFactory(funcCode){
    return function (){
        const newWin = window.open("/demo/examples.html");
    
        newWin.onload = function (){
            const demoFunction = eval(`newWin.window.${funcCode}Demo()`);
        };
    }
}





window.$docsify = {
    name: 'FormBuilder.JS',
    repo: 'https://github.com/csc309-summer-2020/js-library-yeqixin',
    coverpage: true,
    
    plugins: [
        function(hook, vm) {
            hook.ready(function() {
                document.getElementById("addGroup").onclick = demoFactory("addGroup");
                document.getElementById("createTabForm1").onclick = demoFactory("createTabForm1");
                document.getElementById("createTabForm2").onclick = demoFactory("createTabForm2");
                document.getElementById("getLastAdded").onclick = demoFactory("getLastAdded");
                document.getElementById("getInput").onclick = demoFactory("getInput");
                document.getElementById("getStyle").onclick = demoFactory("getStyle");
                document.getElementById("selectForm").onclick = demoFactory("selectForm");
                document.getElementById("appendLine").onclick = demoFactory("appendLine");
                document.getElementById("rerender").onclick = demoFactory("rerender");
                document.getElementById("insertLine").onclick = demoFactory("insertLine");
                document.getElementById("appendElementAtLine").onclick = demoFactory("appendElementAtLine");
                document.getElementById("insertElementAtLine").onclick = demoFactory("insertElementAtLine");
                document.getElementById("setElementPropertiesAtLine").onclick = demoFactory("setElementPropertiesAtLine");
                document.getElementById("changeParent").onclick = demoFactory("changeParent");
                document.getElementById("onEvent").onclick = demoFactory("onEvent");
                document.getElementById("removeForm").onclick = demoFactory("removeForm");
                document.getElementById("deleteLine").onclick = demoFactory("deleteLine");
                document.getElementById("deleteElementAtLine").onclick = demoFactory("deleteElementAtLine");
                $(".tryItBtn").css({
                    "background-color": "#42b983",
                    "border": "none",
                    "color": "white",
                    "padding": "10px 22px",
                    "text-align": "center",
                    "text-decoration": "none",
                    "display": "inline-block",
                    "font-size": "16px",
                    
                });
            });
        }
    ]
}

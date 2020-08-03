/**
 * Source code for javascript library: FormBuilder.
 * 
 * prerequisite: jQuery-3.5.1
 * 
 * @author Qixin Ye
 * @contact mqixin.ye@mail.utoronto.ca
 */

"use strict"
const log = console.log;

// predefined styles
const loginStyle = {
    useCss: true,
    useLabel: true,
    numLines: 5,
    fieldset: "login",

    line0: [{
        tag: "input",
        name: "Username",
        type: "text",
        value: "",
        placeholder: "please enter your username...",
    }],

    line1: [{
        tag: "input",
        name: "Password",
        type: "password",
        value: "",
        placeholder: "please enter your password...",
    },{
        tag: "input",
        name: "Email",
        type: "email",
        value: "",
        placeholder: "123456@example.com",
    }, {
        tag: "input",
        name: "Verification code",
        type: "text",
        value: "",
        placeholder: "please enter your verification code...",
    }],
    line2: [{
        tag: "textarea",
        name: "Descirption",
        type: "",
        value: "",
        placeholder: "",
        attributes: {
            rows: "4",
            cols: "50",
        },
    }],
    line3: [{
        tag: "input",
        name: "",
        type: "submit",
        placeholder: "",
        value: "Login",
    }],
    line4: [{
        tag: "input",
        name: "Remember me",
        type: "checkbox",
        value: "",
        width: "2%",
    }]

}

const signupStyle = {
    useCss: true,  // whether to apply the default css style for every element in this formGroup
    useLabel: true,  // whether to enable labels for each element
    useCheck: true,  // whether to use default input sanity check for all elements

    fieldset: "Signup Form", // A frame which wraps all elements in this form, set to false if not needed
    numLines: 5,  // number of rows in this form
    customCss: false,  // an object of css style, custom css always takes precedence, this key is for the <form> tag of this particular formGroup. customCss can take effect while useCss is set to true.
    // customCss: {
    //     "width": "300px",
    //     "height": "600px",
    // },

    line0: [{
        tag: "input",
        name: "Username",
        type: "text",
        placeholder: "please enter your username...",
        value: "",
        tooltip: "a name",
    }],
    line1: [{
        tag: "input",  // html tag, necessary field
        name: "Password", // name for the label, necessary field even if label is disabled
        type: "password",  // tag type, necessary field
        placeholder: "please enter your pswd...",  // necessary field
        value: "",  // default value, necessary field

        tooltip: "6-18 characters, 1 lowercase letter, 1 uppercase letter, 1 numeric character",  // optional field
        regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),  // optional field
        check: passwordCheck,  // input sanity check, can be disabled by setting useCheck to false, optional field
        on: false,  // a list of events that listens to, parallel list with "callbacks", optional field TODO
        callbacks: [],  // a list of functions that execute when events are triggered, parallel list with "on", optional field
    }],
    line2: [{
        tag: "input",
        name: "Confirm\ Password",
        type: "password",
        placeholder: "please enter your pswd again...",
        value: "something...",
        regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),
        check: passwordCheck,
    }],
    line3: [{
        tag: "input",
        name: "Birthday",
        type: "date",
        placeholder: "",
        value: "",
    }],
    line4: [{
        tag: "input",
        name: "",
        type: "submit",
        placeholder: "",
        value: "Create Account",
    }]
}

const mediaPostStyle = {

}

const replyPostStyle = {

}

const followUpStyle = {

}

const questionStyle = {

}

function styleSanityCheck(style) {
    // TODO
    return true;
}


// Objects
// model of MVC pattern
function FormBuilder() {
    this.formGroups = {};  // formId-formGroup pairs of FormGroups, defined below
    this.lastAdded = "";  // the formId of the newly created formGroup
}

function FormGroup(type, style, formId) {
    this.type = type;  // the type of this formGroup, e.g: login, signup...
    this.style = style;  // the style object, which holds all information of a form group, explained below
    this.formId = formId;  // the formId of this form which help FormBuilder.js create and identify this formGroup, IMPORTANT NOTE: this formId is not the same as the id of DOM element and cannot be used as a css selector!
    this.forms = [];  // array of forms, unused for now.
    this.render(style, this.forms, formId);
}

/**
 * an incomplete version of mergestyle
 * @param {*} dst 
 * @param {*} src 
 */
function mergeStyle(dst, src){
    if ("useCss" in src) dst.useCss = src.useCss;
    if ("useLabel" in src) dst.useLabel = src.useLabel;
    if ("fieldset" in src) dst.fieldset = src.fieldset;
    if ("customCss" in src) dst.customCss = src.customCss;
    if ("useCheck" in src) dst.useCheck = src.useCheck;
    return dst;
    // TODO complete this function
}


// API starts
// controller of MVC pattern

// unless the method is requiring data, all methods of FormBuilder will return <this>
FormBuilder.prototype = {

    /**
     * Add a formGroup to the window.
     * 
     * if type provided is not recongnizable, type is treated as a custom type.
     * 
     * @returns formId of this form (a string)
     */
    addGroup: function (type, style = {}) {
        // easy version of factory design pattern

        const formId = type + Object.keys(this.formGroups).length.toString();
        const builtinStyle = eval(type + "Style");
        let temp = {};
        if (!builtinStyle){
            temp = initEmptyStyle();
            style = mergeStyle(temp, style)
        } else{
            if (jQuery.isEmptyObject(style)) {
                // deepcopy predefined styles for this type
                jQuery.extend(true, style, builtinStyle)

            } else {
                jQuery.extend(true, temp, builtinStyle)
                style = mergeStyle(temp, style);  // TODO
            }
        }
        

        if (!styleSanityCheck(style)) {
            throw new TypeError("Style format incorrect");
        }

        this.formGroups[formId] = new FormGroup(type, style, formId);
        this.lastAdded = formId;
        return formId;
    },

    /**
     * @returns the formId of the last added formGroup
     */
    getLastAdded: function () {
        return this.lastAdded;
    },

    /**
     * use jquery selector to select the form specified by formId;
     * if formId doesn't exist, select nothing
     * 
     * @param {string} formId 
     */
    selectForm: function(formId){
        return $(`#${formId}Form`);
    },

    /**
     * get all user's input via an array, the order of values 
     * are the same as the order in style object
     * 
     * if formId doesn't exist, return an empty array
     * 
     * @param {string} formId 
     */
    getInput: function (formId) {
        const ans = [];
        $(`.${formId}Input`).each(function () {
            ans.push($(this).val());
        })
        return ans;
    },

    /**
     * remove the given formId from dom
     * 
     * do nothing if given formId doesn't exist
     * @param {string} formId 
     */
    removeForm: function (formId) {
        $(`#${formId}Div`).remove();
        delete this.formGroups[formId];
        return this;
    },

    /**
     * remove all formGroups created by FormBuilder.js from dom
     * 
     */
    removeAllForm: function () {
        for (const formId in this.formGroups) {  // loop thru all forms
            $(`#${formId}Div`).remove();
            delete this.formGroups[formId];
        }
        return this;
    },

    /**
     * Rerender the formGroup of given formId
     * 
     * This method doesn't need to be manually invoked in most cases.
     * 
     * @param {string} formId 
     */
    rerender: function (formId) {
        const form = this.formGroups[formId];
        $(`#${formId}Div`).remove();
        form.rerender();
        return this;
    },

    /**
     * append a new line at the end of the formGroup specified by formId
     * 
     * do nothing if formId doesn't exist, error may occur if lineStyle is in wrong format.
     * 
     * @param {string} formId 
     * @param {Object} lineStyle 
     */
    appendLine: function (formId, lineStyle) {
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.appendLine(lineStyle);
        this.rerender(formId);
        return this;
    },

    /**
     * insert a new line at the given position of the formGroup specified by formId
     * 
     * do nothing if formId doesn't exist, error may occur if lineStyle is in wrong format.
     * 
     * @param {string} formId 
     * @param {Object} lineStyle 
     */
    insertLine: function (formId, lineNum, lineStyle){
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.insertLine(lineNum, lineStyle);
        this.rerender(formId);
        return this;
    },

    /**
     * append a new line at the end of the formGroup specified by formId
     * 
     * do nothing if line/formId doesn't exist
     * 
     * @param {string} formId 
     * @param {Object} lineStyle 
     */
    deleteLine: function (formId, lineNum) {
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.deleteLine(lineNum);
        this.rerender(formId);
        return this;
    },

    /**
     * get the style object of the given form
     * return an empty object if form doesn't exist
     * 
     * a handy function for debug purpose
     * @param {string} formId 
     */
    getStyle: function(formId){
        const form = this.formGroups[formId];
        if (form){
            return form.style;
        }
        return {};  // return an empty object if DNE
    },

    /**
     * make the <elementNum>th element of the <lineNum>th line of <formId> listen to <event>
     * @param {string} formId 
     * @param {number} lineNum 
     * @param {number} elementNum 
     * @param {string} event 
     * @param {function} callback 
     */
    onEvent: function(formId, lineNum, elementNum, event, callback){
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.onEvent(lineNum, elementNum, event, callback);
        this.rerender(formId);
        return this;
    },

    /**
     * append a new element at the end of the line of the formGroup specified by formId
     * 
     * do nothing if formId doesn't exist, error may occur if lineStyle is in wrong format.
     * 
     * @param {string} formId 
     * @param {Number} lineNum
     * @param {Object} elementStyle 
     */
     appendElementAtLine: function(formId, lineNum, elementStyle){
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.appendElementAtLine(lineNum, elementStyle);
        thie.rerender(formId);
        return this;
    },

    /**
     * insert a new element at the elementNum of the line of the formGroup specified by formId
     * 
     * do nothing if formId doesn't exist, error may occur if lineStyle is in wrong format.
     * 
     * @param {string} formId 
     * @param {Number} lineNum
     * @param {Number} elementNum
     * @param {Object} elementStyle 
     */
    insertElementAtLine: function(formId, lineNum, elementNum, elementStyle){
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.insertElementAtLine(lineNum, elementNum, elementStyle);
        this.rerender(formId);
        return this;
    },

    /**
     * delete an element at the elementNum of the line of the formGroup specified by formId
     * 
     * do nothing if formId doesn't exist, error may occur if lineStyle is in wrong format.
     * 
     * @param {string} formId 
     * @param {Number} lineNum
     * @param {Number} elementNum
     */
    deleteElementAtLine: function(formId, lineNum, elementNum){
        const form = this.formGroups[formId];
        if (!form){
            return this;
        }
        form.deleteElementAtLine(lineNum, elementNum);
        this.rerender(formId);
        return this;
    }



    // TODO
}

FormGroup.prototype = {

    render: function (style, forms, formId) {
        this.renderForm(style, forms, formId);
    },

    renderForm: function (style, forms, formId) {
        // create the outer most form and wrap it by div
        const loginForm = `<form id=${formId}Form></form>`;
        $("body").append(loginForm);
        let mainComponent = $(`#${formId}Form`);
        mainComponent.wrap(`<div id=${formId}Div></div>`);
        if (style.fieldset){
            mainComponent.append(`<fieldset id=${formId}fieldset></fieldset>`);
            mainComponent = $(`#${formId}fieldset`);
            mainComponent.append(`<legend>${style.fieldset}</legend>`);

        }

        for (let i = 0; i < style.numLines; i++) {
            renderLine(`line${i}`, style[`line${i}`], formId, mainComponent, style);  // render each line
        }

        if (style.useCss) {
            $('.' + formId + 'Input').css({
                // "width": "100%",
                "padding": "12px 20px",
                "margin-top": "8px",
                "margin-bottom": "8px",
                "display": "inline-block",
                "border": "1px solid #ccc",
                "border-radius": "4px",
                "box-sizing": "border-box",
            });
    
            $(`.${formId}Submit`).css({
                "width": "100%",
                "background-color": "#4CAF50",
                "color": "white",
                "padding": "14px 20px",
                "margin": "8px 0",
                "border": "none",
                "border-radius": "4px",
                "cursor": "pointer"
            });
    
            // $(`.${formId}Submit:hover`).css("background-color", "#45a049");
    
            $(`#${formId}Form`).css({
                "margin": "auto",
                "max-width": "50%",
                "border-radius": "5px",
                "background-color": "#f2f2f2",
                "padding": "20px",
            });    
            
        }

        if (style.customCss){
            $(`#${formId}Form`).css(style.customCss);
        }

    },

    rerender: function () {
        this.forms = [];
        this.render(this.style, this.forms, this.formId);
    },

    appendLine: function (lineStyle) {
        this.style[`line${this.style.numLines}`] = lineStyle;
        this.style.numLines++;
    },

    insertLine: function(lineNum, lineStyle){
        for (let line = this.style.numLines-1; line >= lineNum; line--) {
            const old_key = `line${line}`;
            const new_key = `line${line + 1}`;
            this.style[new_key] = this.style[old_key];
            delete this.style[old_key];
        }
        this.style.numLines++;
        this.style[`line${lineNum}`] = lineStyle;
    },

    deleteLine: function (lineNum) {
        delete this.style[`line${lineNum}`];

        for (let line = lineNum + 1; line < this.style.numLines; line++) {
            const old_key = `line${line}`;
            const new_key = `line${line - 1}`;
            this.style[new_key] = this.style[old_key];
            delete this.style[old_key];
        }
        this.style.numLines--;

    },

    onEvent: function(lineNum, elementNum, event, callback){
        const currElement = this.style[`line${lineNum}`][elementNum];
        if (!currElement.on){
            currElement.on = [event];
            currElement.callbacks = [callback];
        } else{
            currElement.push(event);
            currElement.push (callback);
        }
    },

    appendElementAtLine: function(lineNum, elementStyle){
        const lineArray = this.style[`line${lineNum}`];
        lineArray.append(elementStyle);
    },

    insertElementAtLine: function(lineNum, elementNum, elementStyle){
        const lineArray = this.style[`line${lineNum}`];
        lineArray.splice(lineNum, 0, elementStyle);
    },

    deleteElementAtLine: function(lineNum, elementNum){
        const lineArray = this.style[`line${lineNum}`];
        lineArray.splice(elementNum, 1);
    }



    // TODO

}


// helper functions
// view of MVC pattern
function renderLine(lineName, line, formId, mainComponent, style) {
        // this line contains multiple elements

        // create labels
        if (style.useLabel) {
            line.map(element => {
                if (style.useLabel && element.type !== "radio" && element.type !== "checkbox") {
                    const label = `<label class=${formId + lineName}Label for=${formId + lineName + element.name.split(" ").join("")}>${element.name && element.name+":"}</label>`;
                    mainComponent.append(label);
                }
            });
            mainComponent.append('<br>')

            const lineLabel = $(`.${formId + lineName}Label`)
            lineLabel.css({ "width": `${100 / line.length - 1}%`, "display": "inline-block" });
            lineLabel.not(':last').css("margin-right", `${line.length / (line.length - 1)}%`);
        }

        // create elements
        line.map(element => {
            let tag;
            if (element.tag === "select") {
                tag = getSelectString(lineName, element, formId, style);
            } else {
                tag = getInputString(lineName, element, formId, style);
            }

            mainComponent.append(tag);

            // adding event listeners
            if (element.on){
                element.on.map((event, ind) => {
                    $(`#${formId + lineName + element.name.split(" ").join("")}`).on(event, element.callbacks[ind]);
                })
            }

            // input check
            if (style.useCheck && element.check) {
                $(`#${formId + lineName + element.name.split(" ").join("")}`).change(function () {
                    element.check(formId + lineName + element.name.split(" ").join(""), element.regex)
                })
            }

            // tooltip style
            if (element.tooltip && style.useCss) {
                addTooltipCss(formId, lineName);
            }
        });
        const lineInput = $(`.${formId + lineName}`)
        // add space btwn elements
        let width = 100;
        if (line.length > 1){
            width = 100 / line.length - 1;
            lineInput.css({ "width": `${width}%`, "display": "inline-block" });
            lineInput.not(':last').css("margin-right", `${line.length / (line.length - 1)}%`);
        } else{
            lineInput.css({ "width": `${width}%`, "display": "inline-block" });
        }

        line.map(element => {
            if (element.width){
                $(`#${formId + lineName + element.name.split(" ").join("")}`).css({"width": element.width})
            }
        });
    }


function getSelectString(lineName, line, formId, style) {
    let tag = `<select ${line.name && "name='"+line.name.split(" ").join("")+"'"} id='${formId + lineName + line.name.split(" ").join("")}' class='${formId}Input ${formId + lineName}'>`
    tag += line.options.slice(1).reduce((accum, val) =>
        accum + `<option value="${val}">${val}</option>`, `<option value="${line.options[0]}">${line.options[0]}</option>`
    );
    tag += "</select>"
    return tag;
}

function getInputString(lineName, line, formId, style) {
    let attributes = "";
    for (const attr in line.attributes){
        attributes += attr + "='"+line.attributes[attr]+"' ";
    }
    let tag;
    if (line.type === "submit"){
        tag = `<${line.tag} class='${formId}Submit' id='${formId + lineName + line.name.split(" ").join("")}' type='submit' ${attributes} ${line.value && "value='"+line.value+"'"}>`
    } else{
        tag = `<${line.tag} class='${formId}Input ${formId + lineName}' ${line.type && ("type='"+line.type+"'")} ${line.placeholder && ("placeholder='"+line.placeholder+"'")} id='${formId + lineName + line.name.split(" ").join("")}' ${line.name && "name='"+line.name.split(" ").join("")+"'"} ${attributes} ${line.value && "value='"+line.value+"'"}></${line.tag}>`
    }
    if (line.type === "checkbox" || line.type === "radio"){
        tag += `<label for=${formId + lineName + line.name.split(" ").join("")}>${line.name}</label>`
    }
    if (line.tooltip) {
        tag = `<div class=${"tooltip" + formId + lineName}>` + tag + `<span class="tooltiptext${formId + lineName}">${line.tooltip}</span></div>`
    }
    return tag;
}

/**
 * add css to tooltip
 * 
 * @param {String} formId 
 * @param {String} lineName 
 */
function addTooltipCss(formId, lineName) {
    $(`.tooltip${formId + lineName}`).css("position", "relative");
    $(`.tooltip${formId + lineName} .tooltiptext${formId + lineName}`).css({
        "visibility": "hidden",
        "width": "120px",
        "background-color": "black",
        "color": "#fff",
        "text-align": "center",
        "border-radius": "6px",
        "padding": "5px 0",
        "position": "absolute",
        "z-index": "1",
        "top": "20px",
        "left": "103%",
    });

    $(`.tooltip${formId + lineName}`).mouseover(function () {
        $(`.tooltiptext${formId + lineName}`).css("visibility", "visible");
    }).mouseout(function () {
        $(`.tooltiptext${formId + lineName}`).css("visibility", "hidden");
    });
}


/**
 * check the password with the given regex, a user can customizes the regex, by specifying the regex in style object.
 * Or simply, replace this function if user requires more complex features.
 * 
 * default behaviour: set to border color to red if failed
 * 
 * @param {String} formInputId 
 * @param {RegExp} reg 
 */
function passwordCheck(formInputId, reg) {
    const formInput = $(`#${formInputId}`);
    if (!reg.test(formInput.val())) {
        formInput.css("border", "1px solid red");
    } else {
        formInput.css("border", "1px solid #ccc");
    }
}


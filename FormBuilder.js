/**
 * Source code for javascript library: FormBuilder.
 * 
 * Copying for any unauthorized purpose are strictly prohibited.
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
    numLines: 4,

    line0: [{
        tag: "input",
        name: "Username",

    }],

    line1: [{
        tag: "input",
        name: "Password",
    }, {
        name: "Second",
    }],

    line2: [{
        tag: "input",
        name: "Message",
        height: "100px",
    }],

    line3: [{
        tag: "select",
        name: "Language",
        options: ["--select--", "JavaScript", "Python", "C++"],
    }, {
        tag: "select",
        name: "Languagesad",
        options: ["--select--", "JavaScript", "Python", "C++"],
    }]

}

const signupStyle = {
    useCss: true,
    useLabel: true,
    useCheck: true,

    fieldset: "wrapper",
    numLines: 3,


    line0: [{
        name: "Username",
        tooltip: "a name",
    }],
    line1: [{
        name: "Password",
        tooltip: "6-18 characters, 1 lowercase letter, 1 uppercase letter, 1 numeric character",
        regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),
        check: passwordCheck,
    }],
    line2: [{
        name: "Confirm Password",
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
    this.formGroups = {};  // id-value pairs of FormGroups, defined below
    this.lastAdded = "";
}

function FormGroup(type, style, formId) {
    this.type = type;
    this.style = style;
    this.formId = formId;
    this.forms = [];  // array of forms
    this.render(style, this.forms, formId);

}


// API starts
// controller of MVC pattern
FormBuilder.prototype = {

    /**
     * Add a formGroup to the window.
     * 
     * types are limited to login, signup, mediaPost... (see handout for detail)
     * 
     * @returns a submit button dom element
     */
    addGroup: function (type, style = {}) {
        // easy version of factory design pattern

        const formId = type + Object.keys(this.formGroups).length.toString();
        if (jQuery.isEmptyObject(style)) {
            style = eval(type + "Style")  // get predefined styles for this type

        } else {
            style = mergeStyle(eval(type + "Style"), style);  // TODO
        }

        if (!styleSanityCheck(style)) {
            throw new TypeError("Style format incorrect");
        }

        this.formGroups[formId] = new FormGroup(type, style, formId);
        this.lastAdded = formId;
        return document.getElementsByClassName(`${formId}Submit`)[0];
    },

    /**
     * @returns the formId of the last added formGroup
     */
    getLastAdded: function () {
        return this.lastAdded;
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
    },

    /**
     * Rerender the formGroup of given formId
     * 
     * This method doesn't need to be manually invoked in most cases.
     * 
     * @param {string} formId 
     */
    rerender: function (formId) {
        const buf = this.formGroups[formId];
        $(`#${formId}Div`).remove();
        buf.rerender();
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
        this.formGroups[formId].appendLine(lineStyle);
        this.rerender(formId);
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
        this.formGroups[formId].deleteLine(lineNum);
        this.rerender(formId);
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

        const submit = `<input class='${formId}Submit' type='submit' value='Submit'>`
        mainComponent.append(submit);
        if (!style.useCss) {
            return;
        }

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
            "max-width": "30%",
            "border-radius": "5px",
            "background-color": "#f2f2f2",
            "padding": "20px",
        });

    },

    rerender: function () {
        this.forms = [];
        this.render(this.style, this.forms, this.formId);
    },

    appendLine: function (lineStyle) {
        this.style[`line${this.style.numLines}`] = lineStyle;
        this.style.numLines++;
    },

    deleteLine: function (lineNum) {
        delete this.style[`line${lineNum - 1}`];

        for (let line = lineNum; line < this.style.numLines; line++) {
            const old_key = `line${line}`;
            const new_key = `line${line - 1}`;
            this.style[new_key] = this.style[old_key];
            delete this.style[old_key];
        }
        this.style.numLines--;

    }




    // TODO

}


// helper functions
// view of MVC pattern
function renderLine(lineName, line, formId, mainComponent, style) {
    // this line contains only one element
    if (line.length === 1) {
        if (style.useLabel) {
            const label = `<label for=${line[0].name}>${line[0].name}:</label><br>`;
            mainComponent.append(label)
        }
        let tag;
        if (line[0].tag === "select") {
            tag = getSelectString(lineName, line[0], formId, style);
        } else {
            tag = getInputString(lineName, line[0], formId, style);
        }
        mainComponent.append(tag);

        // input check
        if (style.useCheck && line[0].check) {

            $(`#${formId + lineName + line[0].name}`).change(function () {
                line[0].check(formId + lineName + line[0].name, line[0].regex)
            })
        }
        $(`.${formId + lineName}`).css("width", `100%`);

        // tooltip style
        if (line[0].tooltip && style.useCss) {
            addTooltipCss(formId, lineName);
        }
    } else {
        // this line contains multiple elements

        // create labels
        if (style.useLabel) {
            line.map(element => {
                const label = `<label class=${formId + lineName}Label for=${formId + lineName + element.name}>${element.name}:</label>`;
                mainComponent.append(label);
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

            // input check
            if (style.useCheck && element.check) {
                $(`#${formId + lineName + element.name}`).change(function () {
                    element.check(formId + lineName + element.name, element.regex)
                })
            }

            // tooltip style
            if (element.tooltip && style.useCss) {
                addTooltipCss(formId, lineName);
            }
        });
        const lineInput = $(`.${formId + lineName}`)
        // add space btwn elements
        lineInput.css({ "width": `${100 / line.length - 1}%`, "display": "inline-block" });
        lineInput.not(':last').css("margin-right", `${line.length / (line.length - 1)}%`);


    }
}


function getSelectString(lineName, line, formId, style) {
    let tag = `<select name='${line.name}' class='${formId}Input ${formId + lineName}'>`
    tag += line.options.slice(1).reduce((accum, val) =>
        accum + `<option value="${val}">${val}</option>`, `<option value="${line.options[0]}">${line.options[0]}</option>`
    );
    tag += "</select>"
    return tag;
}

function getInputString(lineName, line, formId, style) {
    let tag = `<input class='${formId}Input ${formId + lineName}' type='text' placeholder='${line.name}' id=${formId + lineName + line.name} name=${line.name}>`
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


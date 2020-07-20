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

    numLines: 3,

    line0: [{
        name: "Username",
    }],

    line1: [{
        name: "Password",
    }, {
        name: "Second",
    }],

    line2: [{
        name: "Message",
        height: "100px",
    }]

}

const signupStyle = {

}

const mediaPostStyle = {

}

const replyPostStyle = {

}

const followUpStyle = {

}

const questionStyle = {

}


// Object initializers
function FormBuilder(){
    this.formGroups = {};  // id-value pairs of FormGroups, defined below
}

function FormGroup(type, style, formId){
    this.type = type;
    this.forms = [];  // array of forms
    this.render(type, style, this.forms, formId);

}


// API starts
FormBuilder.prototype = {

    /**
     * Add a formGroup to the window.
     * 
     * types are limited to login, signup, mediaPost... (see handout for detail)
     */
    addGroup: function(type, style = {}) {
        // easy version of factory design pattern

        const formId = type + Object.keys(this.formGroups).length.toString();
        if (jQuery.isEmptyObject(style)){
            style = eval(type + "Style")  // get predefined styles for this type

        } else{
            style = mergeStyle(eval(type + "Style"), style);  // TODO
        }

        if (!styleSanityCheck(style)){
            throw new TypeError("Style format incorrect");
        }

        this.formGroups[formId] = new FormGroup(type, style, formId);
    },

    /** 
     * get all user's input via an array
     *  
     */
    getInput: function(formId){
        const ans = [];
        $(`.${formId}Input`).each(function (){
            ans.push($(this).val());
        })
        return ans;
    },

    // TODO
}

FormGroup.prototype = {

    render: function(type, style, forms, formId){
        switch (type){
            case "login":
                this.createLogin(style, forms, formId);
                break;
            
            case "signup":
                this.createSignin(style, forms, formId);
                break;
            
            case "mediaPost":
                this.createMediaPost(style, forms, formId);
                break;
        }
    },

    createLogin: function(style, forms, formId){
        // create the outer most form and wrap it by div
        const loginForm = `<form id=${formId}Form></form>`;
        $("body").append(loginForm);
        const mainComponent = $(`#${formId}Form`);
        mainComponent.wrap("<div></div>");

        for (let i = 0; i < style.numLines; i++){
            renderLine(`line${i}`, style[`line${i}`], formId, mainComponent, style);  // render line1
        }

        const submit = `<input class='${formId}Submit' type='submit' value='Submit'>`
        mainComponent.append(submit);
        if (!style.useCss){
            return;
        }

        mainComponent.click()

        $('.' + formId + 'Input').css( {
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

        $(`.${formId}Submit:hover`).css("background-color", "#45a049");

        $(`#${formId}Form`).css({
            "margin": "auto",
            "max-width": "30%",
            "border-radius": "5px",
            "background-color": "#f2f2f2",
            "padding": "20px",
        });

    },





    // TODO
    
}


// helper functions
function renderLine(lineName, line, formId, mainComponent, style){
    if (line.length === 1){
        if (style.useLabel){
            const label = `<label for=${line[0].name}>${line[0].name}:</label><br>`;
            mainComponent.append(label)
        }
        const input = `<input class='${formId}Input ${formId+lineName}' type='text' placeholder='${line[0].name}' id=${line[0].name} name=${line[0].name}>`
        mainComponent.append(input);
        $(`.${formId+lineName}`).css("width", `100%`);
    } else{
        if (style.useLabel){
            line.map(element => {
                const label = `<label class=${formId+lineName}Label for=${element.name}>${element.name}:</label>`;
                mainComponent.append(label);
            });
            mainComponent.append('<br>')
    
            const lineLabel = $(`.${formId+lineName}Label`)
            lineLabel.css({"width": `${100/line.length-1}%`, "display": "inline-block"});
            lineLabel.not(':last').css("margin-right", `${line.length/(line.length-1)}%`);    
        }

        line.map(element => {
            const input = `<input class='${formId}Input ${formId+lineName}' type='text' placeholder='${element.name}' id=${element.name} name=${element.name}>`
            mainComponent.append(input);
        });
        const lineInput = $(`.${formId+lineName}`)
        lineInput.css({"width": `${100/line.length-1}%`, "display": "inline-block"});
        lineInput.not(':last').css("margin-right", `${line.length/(line.length-1)}%`);

    }
    mainComponent.append('<br>')
}

function styleSanityCheck(style){
    // TODO
    return true;
}
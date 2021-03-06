/**
 * Source code for javascript library: FormBuilder.
 * 
 * prerequisite: jQuery-3.5.1
 * 
 * reference:
 * Some codes of this library uses w3schools as a reference.
 * link: https://www.w3schools.com/howto/howto_js_draggable.asp
 * 
 * MIT license:
 * Copyright 2020 Qixin Ye
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * 
 * @author Qixin Ye
 * @contact mqixin.ye@mail.utoronto.ca
 */

"use strict";

(function (global){

    const log = console.log;

    const formBuilderHelper = {

        /**
         * check the password with the given regex, a user can customizes the regex, by specifying the regex in style object.
         * Or simply, replace this function if user requires more complex features.
         * 
         * default behaviour: set to border color to red if failed
         * 
         * @param {String} formInputId 
         * @param {RegExp} reg 
         */
        passwordCheck: function(formInputId, reg) {
            const formInput = $(`#${formInputId}`);
            if (!reg.test(formInput.val())) {
                formInput.css("border", "1px solid red");
            } else {
                formInput.css("border", "1px solid #ccc");
            }
        },
    };

    Object.assign(formBuilderHelper, {
        // predefined styles
        loginStyle: {
            useCss: true,
            useLabel: true,
            numLines: 4,
            fieldset: "login",
            parentSelector: "body",
            class: "",  // customized add-on classname, one can use this to interact with third-party frameworks etc.
            customCss: {
                "width": "30%",
            },

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
                check: formBuilderHelper.passwordCheck,  // input sanity check, can be disabled by setting useCheck to false, optional field
                on: false,  // a list of events that listens to, parallel list with "callbacks", optional field TODO
                callbacks: [],  // a list of functions that execute when events are triggered, parallel list with "on", optional field

            }],

            // line2: [{
            //     tag: "textarea",
            //     name: "Descirption",
            //     type: "",
            //     value: "",
            //     placeholder: "",
            //     attributes: {
            //         rows: "4",
            //         cols: "50",
            //     },
            // }],
            line2: [{
                tag: "input",
                name: "",
                type: "submit",
                placeholder: "",
                value: "Login",
            }],
            line3: [{
                tag: "input",
                name: "remember",
                type: "checkbox",
                value: "Remember me",
                customElementCss: {
                    "border": "none",
                }
            }]

        },

        signupStyle: {
            useCss: true,  // whether to apply the default css style for every element in this formGroup
            useLabel: true,  // whether to enable labels for each element
            useCheck: true,  // whether to use default input sanity check for all elements

            parentSelector: "body", // a jquery css selector, represents the parent of this formGroup, default to "body"
            fieldset: "Signup Form", // A frame which wraps all elements in this form, set to false if not needed
            numLines: 5,  // number of rows in this form
            customCss: { // an object of css style, custom css always takes precedence, this key is for the <form> tag of this particular formGroup. customCss can take effect while useCss is set to true.
                "width": "50%",
            },  
            class: "",  // customized add-on classname, one can use this to interact with third-party frameworks etc.


            line0: [{
                tag: "input",
                name: "Username",
                type: "text",
                placeholder: "please enter your username...",
                tooltip: "a name",
            }],
            line1: [{
                tag: "input",  // html tag, necessary field
                name: "Password", // name for the label, necessary field and please be unique
                type: "password",  // tag type, optional field
                placeholder: "please enter your pswd...",  // optional field
                value: "",  // default value, optional field
                class: "",  // customized add-on classname, one can use this to interact with third-party frameworks etc.

                tooltip: "6-18 characters, 1 lowercase letter, 1 uppercase letter, 1 numeric character",  // optional field
                regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),  // optional field
                check: formBuilderHelper.passwordCheck,  // input sanity check, can be disabled by setting useCheck to false, optional field
                on: false,  // a list of events that listens to, parallel list with "callbacks", optional field TODO
                callbacks: [],  // a list of functions that execute when events are triggered, parallel list with "on", optional field
                customElementCss: {  // customized css style for this particular element, do not set width in this object! this css takes precedence to the default css, optional field.
                }
            }],
            line2: [{
                tag: "input",
                name: "Confirm\ Password",
                type: "password",
                placeholder: "please enter your pswd again...",
                regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})"),
                check: formBuilderHelper.passwordCheck,
            }],
            line3: [{
                tag: "input",
                name: "Birthday",
                type: "date",
                placeholder: "",
                value: "",
            }],
            // line4: [{
            //     tag: "p",
            //     name: "",
            //     type: "",
            //     placeholder: "",
            //     value: "",
            //     // contents between element tags, <p>elementContent</p>
            //     elementContent: "hello this is demo text of js form builder, dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text",
            // }],
            line4: [{
                tag: "input",
                name: "",
                type: "submit",
                placeholder: "",
                value: "Create Account",
            }]
        },

        mediaPostStyle: {
            useCss: true,  // whether to apply the default css style for every element in this formGroup
            useLabel: true,  // whether to enable labels for each element
            useCheck: false,  // whether to use default input sanity check for all elements

            parentSelector: "body", // a jquery css selector, represents the parent of this formGroup, default to "body"
            fieldset: "Post", // A frame which wraps all elements in this form, set to false if not needed
            numLines: 4,  // number of rows in this form
            customCss: { // an object of css style, custom css always takes precedence, this key is for the <form> tag of this particular formGroup. customCss can take effect while useCss is set to true.
                "width": "50%",
            }, 

            line0: [{
                tag: "input",
                name: "Title",
                type: "text",
                placeholder: "Enter some descriptions...",
            }],

            line1: [
                {
                    tag: "textarea",
                    name: "Detail",
                    attributes: {
                        rows: "10",
                        cols: "10",
                    }
                }
            ],

            line2: [
                {
                    tag: "input",
                    name: "upload image",
                    type: "file",
                }
            ],

            line3: [
                {
                    tag: "input",
                    name: "",
                    type: "submit",
                }
            ]

        },

        personalInfoStyle: {
            useCss: true,  // whether to apply the default css style for every element in this formGroup
            useLabel: true,  // whether to enable labels for each element
            useCheck: false,  // whether to use default input sanity check for all elements

            parentSelector: "body", // a jquery css selector, represents the parent of this formGroup, default to "body"
            fieldset: "Information", // A frame which wraps all elements in this form, set to false if not needed
            numLines: 10,  // number of rows in this form
            customCss: { // an object of css style, custom css always takes precedence, this key is for the <form> tag of this particular formGroup. customCss can take effect while useCss is set to true.
                "width": "50%",
            },  

            line0: [
                {
                    tag: "input",
                    name: "First Name",
                    type: "text",
                }, {
                    tag: "input",
                    name: "Last Name",
                    type: "text"
                }

            ],
            line1: [
                {
                    tag: "input",
                    name: "Address",
                    type: "text"
                }
            ],
            line2: [
                {
                    tag: "input",
                    name: "City",
                    type: "text"
                }, {
                    tag: "input",
                    name: "Prov.",
                    type: "text"
                }, {
                    tag: "input",
                    name: "Country",
                    type: "text"
                }, {
                    tag: "input",
                    type: "text",
                    name: "Postal Code",
                    placeholder: "XXX XXX"
                }
            ],
            line3: [
                {
                    tag: "input",
                    type: "date",
                    name: "Birthday",
                }, {
                    tag: "select",
                    name: "Gender",
                    options: [ "Others", "Male", "Female"]
                }
            ],
            line4: [
                {
                    tag: "input",
                    type: "email",
                    name: "Email",
                    placeholder: "example@example.com"
                }
            ],
            line5: [
                {
                    name: "Credit/Debit/Visa",
                    tag: "input",
                    type: "text",
                    placeholder: "XXXX"
                }, {
                    tag: "input",
                    type: "text",
                    name: "",
                    placeholder: "XXXX"
                }, {
                    tag: "input",
                    type: "text",
                    name: "",
                    placeholder: "XXXX"
                }, {
                    tag: "input",
                    name: "",
                    type: "text",
                    placeholder: "XXXX"
                },
            ], 
            line6: [
                {
                    tag: "input",
                    name: "Expires",
                    type: "text",
                    placeholder: "MM/YY"
                }, {
                    tag: "input",
                    name: "CVV",
                    type: "text",
                }
            ],
            line7: [
                {
                    tag: "input",
                    name: "remember",
                    type: "checkbox",
                    tooltip: "please provide your mailing address below if unchecked",
                    value: "Mailing address is same as the address above",
                    customElementCss: {
                        "border": "none",
                    },
                    attributes: {
                      checked: "checked",  
                    }
                }
            ],
            line8: [
                {
                    tag: "input",
                    type: "text",
                    name: "Mailing address",
                    placeholder: "Optional",
                }
            ],
            line9: [
                {
                    tag: "input",
                    name: "",
                    type: "submit",
                }
            ]
        },

        questionStyle: {
            useCss: true,  // whether to apply the default css style for every element in this formGroup
            useLabel: true,  // whether to enable labels for each element
            useCheck: false,  // whether to use default input sanity check for all elements

            parentSelector: "body", // a jquery css selector, represents the parent of this formGroup, default to "body"
            fieldset: "Question", // A frame which wraps all elements in this form, set to false if not needed
            numLines: 5,  // number of rows in this form
            customCss: { // an object of css style, custom css always takes precedence, this key is for the <form> tag of this particular formGroup. customCss can take effect while useCss is set to true.
                "width": "50%",
            },  

            line0: [{
                tag: "input",
                name: "Summary",
                type: "text",
                placeholder: "Enter a one line summary...",
            }],
            line1: [{
                tag: "input",
                value: "Rich text editor",
                type: "radio",
                name: "editor",  // special note: <name> in radio/checkbox will not be used for the label next to the radio/checkbox, however, value will be
                attributes: { "selected": "true" },
                customElementCss: {
                    "border": "none",
                    "padding": "0px"
                }
            }, {
                tag: "input",
                value: "Plain text editor",
                type: "radio",
                name: "editor",
                customElementCss: {
                    "border": "none",
                    "padding": "0px"
                }
            },{
                tag: "input",
                value: "Markdown editor",
                type: "radio",
                name: "editor",
                customElementCss: {
                    "border": "none",
                    "padding": "0px"
                }
            }],
            line2: [{
                    tag: "textarea",
                    name: "Descirption",
                    attributes: {
                        rows: "20",
                        cols: "50",
                    },
            }],
            line3: [{
                tag: "select",
                name: "Show my name as",
                options: ["Doctor Strange", "Anonymous to Classmates", "Anonymous to All"]
            }],
            line4: [{
                tag: "input",
                name: "",
                type: "submit",
                value: "Post My Question!",
            }]
        },

        contactMeStyle: {
            useCss: true, // whether to apply the default css style for every element in this formGroup
            useLabel: true,  // whether to enable labels for each element
            useCheck: false,  // whether to use default input sanity check for all elements

            parentSelector: "body", // a jquery css selector, represents the parent of this formGroup, default to "body"
            fieldset: "Contact Me", // A frame which wraps all elements in this form, set to false if not needed
            numLines: 4,  // number of rows in this form
            customCss: { // an object of css style, custom css always takes precedence, this key is for the <form> tag of this particular formGroup. customCss can take effect while useCss is set to true.
                "width": "50%",
            }, 

            line0: [{
                tag: "input",
                name: "Name",
                type: "text",
                placeholder: "Enter your name...",
            }],

            line1: [
                {
                    tag: "input",
                    name: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                {
                    tag: "input",
                    type: "text",
                    name: "Phone",
                    placeholder: "xxx-xxx-xxxx",
                }
            ],
            line2: [
                {
                    tag: "textarea",
                    name: "Detail",
                    placeholder: "Issue you want to address...",
                    attributes: {
                        rows: "10",
                        cols: "10",
                    }
                }
            ],

            line3: [
                {
                    tag: "input",
                    name: "",
                    type: "submit",
                }
            ]


        },

        styleSanityCheck: function(style) {
            // TODO
            return true;
        },


        /**
         * an incomplete version of mergestyle
         * @param {*} dst 
         * @param {*} src 
         */
        mergeStyle: function(dst, src) {

            for (const key in src){
                if (key.startsWith("line")){
                    for (let i = 0; i <= src[key].length; i++){
                        mergeStyle(dst[key][i], src[key][i])
                    }
                } else{
                    dst[key] = src[key]
                }
            }
        },


        /**
         * add css to tooltip
         * 
         * @param {String} formId 
         * @param {String} lineName 
         */
        addTooltipCss: function(formId, lineName) {
            $(`.tooltip${formId + lineName}`).css({"position": "relative", "display": "inline"});
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
        },




        // make the form visible, used in create tab form
        openForm: function(evt, formId, tabNum) {
            let i, tabContent, tablinks;

            //hide all
            tabContent = document.getElementsByClassName(`tabContent${tabNum}`);
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
            }

            // unselect all and set background color
            tablinks = document.getElementsByClassName(`tablinks${tabNum}`);
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                tablinks[i].style.backgroundColor = "inherit";
            }

            // show the selected one
            document.getElementById(`${formId}Div`).style.display = "block";
            evt.currentTarget.className += " active";
            evt.currentTarget.style.backgroundColor = "#ccc";
        },


        // Make the DIV element draggable:
        dragElement: function (elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            // move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                // e.stopPropagation();
                // e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                // e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },


        closeTab: function(event){
            event.currentTarget.parentElement.style.display = 'none';
            $("#darkOverlay").hide();
        }


    })


    // Objects
    // model of MVC pattern
    function FormBuilder() {
        this.formGroups = {};  // formId-formGroup pairs of FormGroups, defined below
        this.lastAdded = "";  // the formId of the newly created formGroup
        this.tabNum = 0;  // number of concatenated forms
        $("body").append("<div id='darkOverlay'></div>")
        $("#darkOverlay").css({
            "background": "none repeat scroll 0 0 rgba(0, 0, 0, 0.6)",
            "cursor": "auto",
            "display": "block",
            "height": "100%",
            "left": "0",
            "overflow-y": "auto",
            "position": "fixed",
            "top": "0",
            "width": "100%",
            "z-index": "100", /*over everything */
        }).hide();  // hide it by default
    }

    function FormGroup(type, style, formId) {
        this.type = type;  // the type of this formGroup, e.g: login, signup...
        this.style = style;  // the style object, which holds all information of a form group, explained below
        this.formId = formId;  // the formId of this form which help FormBuilder.js create and identify this formGroup, IMPORTANT NOTE: this formId is not the same as the id of DOM element and cannot be used as a css selector!
        this.forms = [];  // array of forms, unused for now.
        this.render(style, this.forms, formId);
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
            const builtinStyle = eval("formBuilderHelper." + type + "Style");
            let temp = {};
            if (!builtinStyle) { // init a completely customized form
                formBuilderHelper.mergeStyle(temp, style)
            } else {
                if (jQuery.isEmptyObject(style)) {
                    // deepcopy predefined styles for this type
                    jQuery.extend(true, temp, builtinStyle)

                } else {
                    jQuery.extend(true, temp, builtinStyle)
                    formBuilderHelper.mergeStyle(temp, style);  // TODO
                }
            }


            if (!formBuilderHelper.styleSanityCheck(temp)) { // check if there is any invalid fields that will damage the program
                throw new TypeError("Style format incorrect");
            }

            this.formGroups[formId] = new FormGroup(type, temp, formId);  // render
            this.lastAdded = formId;
            return formId;
        },

        /**
         * Combine forms together, by putting them into a tab.
         * 
         * Note that you can't set both drag and float to true, jquery will only consider "float" when bothen of them are set to true.
         * 
         * @param {Object} tabFormIds an object specify tab names and corresponding forms to combine. e.g. {"log in": "login0", "contact us": "contactus1"}
         */
        createTabForm: function (tabFormIds, parentSelector, options = {}) {
            if (!options.close) options.close = ""; // prevent undefined span shows up
            // create tabs
            let tab = `<div class='tabWrapper${this.tabNum}'> ${options.close && '<span class="close" onclick="formBuilderHelper.closeTab(event)">&times;</span>'} <div class='tab${this.tabNum}'>`;
            let formNum = 0;
            for (const tabName in tabFormIds) {
                const formId = tabFormIds[tabName];
                const form = this.formGroups[formId];
                if (!form) {
                    continue;
                }
                tab += `<button class='tablinks${this.tabNum} ${formNum === 0 ? "active" : ""}' onclick="formBuilderHelper.openForm(event, '${formId}', ${this.tabNum})">${tabName}</button>`
                formNum ++;
            }
            tab += "</div></div>";
            const parent = $(parentSelector);
            parent.append(tab);

            // move forms under the tab just created
            let firstForm;
            formNum = 0;
            for (const tabName in tabFormIds) {
                const formId = tabFormIds[tabName];
                if (!this.formGroups[formId]) {
                    continue;
                }
                this.changeParent(formId, `div.tabWrapper${this.tabNum}`);
                $(`#${formId}Div`).addClass(`tabContent${this.tabNum}`);
                if (formNum == 0){
                    firstForm = `#${formId}Div`;
                    formNum++;
                }
            }

            // set tab css
            const tabWrapper = $(`div.tabWrapper${this.tabNum}`);
            const tabAdded = $(`div.tabWrapper${this.tabNum} div.tab${this.tabNum}`);
            const tabButtons = $(`div.tabWrapper${this.tabNum} div.tab${this.tabNum} button`);
            const tabContents = $(`div.tabWrapper${this.tabNum} div.tabContent${this.tabNum}`);
            const activeContents = $(`div.tabWrapper${this.tabNum} div.tab${this.tabNum} button.active`);

            if (options.float){
                if (options.float) $("#darkOverlay").show();
                tabWrapper.css({ "width": "50%", "position": "absolute", "z-index": "101", "margin": "150px 70px"});
            } else{
                tabWrapper.css({ "width": "50%", "position": "absolute", "z-index": "101"});
            }
            tabAdded.css({
                "overflow": "hidden",
                "border": "1px solid #ccc",
                "background-color": "#f1f1f1",
            });
            tabButtons.css({
                "background-color": "inherit",
                "float": "left",
                "border": "none",
                "outline": "none",
                "cursor": "pointer",
                "padding": "14px 16px",
                "transition": "0.3s",
                "font-size": "17px",
            }).hover(function () {
                if ($( this ).hasClass("active")) return;  // if not selected, change color on hover
                $(this).css("background-color", "#ddd");
            }, function () {
                if ($( this ).hasClass("active")) return;  // if not selected, change color on hover
                $(this).css("background-color", "inherit");
            });
            tabContents.css({
                "display": "none",
                "border": "1px solid #ccc",
                "border-top": "none",
            });
            activeContents.css({"background-color": "#ccc"});
            $(firstForm).css({"display": "block"});

            if (options.close) $(".close").css({
                "cursor": "pointer",
                "position": "absolute",
                "top": "25px",
                "right": "0%",
                "font-size": "20px",
                "padding": "12px 16px",
                "transform": "translate(0%, -50%)",
            });

            if (options.drag && !options.float) formBuilderHelper.dragElement(document.getElementsByClassName(`tabWrapper${this.tabNum}`)[0]);
            this.tabNum++;
            return this;
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
         * @param {String} formId specify a form to select
         */
        selectForm: function (formId) {
            return $(`#${formId}Form`);
        },

        /**
         * get all user's input via an array, the order of values 
         * are the same as the order in style object
         * 
         * if formId doesn't exist, return an empty array
         * 
         * @param {String} formId specify a form
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
         * @param {String} formId specify a form to remove
         */
        removeForm: function (formId) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
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
         * @param {String} formId specify a form to rerender
         */
        rerender: function (formId) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            $(`#${formId}Div`).remove();
            form.rerender();
            return this;
        },

        /**
         * append a new line at the end of the formGroup specified by formId
         * 
         * do nothing if formId doesn't exist, error may occur if lineStyle is in wrong format.
         * 
         * @param {String} formId specify a form to modify
         * @param {Object} lineStyle 
         */
        appendLine: function (formId, lineStyle) {
            const form = this.formGroups[formId];
            if (!form) {
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
         * @param {String} formId specify a form to modify
         * @param {Object} lineStyle 
         */
        insertLine: function (formId, lineNum, lineStyle) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.insertLine(lineNum, lineStyle);
            this.rerender(formId);
            return this;
        },

        /**
         * delete a line at the end of the formGroup specified by formId
         * 
         * do nothing if line/formId doesn't exist
         * 
         * @param {String} formId specify a form to modify
         * @param {Object} lineStyle 
         */
        deleteLine: function (formId, lineNum) {
            const form = this.formGroups[formId];
            if (!form) {
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
         * @param {String} formId specify a form
         */
        getStyle: function (formId) {
            const form = this.formGroups[formId];
            if (form) {
                return form.style;
            }
            return {};  // return an empty object if DNE
        },

        /**
         * make the <elementNum>th element of the <lineNum>th line of <formId> listen to <event>
         * @param {String} formId specify a form to modify
         * @param {Number} lineNum specify a line index
         * @param {Number} elementNum specify an element index
         * @param {String} event 
         * @param {Function} callback 
         */
        onEvent: function (formId, lineNum, elementNum, event, callback) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.onEvent(lineNum, elementNum, event, callback);
            this.rerender(formId);
            return this;
        },

        /**
         * append a new element at the end of the line of the formGroup specified by formId
         * 
         * do nothing if formId doesn't exist, error may occur if elementStyle is in wrong format.
         * 
         * @param {String} formId specify a form to modify
         * @param {Number} lineNum specify a line index
         * @param {Object} elementStyle
         */
        appendElementAtLine: function (formId, lineNum, elementStyle) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.appendElementAtLine(lineNum, elementStyle);
            this.rerender(formId);
            return this;
        },

        /**
         * insert a new element at the elementNum of the line of the formGroup specified by formId
         * 
         * do nothing if formId doesn't exist, error may occur if elementStyle is in wrong format.
         * 
         * @param {string} formId specify a form to modify
         * @param {Number} lineNum specify a line index
         * @param {Number} elementNum specify an element index
         * @param {Object} elementStyle 
         */
        insertElementAtLine: function (formId, lineNum, elementNum, elementStyle) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.insertElementAtLine(lineNum, elementNum, elementStyle);
            this.rerender(formId);
            return this;
        },

        /**
         * delete an element at the elementNum of the line of the formGroup specified by formId
         * 
         * do nothing if formId doesn't exist
         * 
         * @param {String} formId specify a form to modify
         * @param {Number} lineNum specify a line index
         * @param {Number} elementNum specify an element index
         */
        deleteElementAtLine: function (formId, lineNum, elementNum) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.deleteElementAtLine(lineNum, elementNum);
            this.rerender(formId);
            return this;
        },

        /**
         * modify properties of <formId> at <lineNum> <elementNum> by <style>, 
         * 
         * do nothing if formId doesn't exist
         * 
         * @param {String} formId specify a form to modify
         * @param {Object} style specify properties and value to change. e.g. {"name": "newName", "type": "email"}
         * @param {Number} lineNum specify a line index
         * @param {Array[Number]} elementNum optional, an array of indices of elments that want to modify, apply to all elements at this line if not provided
         */
        setElementPropertiesAtLine: function (formId, style, lineNum, elementNum = undefined) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.setElementPropertiesAtLine(style, lineNum, elementNum);
            this.rerender(formId);
            return this;
        },

        /**
         * move <formId> under <parentSelector>
         * 
         * do nothing if formId doesn't exist
         * 
         * @param {String} formId specify a form to move
         * @param {String} parentSelector the new parent for <formId>, a css selector used for jQuery selector
         */
        changeParent: function (formId, parentSelector) {
            const form = this.formGroups[formId];
            if (!form) {
                return this;
            }
            form.changeParent(parentSelector);
            this.rerender(formId);
            return this;
        },

        // TODO
    }

    FormGroup.prototype = {

        render: function (style, forms, formId) {
            this.renderForm(style, forms, formId);
        },

        renderForm: function (style, forms, formId) {
            // create the outer most form and wrap it by div
            const loginForm = `<form id="${formId}Form"></form>`;
            $(style.parentSelector).append(loginForm);
            let mainComponent = $(`#${formId}Form`);
            mainComponent.wrap(`<div id="${formId}Div" class="${style.class? style.class : ''}"></div>`);
            if (style.fieldset) {
                mainComponent.append(`<fieldset id=${formId}fieldset></fieldset>`);
                mainComponent = $(`#${formId}fieldset`);
                mainComponent.append(`<legend>${style.fieldset}</legend>`);

            }

            for (let i = 0; i < style.numLines; i++) {
                this.renderLine(`line${i}`, style[`line${i}`], formId, mainComponent, style);  // render each line
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
                    "max-width": "100%",
                    // "border-radius": "5px",
                    "background-color": "#f2f2f2",
                    "padding": "20px",
                });

            }

            if (style.customCss) {
                $(`#${formId}Form`).css(style.customCss);
            }

            for (let i = 0; i < style.numLines; i++) {
                const lineName = `line${i}`;
                style[lineName].map((element, index) => {
                    if (element.customElementCss){
                        $(`#${formId + lineName + element.name.split(" ").join("") + index.toString()}`).css(element.customElementCss)
                    }
                });
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

        insertLine: function (lineNum, lineStyle) {
            for (let line = this.style.numLines - 1; line >= lineNum; line--) {
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

        onEvent: function (lineNum, elementNum, event, callback) {
            const currElement = this.style[`line${lineNum}`][elementNum];
            if (!currElement.on) {
                currElement.on = [event];
                currElement.callbacks = [callback];
            } else {
                currElement.push(event);
                currElement.push(callback);
            }
        },

        appendElementAtLine: function (lineNum, elementStyle) {
            const lineArray = this.style[`line${lineNum}`];
            lineArray.push(elementStyle);
        },

        insertElementAtLine: function (lineNum, elementNum, elementStyle) {
            const lineArray = this.style[`line${lineNum}`];
            lineArray.splice(elementNum, 0, elementStyle);
        },

        deleteElementAtLine: function (lineNum, elementNum) {
            const lineArray = this.style[`line${lineNum}`];
            lineArray.splice(elementNum, 1);
        },

        setElementPropertiesAtLine: function (style, lineNum, elementNum) {
            if (elementNum == undefined) {
                elementNum = []
                for (var i = 0; i < this.style[`line${lineNum}`].length; i++) {
                    elementNum.push(i);
                }
            }
            for (const prop in style) {
                for (const element of elementNum) {
                    this.style[`line${lineNum}`][element][prop] = style[prop];
                }
            }
        },

        changeParent: function (parentSelector) {
            this.style.parentSelector = parentSelector;
        },


        // TODO
        // helper functions
        // view of MVC pattern
        renderLine: function (lineName, line, formId, mainComponent, style) {
            // this line contains multiple elements

            // create labels
            if (style.useLabel) {
                line.map((element, index) => {
                    if (style.useLabel && element.type !== "radio" && element.type !== "checkbox") {
                        const label = `<label class=${formId + lineName}Label for=${formId + lineName + element.name.split(" ").join("") + index.toString()}>${element.name && element.name + ":"}</label>`;
                        mainComponent.append(label);
                    }
                });
                mainComponent.append('<br>')

                const lineLabel = $(`.${formId + lineName}Label`)
                lineLabel.css({ "width": `${100 / line.length - 1}%`, "display": "inline-block" });
                lineLabel.not(':last').css("margin-right", `${line.length / (line.length - 1)}%`);
            }

                // create elements
            line.map((element, index) => {
                let tag;
                if (element.tag === "select") {
                    tag = this.getSelectString(lineName, element, formId, index);
                } else {
                    tag = this.getInputString(lineName, element, formId, index);
                }

                mainComponent.append(tag);

                // adding event listeners
                if (element.on) {
                    element.on.map((event, ind) => {
                        $(`#${formId + lineName + element.name.split(" ").join("") + index.toString()}`).on(event, element.callbacks[ind]);
                    })
                }

                // input check
                if (style.useCheck && element.check) {
                    $(`#${formId + lineName + element.name.split(" ").join("") + index.toString()}`).change(function () {
                        element.check(formId + lineName + element.name.split(" ").join("") + index.toString(), element.regex)
                    })
                }

                // tooltip style
                if (element.tooltip && style.useCss) {
                    formBuilderHelper.addTooltipCss(formId, lineName);
                }
            });
            const lineInput = $(`.${formId + lineName}`)
            // add space btwn elements
            let width = 100;
            if (line.length > 1) {
                width = 100 / line.length - 1;
                // $(`.tooltip${formId + lineName}`).css({ "width": `${width}%`});
                lineInput.css({ "width": `${width}%`, "display": "inline-block" });
                lineInput.not(':last').css("margin-right", `${line.length / (line.length - 1)}%`);
            } else {
                lineInput.css({ "width": `${width}%`, "display": "inline-block" });
            }

            line.map((element, index) => {
                if (element.width) {
                    $(`#${formId + lineName + element.name.split(" ").join("") + index.toString()}`).css({ "width": element.width })
                }
            });
        },


        getSelectString: function (lineName, line, formId, elementIndex) {
            let attributes = "";
            for (const attr in line.attributes) {
                attributes += attr + "='" + line.attributes[attr] + "' ";
            }
            let tag = `<select ${line.name ? "name='" + line.name.split(" ").join("") + "'" : ""} id='${formId + lineName + line.name.split(" ").join("") + elementIndex.toString()}' class='${formId}Input ${formId + lineName} ${line.class? line.class : ""}' ${attributes}>`
            tag += line.options.slice(1).reduce((accum, val) =>
                accum + `<option value="${val}">${val}</option>`, `<option value="${line.options[0]}">${line.options[0]}</option>`
            );
            tag += "</select>"
            return tag;
        },

        getInputString: function (lineName, line, formId, elementIndex) {
            let attributes = "";
            for (const attr in line.attributes) {
                attributes += attr + "='" + line.attributes[attr] + "' ";
            }
            let tag;
            if (line.type === "submit") {
                tag = `<${line.tag} class='${formId}Submit ${line.class? line.class : ""}' id='${formId + lineName + line.name.split(" ").join("") + elementIndex.toString()}' type='submit' ${attributes} ${line.value? "value='" + line.value + "'" : ""}>`

            } else if (line.type === "checkbox" || line.type === "radio") {
                tag = `<div class='${formId}Input ${formId + lineName} ${line.class? line.class : ""}' id='${formId + lineName + line.name.split(" ").join("") + elementIndex.toString()}'> <${line.tag} ${line.type? ("type='" + line.type + "'") : ""} ${line.placeholder ? ("placeholder='" + line.placeholder + "'") : ""} ${line.name ? "name='" + line.name.split(" ").join("") + "'" : ""} ${attributes} ${line.value ? "value='" + line.value + "'" : ""}>${line.elementContent? line.elementContent : ""}</${line.tag}>`
            } else {
                tag = `<${line.tag} class='${formId}Input ${formId + lineName} ${line.class? line.class : ""}' ${line.type? ("type='" + line.type + "'") : ""} ${line.placeholder ? ("placeholder='" + line.placeholder + "'") : ""} id='${formId + lineName + line.name.split(" ").join("") + elementIndex.toString()}' ${line.name ? "name='" + line.name.split(" ").join("") + "'" : ""} ${attributes} ${line.value ? "value='" + line.value + "'" : ""}>${line.elementContent? line.elementContent : ""}</${line.tag}>`
            }
            if (line.type === "checkbox" || line.type === "radio") {
                tag += `<label for=${formId + lineName + line.name.split(" ").join("") + elementIndex.toString()}>${line.value}</label></div>`
            }
            if (line.tooltip) {
                tag = `<div class=${"tooltip" + formId + lineName}>` + tag + `<span class="tooltiptext${formId + lineName}">${line.tooltip}</span></div>`
            }
            return tag;
        },

        getCustomElementCssString: function (obj){
            let ans = 'style="';
            for (const key in obj){
                ans += `${key}: ${obj[key]}; `
            }
            ans += '"';
            return ans;
        },

    }

    global.formBuilderHelper = global.formBuilderHelper || formBuilderHelper;
    global.FormBuilder = global.FormBuilder || FormBuilder;
    global.FormGroup = global.FormGroup || FormGroup;
})(window);
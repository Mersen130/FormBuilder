# Documentation <small>v1.0.0</small>
----

## Getting started

### install
```html
<script type="text/javascript" src="local location of FormBuilder.js" defer></script>
```

### initialize

```javascript
const formBuilder = new FormBuilder();
```
----
----

# API

## FormBuilder.addGroup(type, style = {}):
* `Description`: add a form to the window. If `type` provided is not recongnizable, `type` is treated as a custom type. Returns `formId` of this form (a string)
* `type`: **String**, a one word desriprion of the new form. This library provides default layouts for `login`, `signup`, `mediaPost`, `replyPost`, `followUp`, `question`, `contactMe`. More types coming soon...
* `style`: TODO
* `return`: **String**, a unique formId for the newly created form, this formId can be used as an arguments for other methods of this library.
* example:
```javascript
const formId1 = formBuilder.addGroup("login");
const formId2 = formBuilder.addGroup("login", {useCss: false});  // disable the css styling for the new form
```

----

## FormBuilder.getLastAdded():
* `Description`: get the `formId` of the last form added by this instanceof FormBuilder.
* `return`: **String**, a unique formId for the newly created form, this formId can be used as an arguments for other methods of this library.
* example:
```javascript
const formId1 = formBuilder.addGroup("login");
console.log(formId1 === formBuilder.getLastAdded());  // true
```

----

## FormBuilder.selectForm(formId):
* `Description`: use jquery selector to select the form specified by `formId`; If `formId` doesn't exist, selects nothing.
* `formId`: **String**, a unique formId created by [FormBuilder.addGroup](#formbuilderaddGrouptype-style-)
* `return`: **jQuery**, a jQuery selector
* example:
```javascript
const formId1 = formBuilder.addGroup("login");
formBuilder.selectForm(formId1).css( "width", "200%" );  // set formId1's width to 200%
```

----

## FormBuilder.getInput(formId):
* `Description`: get all user's input via an array, the order of values are the same as the order they appear in the [style](todo) object. If `formId` doesn't exist, return an empty array.
* `formId`: **String**, a unique formId created by [FormBuilder.addGroup](#formbuilderaddGrouptype-style-)
* `return`: **Array**, array of values, storing user input of the target form.
* example:
```javascript
const formId1 = formBuilder.addGroup("login");
console.log(formBuilder.getInput(formId1));  // [undefined, undefined, undefined], assume no user input
```

----

## FormBuilder.removeForm(formId):
* `Description`: remove the given `formId` from DOM. Do nothing if given `formId` doesn't exist
* `formId`: **String**, a unique formId created by [FormBuilder.addGroup](#formbuilderaddGrouptype-style-)
* `return`: **FormBuilder**, the calling instance of the FormBuilder
* example:
```javascript
const formId1 = formBuilder.addGroup("login");
const formId2 = formBuilder.removeForm(formId1).addGroup("signup");  // remove formId1 and create a new signup form
// you can perform sequential operations because this method is returning an instance of FormBuilder
```

----

## FormBuilder.rerender(formId):
* `Description`: Rerender `formId`. In most cases, you don't need to call this method manually.
* `formId`: **String**, a unique formId created by [FormBuilder.addGroup](#formbuilderaddGrouptype-style-)
* `return`: **FormBuilder**, the calling instance of the FormBuilder
* example:
```javascript
const formId1 = formBuilder.addGroup("login");
const formId2 = formBuilder.rerender(formId1).addGroup("signup");  // rerender formId1 and create a new signup form
// you can perform sequential operations because this method is returning an instance of FormBuilder
```

----

## FormBuilder.appendLine(formId, lineStyle):
* `Description`: append a new line at the end of the `formId`. Do nothing if `formId` doesn't exist, error may occur if `lineStyle` is in wrong format.
* `formId`: **String**, a unique formId created by [FormBuilder.addGroup](#formbuilderaddGrouptype-style-)
* `lineStyle`: TODO
* `return`: **FormBuilder**, the calling instance of the FormBuilder
```javascript
const newSubmitButton = [{
    name: "",
    tag: "input",
    type: "submit",
    placeholder: "",
    value: "Cancel",
}];
const formId1 = formBuilder.addGroup("login");
const formId2 = formBuilder.appendLine(formId1, newSubmitButton).addGroup("signup");  // append a submit button at the end of formId1 and create a new signup form
// you can perform sequential operations because this method is returning an instance of FormBuilder
```

----

## FormBuilder.insertLine(formId, lineNum, lineStyle):
* `Description`: insert a new line at `lineNum` of the `formId`. Do nothing if `formId` doesn't exist, error may occur if `lineStyle` is in wrong format.
* `formId`: **String**, a unique formId created by [FormBuilder.addGroup](#formbuilderaddGrouptype-style-)
* `lineNum`: **Number**, new line will be inserted to this index.
* `lineStyle`: TODO
* `return`: **FormBuilder**, the calling instance of the FormBuilder
```javascript
const newEmailInput = [{
    name: "Email",
    tag: "input",
    type: "text",
    placeholder: "123456@example.com",
    value: "",
}]
const formId1 = formBuilder.addGroup("login");
const formId2 = formBuilder.insertLine(formId1, 1, newEmailInput).addGroup("signup");  // insert an email field at the line2 of formId1 and create a new signup form
// you can perform sequential operations because this method is returning an instance of FormBuilder
```


<!--
* `Description`: 
* `type`: 
* `style`:
* `return`:
* example:
```javascript
```
-->
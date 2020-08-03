
// helper functions
// view of MVC pattern
function renderLine(lineName, line, formId, mainComponent, style) {
    // this line contains only one element
    if (line.length === 1) {
        if (style.useLabel && line[0].type !== "radio" && line[0].type !== "checkbox") {
            const label = `<label for=${formId + lineName + line[0].name.split(" ").join("")}>${line[0].name && line[0].name+":"}</label><br>`;
            mainComponent.append(label)
        }
        let tag;
        if (line[0].tag === "select") {
            tag = getSelectString(lineName, line[0], formId, style);
        } else {
            tag = getInputString(lineName, line[0], formId, style);
        }
        mainComponent.append(tag);

        // adding event listeners
        if (line[0].on){
            line[0].on.map((event, ind) => {
                $(`#${formId + lineName + line[0].name.split(" ").join("")}`).on(event, line[0].callbacks[ind]);
            })
        }

        // input check
        if (style.useCheck && line[0].check) {

            $(`#${formId + lineName + line[0].name.split(" ").join("")}`).change(function () {
                line[0].check(formId + lineName + line[0].name.split(" ").join(""), line[0].regex)
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
        lineInput.css({ "width": `${100 / line.length - 1}%`, "display": "inline-block" });
        lineInput.not(':last').css("margin-right", `${line.length / (line.length - 1)}%`);


    }
}

const creationNewGoodForm = document.getElementById("new_good_creation_form")
creationNewGoodForm.dataset.formIndex = 0

// Validation config
const creationNewGoodConfig = {
    name: ['required'],
    desc: ['required'],
    'price-current': ['required'],
    'price-full': ['required'],
    thumb1: ['urlValidator'],
    thumb2: ['urlValidator']
}

const forms = [
    {
        node: creationNewGoodForm,
        validations: creationNewGoodConfig
    }
]

creationNewGoodForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (validate(event.target)) {
        const data = await JSON.stringify(createObjectFormData(event.target))
        fetch('http://localhost:3000/api/goods/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
            .then(response => console.log(response.json()))
    }
})

function validate(form) {
    if (form.dataset.form === "validate") {
        const validations = forms[form.dataset.formIndex].validations
        for (let fieldName of Object.keys(validations)) {
            const fieldValue = form[fieldName].value
            for (let checkName of validations[fieldName]) {
                let result = true
                switch (checkName) {
                    case "required":
                        result = requiredValidation(fieldValue)
                        break;
                    case "urlValidator":
                        result = urlValidation(fieldValue)
                        break;
                }
                if (result === false) {
                    return false
                }
            }      
        }
        return true
    }

    function requiredValidation(value) {
        return !!value
    }

    function urlValidation(value) {
        return true
    }
}

function createObjectFormData(form) {
    const object = {}
    for (let element of form.elements) {
        if (!(element.type && element.type === "submit")) {
            object[element.name] = element.value
        }
    }
    return object
}

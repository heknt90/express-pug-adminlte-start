function alertMessage({className="bg-info", title="Message", subtitle="", body="", autohide=false}) {
    $(document).Toasts('create', {
        class: className,
        title,
        subtitle,
        body,
        autohide,
        autoremove: true,
        delay: 3000,
        fade: true
    })
}

function alertSuccessMessage(body) {
    alertMessage({
        className: 'bg-success',
        title: 'Успешно',
        body,
        autohide: true,
    })
}

function alertErrorMessage(body) {
    alertMessage({
        className: "bg-danger",
        title: "Ошибка",
        body,
        autohide: true
    })
}
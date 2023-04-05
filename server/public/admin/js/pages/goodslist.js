(function() {
    'use strict'

    var deletingGoodId
    $('#goods_list .card [data-handler="deleteGoodById"]').on("click", deleteHandler)
    $(confirmDeleteButton).on('click', deleteConfirmHandler)
    $(deleteConfirmModal).on("hide.bs.modal", () => {
        deletingGoodId = null
    })
    
    function deleteHandler(event) {
        event.preventDefault()
        $(deleteConfirmModal).modal('show')
        deletingGoodId = $(event.target).attr("data-id")
    }

    async function deleteGoodById(id) {
        fetch("/api/goods/"+id+"/delete", {
            method: "DELETE",
        })
            .then(_ => fetch("/api/goods"))
            .then(clearDeleting)
            .then(_ => {
                alertSuccessMessage('Удаление товара завершено.')
                return setTimeout(() => {}, 2000)
            })
            .then(_ => location.reload())
            .catch(err => {
                clearDeleting()
                alertErrorMessage('Произоошла ошибка при удалении товара.\n' + err)
            })
    }

    function deleteConfirmHandler() {
        deleteGoodById(deletingGoodId)
    }

    function clearDeleting() {
        deletingGoodId = null
        $(deleteConfirmModal).modal('hide')
    }
})()
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
            .then(r => fetch("/api/goods"))
            .then(g => location.reload())
    }

    function deleteConfirmHandler() {
        deleteGoodById(deletingGoodId)
    }
})()
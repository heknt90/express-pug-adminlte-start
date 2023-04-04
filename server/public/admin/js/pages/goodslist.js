(function() {
    'use strict'
    $('#goods_list .card [data-handler="deleteGoodById"]').on("click", deleteHandler)
    
    function deleteHandler(event) {
        event.preventDefault()
        deleteGoodById($(event.target).attr("data-id"))
    }

    async function deleteGoodById(id) {
        fetch("/api/goods/"+id+"/delete", {
            method: "DELETE",
        })
            .then(r => fetch("/api/goods"))
            .then(g => location.reload())
            // .then(reponse => response.json())
            // .then(newGoods => {
            //     $('#goods_list')
            // })
    }
})()
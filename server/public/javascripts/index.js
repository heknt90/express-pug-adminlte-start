const renderGoodList = (goodsData) => {
    const goodlist = document.createElement("div")
    goodlist.setAttribute("id", "good-list")
    for (let good of goodsData) {
        const item = document.createElement("div")
        const link = document.createElement("a")
        link.setAttribute("href", `/good/${good.id}`)
        const title = document.createElement("h3")
        title.innerText = good.name
        link.append(title)
        item.append(link)
        const price = document.createElement("div")
        price.classList.add("price")
        price.dataset.price = good.price.current 
        price.dataset.oldprice = good.price.full
        const priceFull = document.createElement("del")
        priceFull.innerText = new Intl.NumberFormat("ru-RU", {style:"currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0}).format(good.price.full)
        price.append(priceFull)
        const priceCurrent = document.createElement("p")
        priceCurrent.innerText = new Intl.NumberFormat("ru-RU", {style:"currency", currency: "RUB", maximumFractionDigits: 0, minimumFractionDigits: 0}).format(good.price.current)
        price.append(priceCurrent)
        item.append(price)
        const description = document.createElement("p")
        description.innerText = good.desc
        item.append(description)
        const thumbs = document.createElement("div")
        thumbs.classList.add("thumbs")
        for (let thumb of good.thumbs) {
            const image = document.createElement("img")
            image.src=thumb.url
            thumbs.append(image)
        }
        item.append(thumbs)
        goodlist.append(item)
    }   
    document.getElementById("goods").innerHTML = goodlist.innerHTML
}

function postReq() {
    fetch('/api/goods/new', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
        body: JSON.stringify({
            name: "Example name",
            desc: "Example description"
        })
    })
}

const goods = fetch('/api/goods')
    .then(responseGoods => responseGoods.json())
    .then(object => object.data)
    .then(renderGoodList)


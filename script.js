fetch('data.json')
    .then(res => res.json())
    .then(data => {
        let accueil = data.accueil.produits

        // données Panier
        var panier = 0
        var listAchat = []

        const container = document.querySelector('.articles')

        // ajout dans les nouveaux produits
        let star = ""

        accueil.forEach(element => {
            star = ""

            for(let i = 0; i < element.note; i++){
                star += `<img src="./image/étoile.png" alt="" class="star">`
            }

            container.innerHTML += `
                <div class="scarte" id="${element.id}">
                    <img src="${element.image}" alt="" class="scarteImg">
                    <a href="#">${element.nom}</a>
                    <p>${element.prix} €</p>
                    <div class="note">
                        ${star}
                    </div>
                </div>
            `
        });

        const scarte = document.querySelectorAll('.scarte')

        scarte.forEach(scarteElt => {
            scarteElt.addEventListener('click', function () {
                console.log(scarteElt.id)
                accueil.forEach(element => {
                        if (element.id === parseInt(scarteElt.id)){
                        variable.innerHTML = `
                            <div id="path">
                            <ul id="location"></ul>
                            </div>
                        
                        
                            <main>
                                <div id="infoElement">
                                    <img src="${element.image}" alt="">
                                    <div id="descri">
                                        <div id="about">
                                            <h1>${element.nom}</h1>
                                            <h2>${element.prix}</h2>
                                        </div>
                                        <form action="" id="quantity">
                                            <div>
                                                <p>Taille</p>
                                                <select name="" id="">
                                                    <option value="">S</option>
                                                    <option value="">L</option>
                                                    <option value="">M</option>
                                                </select>
                                            </div>
                                            <div>
                                                <p>Quantité</p>
                                                <input id="inputQuantity" type="number" name="" id="" min=0 value="0">
                                            </div>
                                            <p id="button">AJOUTER AU PANIER</p>
                                        </form>
                                    </div>
                                </div>
                            </main>
                        `
                        const button = document.querySelector('#button')

                                button.addEventListener('click', function () {

                                    let articleNbr = parseInt(document.querySelector('#inputQuantity').value)

                                    for (let i = 0; i < articleNbr; i++){
                                        listAchat.push({"nom":element.nom, "prix":element.prix})
                                    }

                                    const nbrPanier = document.querySelector('#panierFlottant').querySelector('p')
                                    const nbrPanier2 = document.querySelector('#nbr')

                                    nbrPanier.innerText = listAchat.length
                                    nbrPanier2.innerText = listAchat.length
                                })
                        }
                })
            })
        })

        // changement de page

        const page = document.querySelector('nav').querySelectorAll('.navSection')
        const variable = document.querySelector('#variable')

        let path = ""

        page.forEach(content => {

            content.addEventListener('click', function () {
                variable.innerHTML = productPageContent
                let article = content.attributes.value.nodeValue
                const location = document.querySelector('#location')

                //PATH
                path = ""
                data[article].path.forEach(loc => {
                    location.innerHTML += `<li>/${loc}</li>`
                })

                //produits
                data[article].produits.forEach(element => {
                    star = ""
    
                    for(let i = 0; i < element.note; i++){
                        star += `<img src="./image/étoile.png" alt="" class="star">`
                    }
    
                    document.querySelector('#vente').innerHTML += `
                        <div class="gcarte" id="${element.id}">
                            <img src="${element.image}" alt="" class="scarteImg">
                            <a href="#">${element.nom}</a>
                            <p>${element.prix} €</p>
                            <div class="note">
                                ${star}
                            </div>
                        </div>
                    `
                })

                //page Element selectioner

                const gcarte = document.querySelectorAll('.gcarte')

                gcarte.forEach(gcarteElt => {
                    gcarteElt.addEventListener('click', function () {
                        data[article].produits.forEach(element => {
                             if (element.id === parseInt(gcarteElt.id)){
                                variable.innerHTML = `
                                    <div id="path">
                                    <ul id="location"></ul>
                                    </div>
                                
                                
                                    <main>
                                        <div id="infoElement">
                                            <img src="${element.image}" alt="">
                                            <div id="descri">
                                                <div id="about">
                                                    <h1>${element.nom}</h1>
                                                    <h2>${element.prix}</h2>
                                                </div>
                                                <form action="" id="quantity">
                                                    <div>
                                                        <p>Taille</p>
                                                        <select name="" id="">
                                                            <option value="">S</option>
                                                            <option value="">L</option>
                                                            <option value="">M</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <p>Quantité</p>
                                                        <input id="inputQuantity" type="number" name="" id="" min=0 value="0">
                                                    </div>
                                                    <p id="button">AJOUTER AU PANIER</p>
                                                </form>
                                            </div>
                                        </div>
                                    </main>
                                `
                                const button = document.querySelector('#button')

                                button.addEventListener('click', function () {

                                    let articleNbr = parseInt(document.querySelector('#inputQuantity').value)

                                    for (let i = 0; i < articleNbr; i++){
                                        listAchat.push({"nom":element.nom, "prix":element.prix})
                                    }

                                    const nbrPanier = document.querySelector('#panierFlottant').querySelector('p')
                                    const nbrPanier2 = document.querySelector('#nbr')

                                    nbrPanier.innerText = listAchat.length
                                    nbrPanier2.innerText = listAchat.length
                                })
                             }
                        })
                    })
                })
            })
        })

        //Page de connection

        const connect = document.querySelectorAll('.connect')

        connect.forEach(element => {

            element.addEventListener('click', function () {
                variable.innerHTML = pageDeConnection
            })
        })

        //Page contenu panier
        const detailPanier = document.querySelector('#detailPanier')

        detailPanier.addEventListener('click', function () {
            let list = ""
            let price = 0

            listAchat.forEach (element => {
                list += `<li>${element.nom}</li>`
                price += element.prix
            })
            
            variable.innerHTML = `
                <main>
                    <div id="panierContainer">
                        <div id="listAchat">
                            <h1>Mon panier</h1>
                            <ul id="liPanier">
                                ${list}
                            </ul>
                        </div>
                        <div id="achat">
                            <div class="prixPanier">
                                <p>${listAchat.length} articles</p>
                                <p>${price} €</p>
                            </div>
                            <div class="prixPanier">
                                <p>Total</p>
                                <p>${price} €</p>
                            </div>
                            <p id="button">Check-out</p>
                        </div>
                    </div>
                </main>
            `
        })
    })
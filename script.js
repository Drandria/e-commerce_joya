fetch('data.json')
    .then(res => res.json())
    .then(data => {
        let accueil = data.accueil

        const container = document.querySelector('.articles')

        let star = ""

        accueil.forEach(element => {
            star = ""

            for(let i = 0; i < element.note; i++){
                star += `<img src="./image/étoile.png" alt="" class="star">`
            }

            container.innerHTML += `
                <div class="scarte">
                    <img src="${element.image}" alt="" class="scarteImg">
                    <a href="#">${element.nom}</a>
                    <p>${element.prix} €</p>
                    <div class="note">
                        ${star}
                    </div>
                </div>
            `
        });
    })
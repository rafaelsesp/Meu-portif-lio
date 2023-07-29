    function toogleMode(){
        const html = document.documentElement

        // Ou html.classList.toggle('light')
        if(html.classList.contains('light')){
            html.classList.remove('light')
        } else {
            html.classList.add('light')
        }

        //pegar a img
        const img = document.querySelector("#profile img")
        //Substituir a img
        if(html.classList.contains('light')){
            //com light mode, add img
            img.setAttribute('src', '../assets/profile-light.jpg')
            img.setAttribute('alt', 'Foto de Rafael de barba, cabelo curto e desalinhado, usando camisa azul da Holister, com um parede branca e com uma porta marrom no fundo (meio à meio)')
        } else{
            //sem light mode, remove img
            img.setAttribute('src', '../assets/profile.jpg')
            img.setAttribute('alt', 'Foto (com filtro azulado) de Rafael de barba, cabelo curto e desalinhado, usando camisa azul da Holister, com um parede branca e com uma porta marrom no fundo (meio à meio)')
        }
    }

let accordion = document.getElementsByClassName('box-container')

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',
        function(){
            this.classList.toggle('active')
        }
    )
}

let navContainer = document.getElementById('menu')
let links = navContainer.getElementsByClassName('btn')

for(i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace(' active')
        this.className += ' active'
    })
}
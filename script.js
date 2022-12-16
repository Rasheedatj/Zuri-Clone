let modal = document.querySelector('.modal');
let poolModal = document.querySelector('.modal-talent');
let openBtn = document.querySelector('#myBtn')
let openBtn2 = document.querySelector('#myBtn2')
let openBtn3 = document.querySelector('#myBtn3')
let poolOpenBtn = document.querySelector('#poolModalBtn')
let poolOpenBtn2 = document.querySelector('#poolModalBtn2')

openBtn.addEventListener('click',
    function(){
      modal.style.display ='flex'
      modal.style.backgroundColor ='rgba(0, 0, 0, 0.7)'
    }
)
openBtn2.addEventListener('click',
    function(){
      modal.style.display ='flex'
      modal.style.backgroundColor ='rgba(0, 0, 0, 0.7)'
    }
)
openBtn3.addEventListener('click',
    function(){
      modal.style.display ='flex'
      modal.style.backgroundColor ='rgba(0, 0, 0, 0.7)'
    }
)

poolOpenBtn.addEventListener('click', function(){
  poolModal.style.display = 'flex'
  poolModal.style.backgroundColor ='rgba(0, 0, 0, 0.7)'
})
poolOpenBtn2.addEventListener('click', function(){
  poolModal.style.display = 'flex'
  poolModal.style.backgroundColor ='rgba(0, 0, 0, 0.7)'
})

window.addEventListener('click', function(e)
  {
    const target = e.target
    if(e.target === modal){
      modal.style.display = 'none'
    }else if(e.target === poolModal){
      poolModal.style.display = 'none'
    }
  }
)


// navbar
let navContainer = document.getElementById('menu')
let links = navContainer.getElementsByClassName('btn')

for (let i = 0; i < links.length; i++){
  links[i].addEventListener('click', function(){
    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active')
    this.className += ' active'
  })
}



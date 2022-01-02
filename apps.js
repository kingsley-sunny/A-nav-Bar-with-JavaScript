let navBody = document.querySelector('.navBody')
const burger = document.querySelector('.burger-container');
const ul = document.querySelector('ul')

loadAllEventListners()

function loadAllEventListners(){
    burger.addEventListener('click', function(){
        if(ul.classList.contains('overflow-hidden')){
            burger.children[0].style.transform = 'rotate(-45deg) translateY(15px)';
            burger.children[1].style.display = 'none';
            burger.children[2].style.transform = 'rotate(45deg) translateY(-15px)';
            ul.classList.remove('overflow-hidden');
            
        } else {
            burger.children[0].style.transform = 'rotate(0deg) translateY(0px)';
            burger.children[1].style.display = 'block';
            burger.children[2].style.transform = 'rotate(0deg) translateY(0px)';
            ul.classList.remove('overflow-hidden');
            ul.classList.add('overflow-hidden');
        }
    })
}

// let b = document.getElementById('bb')



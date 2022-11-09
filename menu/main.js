const hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click',()=>{
    let ul=document.querySelector('.ul');
    ul.classList.toggle('is-active');
})
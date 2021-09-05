//------------------ NAVIGATION
gsap.to('.one--link',{
    opacity:1, 
    delay:0.1,
    duration:0.6,
     y:-30
});
gsap.to('.two--link',{
    opacity:1, 
    delay:0.3,
    duration:0.6,
     y:-30
});
gsap.to('.three--link',{
    opacity:1, 
    delay:0.5,
    duration:0.6,
     y:-30
});




//------------------ HEADER
gsap.to('.header--content__img--img',{
    opacity:1, 
    duration:0.5,
    delay:0.7,
     y:-50
});




//------------------- HOW
gsap.to('.num1',{
    opacity:1, 
    duration:0.3,
    scrollTrigger: '.num1',
     y:-210,
});
gsap.to('.num2',{
    opacity:1, 
    delay:0.2,
    duration:0.3,
    scrollTrigger: '.num2',
     y:-210
});
gsap.to('.num3',{
    opacity:1, 
    duration:0.3,
    scrollTrigger: '.num3',
     y:-210
});
gsap.to('.num4',{
    opacity:1, 
    delay:0.2,
    duration:0.3,
    scrollTrigger: '.num4',
     y:-210
});
gsap.to('.num5',{
    opacity:1, 
    duration:0.3,
    scrollTrigger: '.num5',
     y:-210
});
gsap.to('.num6',{
    opacity:1, 
    delay:0.2,
    duration:0.3,
    scrollTrigger: '.num6',
     y:-210
});
gsap.to('.ds--1',{
    opacity:1, 
    delay:0.5,
    duration:0.5,
    scrollTrigger: '.ds--1',
     y:-51
});
gsap.to('.ds--2',{
    opacity:1, 
    delay:0.5,
    duration:0.5,
    scrollTrigger: '.ds--2',
     y:-51
});
gsap.to('.ds--3',{
    opacity:1, 
    delay:0.5,
    duration:0.5,
    scrollTrigger: '.ds--3',
     y:-51
});
gsap.to('.ds--4',{
    opacity:1, 
    delay:0.5,
    duration:0.5,
    scrollTrigger: '.ds--4',
     y:-165
});
gsap.to('.ds--5',{
    opacity:1, 
    delay:0.5,
    duration:0.5,
    scrollTrigger: '.ds--5',
     y:-170
});







//------------------- FOOTER
gsap.to('.fa-instagram',{
    opacity:1, 
    delay:0.4,
    duration:0.6,
    scrollTrigger: '.fa-instagram',
    y:50
    
});
gsap.to('.fa-facebook',{
    opacity:1, 
    delay:0.6,
    duration:0.6,
    scrollTrigger: '.fa-facebook',
    y:50
    
});
gsap.to('.fa-twitter',{
    opacity:1, 
    delay:0.8,
    duration:0.6,
    scrollTrigger: '.fa-twitter',
    y:50
    
});
gsap.to('.fa-linkedin',{
    opacity:1, 
    delay:1,
    duration:0.6,
    scrollTrigger: '.fa-linkedin',
    y:50
    
});

gsap.to('.form--2',{
    opacity:1,
    delay: 0.9,
    duration:0.4,
    y:-50
});










//---------------------------- OTHER
gsap.to('.price--container-one',{
    opacity:1,
    delay: 0.9,
    duration:0.4,
    y:-50
});
gsap.to('.price--container-two',{
    opacity:1,
    delay: 1.2,
    duration:0.4,
    y:-50
});
gsap.to('.image--one',{
    opacity:1,
    delay: 0.9,
    duration:0.4,
    y:-50
});
gsap.to('.image--two',{
    opacity:1,
    delay: 0.69,
    scrollTrigger: '.image--two',
    duration:0.4,
    y:-50
});
gsap.to('.wst__header--title-top',{
    duration:0.69,
    delay:0.69,
    y:-100
});
gsap.to('.kadabra-two',{
    opacity:1,
    duration:0.69,
    delay:1,
    y:-90
});
gsap.to('.wtb-up-1',{
    opacity:1,
    duration:0.69,
    delay:0.4,
    y:-60,
    scrollTrigger: '.wtb-up-1'

});
gsap.to('.wtb-up-2',{
    opacity:1,
    duration:0.69,
    delay:0.4,
    y:-60,
    scrollTrigger: '.wtb-up-2'

});

gsap.to('.up-8',{
    opacity:1, 
    delay:0.5,
    duration:0.5,
    scrollTrigger: '.up-8',
    y:-90
     
});
gsap.to('.wsz-list',{
    opacity:1, 
    delay:1,
    duration:0.5,
    scrollTrigger: '.wsz-list',
    y:-30
     
});
gsap.to('.up4',{
    opacity:1, 
    duration:0.5,
    delay:0.8,
    scrollTrigger: '.up4',
    y:-60
     
});



var burger = document.querySelector('.burger');
var dropdown = document.querySelector('.dropdown-nav');

burger.addEventListener('click',()=>{
    burger.classList.toggle('burger-active');
    dropdown.classList.toggle('dropdown-active'); 

})
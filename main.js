// alert()//
window.addEventListener("scroll", () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});

//Toggle faq

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('open')

        const icon  = faq.querySelector('.faq-icon i')
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus" 
        }
    })
})

//show/hide nav button

const menu = document.querySelector(".nav-menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

// menuBtn.addEventListener('click', () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block"
//     menuBtn.style.display = "none"
// })

// const closeNav = () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none"
//     menuBtn.style.display = "inline-block"
// }

// closeBtn.addEventListener('click', closeNav)

// function classToggle() {
//     const navs = document.querySelectorAll('.nav-menu')
    
//     navs.forEach(nav => nav.classList.toggle(''));
//   }
  
//   document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle);
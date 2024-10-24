const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
const scrollHeader=()=>{
    const headeer=document.getElementById('header')
    this.scrollY>=50?Headers.classList.add('bg-header')
                    :Headers.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
const scrollHeader=()=>{
    const headeer=document.getElementById('header')
    this.scrollY>=50?Headers.classList.add('bg-header')
                    :Headers.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

const scrollHeader = () =>{
    const header =document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classlist.remove('bg-header')

    
    }
    
    window.addEventListener('scroll',scrollHeader)
    // linking
    let navlinks=document.querySelectorAll('section');
    let sections=document.querySelectorAll('header ul li a');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    }

    document.querySelectorAll('.review-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('clicked'); // Toggle the 'clicked' class on the card
        });
    });

  const calculateForm = document.getElementById('calculate-form'),
calculateCm = document.getElementById('calculate-cm'),
calculateKg = document.getElementById('calculate-kg'),
calculateMessage = document.getElementById('calculate-message')
const calculateBmi = (e) =>{ 
    e.preventDefault()
    if(calculateCm.value === ''|| calculateKg.value === ''){        
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')        
        calculateMessage.textContent = 'Fill in the Height and Weight'
       setTimeout(() => {
        calculateMessage.textContent =''
        },3000)
    } else {
        const cm= calculateCm.value / 100;
                kg= calculateKg.value;
                bmi = Math.round( kg / ( cm * cm));

        //health status
        if(bmi < 18.5){
            calculateMessage.classList.add('color-green')          
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are skinny '
            } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are healthy'
            } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ${bmi} and you are overweight'
    }
    // To clear the input field
        calculateCm.value = ''
        calculatekg.value = ''
    // Remove message four seconds 
        setTimeout(() => {
        calculateMessage.textContent =''
        },4000)
    }
}
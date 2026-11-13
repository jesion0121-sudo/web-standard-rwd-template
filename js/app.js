const body = document.querySelector('body')
const topBtn = document.querySelector('.top')
const mnavBtn = document.querySelector('.m-nav-open')
const navBtns = document.querySelectorAll('nav ul li a')
const tabs = document.querySelectorAll('#inform ul li');
const panels = document.querySelectorAll('#inform .inform-poster > li');

tabs[0].classList.add('active');
panels[0].classList.add('active');
tabs.forEach(function (tab, i) {
    tab.addEventListener('click', () => {
        tabs.forEach(function (t) {
            t.classList.remove('active');
        });
        panels.forEach(function (p) {
            p.classList.remove('active');
        });
        tab.classList.add('active');
        panels[i].classList.add('active');
    });
})

// body.classList.add('blur')
// body.classList.add('scroll')

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
        body.classList.add('scroll')
    } else {
        body.classList.remove('scroll')
    }
})

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

mnavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m-nav-open')
})

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        const id = btn.getAttribute('href')
        const target = document.querySelector(id)
        const headerH = document.querySelector('header').offsetHeight
        window.scrollTo({
            top: target.offsetTop - headerH,
            behavior: 'smooth'
        })
        body.classList.remove('m-nav-open')
    })
})

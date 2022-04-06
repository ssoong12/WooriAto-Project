/*=============== 반응형. SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW. 메뉴 보이기 =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN. 메뉴 닫기 =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE. 모바일에서 메뉴 toggle ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // 각 nav__link를 클릭하면 show-menu 클래스가 제거됨
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER. header 배경 변경 ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // 스크롤 높이가 80 veiwport 보다 크면 header 태그에 scroll-header class 를 추가한다.
    if(this.scrollY >= 80) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== incinerator. 고민소각장 ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.incinerator__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.incinerator__header')
    // + 버튼 클릭 시 상세 설명문이 나옴
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.incinerator__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK  ===============*/
// 스크롤을 내릴 때마다 해당하는 메뉴 section에 밑줄이 그임
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        // scrollY가 sectionTop보다 크거나, scrollY가 sectionTop+sectionHeight 값보다 작거나 같다면      
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== 탑 버튼 보이기. SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // 스크롤 높이가 400 viewport보다 높을 경우 스크롤 탑 클래스가 있는 태그에 Show-scroll 클래스를 추가한다.
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME. 다크, 라이트 모드 ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// 이전에 선택한 항목(사용자가 선택한 경우)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// 다크 테마 클래스를 승인함으로써 인터페이스가 가지고 있는 현재 테마를 얻음
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//사용자가 이전에 주제를 선택했는지 확인
if (selectedTheme) {
  // 유효성 검사가 수행될 경우 다크모드를 활성화했는지 비활성화했는지 여부를 확인하는 데 어떤 문제가 있었는지를 묻기
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// 버튼을 사용하여 테마를 수동으로 활성화/비활성화
themeButton.addEventListener('click', () => {
    // 어두운/아이콘 테마 추가 또는 제거
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // 사용자가 선택한 테마와 현재 아이콘을 저장
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION. API ===============*/
// 스크롤을 내릴 때마다 유연한 애니메이션 효과
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.thinking__img, .contact__box`,{origin: 'left'})
sr.reveal(`.thinking__data, .contact__form`,{origin: 'right'})
sr.reveal(`.promotion__card, .products__card, .incinerator__group, .footer`,{interval: 100})


const selecteur1 = document.getElementById('selecteur-1');
const selecteur2 = document.getElementById('selecteur-2');
const selecteur3 = document.getElementById('selecteur-3');
const carrouselCard1 = document.getElementById('carrousel-card-1');
const carrouselCard2 = document.getElementById('carrousel-card-2');
const carrouselCard3 = document.getElementById('carrousel-card-3');

selecteur1.onclick = function () {
    console.log('selecteur1 click');
    selecteur1.classList.add('active');
    selecteur2.classList.remove('active');
    selecteur3.classList.remove('active');
    carrouselCard1.classList.remove('unactive');
    carrouselCard2.classList.add('unactive');
    carrouselCard3.classList.add('unactive');
};

selecteur2.onclick = function () {
    selecteur2.classList.add('active');
    selecteur3.classList.remove('active');
    selecteur1.classList.remove('active');
    carrouselCard2.classList.remove('unactive');
    carrouselCard3.classList.add('unactive');
    carrouselCard1.classList.add('unactive');
};

selecteur3.onclick = function () {
    selecteur3.classList.add('active');
    selecteur1.classList.remove('active');
    selecteur2.classList.remove('active');
    carrouselCard3.classList.remove('unactive');
    carrouselCard2.classList.add('unactive');
    carrouselCard1.classList.add('unactive');
};

 carrouselCard1.onclick = function () {
    console.log('selecteur1 click');
    selecteur1.classList.add('active');
    selecteur2.classList.remove('active');
    selecteur3.classList.remove('active');
    carrouselCard1.classList.remove('unactive');
    carrouselCard2.classList.add('unactive');
    carrouselCard3.classList.add('unactive');
};

carrouselCard2.onclick = function () {
    selecteur2.classList.add('active');
    selecteur3.classList.remove('active');
    selecteur1.classList.remove('active');
    carrouselCard2.classList.remove('unactive');
    carrouselCard3.classList.add('unactive');
    carrouselCard1.classList.add('unactive');
};

carrouselCard3.onclick = function () {
    selecteur3.classList.add('active');
    selecteur1.classList.remove('active');
    selecteur2.classList.remove('active');
    carrouselCard3.classList.remove('unactive');
    carrouselCard2.classList.add('unactive');
    carrouselCard1.classList.add('unactive');
};

const hamburger = document.getElementById('hamburger');
const navBarre = document.getElementById('barre-de-navigation');
const barre = document.getElementsByClassName('main-header__hamburger__barre');
const navBarreOptionImportant = document.getElementsByClassName('main-header__navigation__option--important');
const navBarreOption = document.getElementsByClassName('main-header__navigation__option');

hamburger.onclick = function () {
    for (let i = 0; i < barre.length; i++) {
        barre[i].classList.toggle('active');
        barre[i].classList.toggle('b'+i);
    }
    for (let i = 0; i < navBarreOption.length; i++) {
        navBarreOption[i].classList.toggle('active-option');
    }
    navBarreOptionImportant[0].classList.toggle('active-option');
    navBarre.classList.toggle('active-nav-barre');
};
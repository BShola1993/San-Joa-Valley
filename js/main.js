const showmenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show'); //javascript scc to display nav menu
      });
    }
};
showmenu('nav-toggle', 'nav-menu');

//Active ana remove menu mobile
const navlink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navmenu = document.getElementById('nav-menu');
    navmenu.classList.remove('show'); //When i click on each nav__link, remove the show class selector
}
navlink.forEach((n) => n.addEventListener('click', linkAction));

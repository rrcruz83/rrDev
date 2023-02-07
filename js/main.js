const botaomenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.menu_navegacao')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu_navegacao_ativo')  
    console.log(menu)
});

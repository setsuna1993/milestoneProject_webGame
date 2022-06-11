/*Here is the 5*4 = 20 cards total list of pokemon picture*/
document.addEventListener('DOMContentLoaded', () => {
    const cardList = [
        {
            name: 'Pikachu',
            image: '/assets/Pikachu.png'
        },
        {
            name: 'Pikachu',
            image: '/assets/Pikachu.png'
        },
        {
            name: 'Eevee',
            image: '/assets/Eevee.png'
        },
        {
            name: 'Eevee',
            image: '/assets/Eevee.png'
        },
        {
            name: 'Meowth',
            image: '/assets/Meowth.png'
        },
        {
            name: 'Meowth',
            image: 'assets/Meowth.png'
        },
        {
            name: 'Wobbuffet',
            image: '/assets/Wobbuffet.png'
        },
        {
            name: 'Wobbuffet',
            image: '/assets/Wobbuffet.png'
        },
        {
            name: 'Bulbasaur',
            image: '/assets/Bulbasaur.png'
        },
        {
            name: 'Bulbasaur',
            image: '/assets/Bulbasaur.png'
        },
        {
            name: 'Charmander',
            image: '/assets/Charmander.png'
        },
        {
            name: 'Charmander',
            image: '/assets/Charmander.png'
        },
        {
            name: 'Squirtle',
            image: '/assets/Squirtle.png'
        },
        {
            name: 'Squirtle',
            image: '/assets/Squirtle.png'
        },
        {
            name: 'Chikorita',
            image: '/assets/Chikorita.png'
        },
        {
            name: 'Chikorita',
            image: '/assets/Chikorita.png'
        },
        {
            name: 'Totodile',
            image: '/assets/Totodile.png'
        },
        {
            name: 'Totodile',
            image: '/assets/Totodile.png'
        },
        {
            name: 'Cyndaquil',
            image: '/assets/Cyndaquil.png'
        },
        {
            name: 'Cyndaquil',
            image: '/assets/Cyndaquil.png'
        }
    ];
    
    const grid = document.querySelector('.gameGrid');

    function initiateBoard () {
        for (var i=0; i < cardList.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src','images/pokeball-placeholder.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    }
    
    initiateBoard();
})
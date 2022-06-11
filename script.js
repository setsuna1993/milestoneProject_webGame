/*Here is the 4*4 = 16 cards total list of pokemon picture*/
document.addEventListener('DOMContentLoaded', () => {
    const cardList = [
        {
            name: 'Pikachu',
            image: 'assets/pikachu.png'
        },
        {
            name: 'Pikachu',
            image: 'assets/Pikachu.png'
        },
        {
            name: 'Eevee',
            image: 'assets/Eevee.png'
        },
        {
            name: 'Eevee',
            image: 'assets/Eevee.png'
        },
        {
            name: 'Bulbasaur',
            image: 'assets/Bulbasaur.png'
        },
        {
            name: 'Bulbasaur',
            image: 'assets/Bulbasaur.png'
        },
        {
            name: 'Charmander',
            image: 'assets/Charmander.png'
        },
        {
            name: 'Charmander',
            image: 'assets/Charmander.png'
        },
        {
            name: 'Squirtle',
            image: 'assets/Squirtle.png'
        },
        {
            name: 'Squirtle',
            image: 'assets/Squirtle.png'
        },
        {
            name: 'Chikorita',
            image: 'assets/Chikorita.png'
        },
        {
            name: 'Chikorita',
            image: 'assets/Chikorita.png'
        },
        {
            name: 'Totodile',
            image: 'assets/Totodile.png'
        },
        {
            name: 'Totodile',
            image: 'assets/Totodile.png'
        },
        {
            name: 'Cyndaquil',
            image: 'assets/Cyndaquil.png'
        },
        {
            name: 'Cyndaquil',
            image: 'assets/Cyndaquil.png'
        }
    ];
    
    const grid = document.querySelector('.gameGrid');

    function initiateBoard () {
        for (var i=0; i < cardList.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src','images/placeholder.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click',flipCard);
            
        }
    }
    
    initiateBoard();
})
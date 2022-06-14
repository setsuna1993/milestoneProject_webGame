/*Here is the 5*4 = 20 cards total list of pokemon picture*/
document.addEventListener('DOMContentLoaded', () => {
    
    const cardList = [
        {
            name: 'Pikachu',
            image: 'assets/Pikachu.png'
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
            name: 'Meowth',
            image: 'assets/Meowth.png'
        },
        {
            name: 'Meowth',
            image: 'assets/Meowth.png'
        },
        {
            name: 'Wobbuffet',
            image: 'assets/Wobbuffet.png'
        },
        {
            name: 'Wobbuffet',
            image: 'assets/Wobbuffet.png'
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

    cardList.sort( () => 0.5 - Math.random() );
    const grid = document.querySelector('.gameGrid');
    const attemptsHolder = document.querySelector('.attemptsHolder');
    const foundHolder = document.querySelector('.foundHolder');
    const cardsInGame = 10;

    var attempts = 0;
    var foundCards = 0;
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    var chosenCards = [];
    var chosenCardsIds = [];

    function initiateBoard () {
        for (var i=0; i < cardList.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src','assets/pokeballholder.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        if(chosenCards.length !== 2){
        var cardid = this.getAttribute('data-id');
        if(this.getAttribute('src') != 'assets/blank.png') {
            chosenCards.push(cardsList[cardId].name);
            chosenCardIds.push(cardId);
            this.setAttribute('src', cardsList[cardId].image);
            if(chosenCards.length == 2) {
                setTimeout(checkForMatch, 400);
                }
            }
        }
    }
    
function checkForMatch() {
        attempts++;
        var cards = document.querySelectorAll('img');
        var firstCard = chosenCardsIds[0];
        var secondCard = chosenCardsIds[1];
        if(chosenCards[0] == chosenCards[1]){
            foundCards++;
            cards[firstCard].setAttribute('src','assets/blank.png');
            cards[secondCard].setAttribute('src','assets/blank.png');
        }else{
            cards[firstCard].setAttribute('src','assets/pokeballholder.png');
            cards[secondCard].setAttribute('src','assets/pokeballholder.png');
        }
        chosenCards = [];
        chosenCardsIds = [];
        attemptsHolder.textContent = attempts;
        foundHolder.textContent = foundCards;
        if(foundCards == cardsInGame){
            alert('Well done ! ')
        }

}

    initiateBoard();
})
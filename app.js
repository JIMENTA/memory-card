const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "./img/undraw_Appreciate_it_re_yc8h.png", name: "men" },
    { imgSrc: "./img/undraw_Appreciation_ti90.png", name: "love" },
    { imgSrc: "./img/undraw_Beach_day_cser.png", name: "dog" },
    { imgSrc: "./img/undraw_Blooming_re_2kc4.png", name: "flowers" },
    { imgSrc: "./img/undraw_Cat_epte.png", name: "cat" },
    { imgSrc: "./img/undraw_pancakes_238t.png", name: "panckes" },
    { imgSrc: "./img/undraw_Passing_by_0un9.png", name: "passing" },
    { imgSrc: "./img/undraw_Woman_ffrd.png", name: "woman" },
    { imgSrc: "./img/undraw_Appreciate_it_re_yc8h.png", name: "men" },
    { imgSrc: "./img/undraw_Appreciation_ti90.png", name: "love" },
    { imgSrc: "./img/undraw_Beach_day_cser.png", name: "dog" },
    { imgSrc: "./img/undraw_Blooming_re_2kc4.png", name: "flowers" },
    { imgSrc: "./img/undraw_Cat_epte.png", name: "cat" },
    { imgSrc: "./img/undraw_pancakes_238t.png", name: "panckes" },
    { imgSrc: "./img/undraw_Passing_by_0un9.png", name: "passing" },
    { imgSrc: "./img/undraw_Woman_ffrd.png", name: "woman" },
];
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData
}

const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc;
        card.setAttribute("name", item.name)

        section.appendChild(card);
        card.appendChild(face)
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
}

const checkCards = (e) => {
    const clickedCard = e.target;


    clickedCard.classList.add("flipped")

    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll('.toggle')

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none"

            })
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("Try again");
            }
        }
    }

    if (toggleCard.length === 16) {
        restart("You won!");

    }
}


const restart = (text) => {
    let cardData = randomize()
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");

    section.style.pointerEvents = "none"

    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        setTimeout(() => {

            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all"
        }, 1000)
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100)

}

cardGenerator()
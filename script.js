function nextScreen(current,next){
    document.getElementById(current).classList.add("hidden");
    document.getElementById(next).classList.remove("hidden");
}

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const messages = [
    "Are you sure? 🥺",
    "Really sure? 😭",
    "Think carefully 😢",
    "I spent forever making this 😂",
    "My heart can't take much more 💔",
    "Last chance... 🥹"
];

let count = 0;
let yesSize = 18;

function moveNoButton(){

    message.innerText =
        messages[Math.min(count, messages.length-1)];

    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    noBtn.style.left =
        Math.random()*maxX + "px";

    noBtn.style.top =
        Math.random()*maxY + "px";

    yesSize += 6;

    yesBtn.style.fontSize =
        yesSize + "px";

    count++;
}

noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {

    document
    .getElementById("question")
    .classList.add("hidden");

    document
    .getElementById("success")
    .classList.remove("hidden");

    for(let i=0;i<60;i++){

        const heart =
        document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.fontSize =
        (Math.random()*25+15) + "px";

        heart.style.animationDuration =
        (Math.random()*5+4) + "s";

        document.body.appendChild(heart);
    }
});

const messageParts = [
    {
        text: `Dear Rai,

Happy 19th birthday, my love! I hope this letter finds you well and brings a smile to your beautiful face. I know we’ve had our fair share of arguments and quarrels recently, and I want to start by saying how deeply sorry I am for not being able to give you the time and attention you deserve. You mean the world to me, and it breaks my heart to think that I’ve hurt you with my absence.`,
        color: 'blue'
    },
    {
        text: `I’ve been planning something special for your birthday for over a month now, but circumstances have made it challenging to execute everything the way I wanted. Despite these hurdles, I hope you can see the love and effort I’ve put into this letter. It’s a small token of my affection, but it comes straight from my heart.`,
        color: 'green'
    },
    {
        text: `Rai, I love you more than words can express. You are the light in my life, the reason I smile, and the person I want to share all my dreams and hopes with. I cherish every moment we’ve spent together, from our late-night talks to our silly adventures. Your laughter, your kindness, and your unwavering support mean everything to me.`,
        color: 'purple'
    },
    {
        text: `I know I haven’t been the best partner lately, and I regret every moment I wasn’t there for you. My studies and other commitments have taken a toll, but that’s no excuse for neglecting you. I want you to know that you are always on my mind, and I miss you more than you can imagine. I’m committed to making things right and being the partner you deserve.`,
        color: 'red'
    },
    {
        text: `Please forgive me, Rai. I promise to make more time for us, to listen more, and to be there for you whenever you need me. You are my heart and soul, and I can’t imagine my life without you. Let’s leave the past behind and look forward to a future filled with love, joy, and countless beautiful memories.`,
        color: 'orange'
    },
    {
        text: `On this special day, I want to remind you how incredible you are. You are strong, intelligent, compassionate, and so very loved. I hope your 19th birthday is filled with happiness and that you feel as cherished as you truly are.`,
        color: 'pink'
    },
    {
        text: `Happy birthday, my love. Here’s to many more birthdays together, to growing stronger, and to a love that will stand the test of time.

With all my love,
Koustav`,
        color: 'brown'
    }
];

let i = 0;
const speed = 10;
const messageElement = document.getElementById("message");
const playMusicButton = document.getElementById("playMusic");
const birthdaySong = document.getElementById("birthdaySong");

function typeWriter() {
    if (i < messageParts.length) {
        const paragraph = document.createElement('p');
        paragraph.style.color = messageParts[i].color;
        messageElement.appendChild(paragraph);
        typeWriterParagraph(paragraph, messageParts[i].text, 0);
    } else {
        playMusicButton.style.display = "block";
    }
}

function typeWriterParagraph(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typeWriterParagraph(element, text, index + 1), speed);
    } else {
        i++;
        typeWriter();
    }
}

playMusicButton.addEventListener("click", () => {
    birthdaySong.play();
    setTimeout(() => {
        const horrorMessage = document.createElement('p');
        horrorMessage.style.color = 'black';
        horrorMessage.innerHTML = "And since you love horror, I thought why not have a horror bday song too, baby?";
        messageElement.appendChild(horrorMessage);
    }, 86000); // 1 minute 26 seconds = 86000 milliseconds
});

typeWriter();
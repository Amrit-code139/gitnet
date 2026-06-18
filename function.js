const btn = document.getElementById("loveBtn");
const message = document.getElementById("message");

const cuteMessages = [
  "💖 You are amazing!",
  "✨ Have a beautiful day!",
  "🌸 Stay happy always!",
  "💕 Cute vibes only!",
  "💌 Sending lovely wishes!"
];

btn.addEventListener("click", () =>{
  const randomText =
    cuteMessages[Math.floor(Math.random() * cuteMessages.length)];

  message.innerText = randomText;

  // small animation
  message.style.transform = "scale(1.3)";

  setTimeout(() => {
    message.style.transform = "scale(1)";
  }, 300);
});
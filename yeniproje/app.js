const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "rose",
  "green",
  "white",
  "yellow",
  "#7b55cf",
  "c7b55cf",
];

button.addEventListener("click", changeBackground);

function changeBackground() {
    //rastgele bir renk
    const rastgeleSayi = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgeleSayi];
    console.log(rastgeleSayi, secilenRenk);
    body.style.backgroundColor = secilenRenk;
}


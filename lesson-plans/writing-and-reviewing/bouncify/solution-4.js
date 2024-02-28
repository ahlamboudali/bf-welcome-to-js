let text;

if (!text) {
  let input = prompt("Enter some text, it will return's bonus word");
  !input ? alert('Enter something') : (text = input);
}

let bonusText = '';
let upper = true;

for (const char of text) {
  const regex = /[a-zA-Z]/g;

  if (char.match(regex)) {
    upper
      ? (bonusText += char.toUpperCase())
      : (bonusText += char.toLowerCase());
    upper = !upper;
  } else {
    bonusText += char;
  }
}

alert(bonusText);

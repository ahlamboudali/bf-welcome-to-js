let text = '';

while (!text) {
  let input = prompt("Enter some text, it will return's bonus word");
  if (input === '') alert('Enter some text');
  if (input === null) alert('Not allowed');
  text = input;
}

let bonusText = '';

const spacialChat = '0123456789/\\.+*?[]$(){}=!<>|:- ';
let upper = true;

for (const char of text) {
  if (!spacialChat.includes(char)) {
    upper
      ? (bonusText += char.toUpperCase())
      : (bonusText += char.toLowerCase());
    upper = !upper;
  } else {
    bonusText += char;
  }
}

alert(bonusText);

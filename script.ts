const input1 = document.getElementById("inputHuman") as HTMLTextAreaElement;
const input2 = document.getElementById("inputAlien") as HTMLTextAreaElement;
const button = document.querySelector(".round") as HTMLButtonElement;

let human = true;

const slogi: Record<string, string> = {
    "0": "zi",
    "1": "ba",
    "2": "la",
    "3": "mi",
    "4": "do",
    "5": "ne",
    "6": "bla",
    "7": "zib",
    "8": "ga",
    "9": "zo",
    "A": "ra",
    "B": "ke",
    "C": "tu",
    "D": "mo",
    "E": "sha",
    "F": "ve"
};

function switchL() {
    human = !human;

    if (human) {
        input1.style.backgroundColor = "#F3F3F3";
        input1.placeholder = "Type words...";
        
        input2.style.backgroundColor = "#7bff71";
        input2.placeholder = "*dobamibane doga*";
    } else {
        input1.style.backgroundColor = "#7bff71";
        input1.placeholder = "dozi ziblami...";
        
        input2.style.backgroundColor = "#F3F3F3";
        input2.placeholder = "*translated text*";
    }
}

function translateToAlien(text: string): string {
    let txt = "";
    let i = 0;

    for (const char of text) {
        if (char === " " || char === "\n") {
            txt += char;
            continue;
        } else {
            i++;
        }
        
        if (i == 2) {
            i = 0
            continue;
        }

        const code = char.codePointAt(0)!.toString(16);
        const letter = code[code.length - 1];
        txt += slogi[letter.toUpperCase()];
    }

    return txt;
}

input1.addEventListener("input", () => {
    if (human) {
        input2.value = translateToAlien(input1.value);
    }
});

button.addEventListener("click", () => {
    switchL();
});
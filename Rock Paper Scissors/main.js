let korisnikRezultat = 0;
let kompjuterRezultat = 0;
const korisnikRezultat_span = document.getElementById("rezultat-korisnik");
const kompjuterRezultat_span = document.getElementById("rezultat-kompjuter");
const tabela_div = document.querySelector(".tabela");
let rezultat_div = document.querySelector(".rezultat > p");
const kamen_div = document.getElementById("kamen");
const papir_div = document.getElementById("papir");
const makaze_div = document.getElementById("makaze");



function uzmiIzborKompa() {
const izbori =["k", "p", "m" ];
const slucajanIzbor = (Math.floor(Math.random()*3));
return izbori[slucajanIzbor];
}

function pretvoriURec(rec) {
    if (rec === "k") return "Rock";
    if (rec ===  "p") return "Paper";
    return "Scissors";
}

function pobeda(izborKorisnika, izborKompjutera) {
    korisnikRezultat++;
    korisnikRezultat_span.innerHTML = korisnikRezultat;
    const malaRecKorisnik = "korisnik".fontsize(3).sub();
    const malaRecKomp = "komp".fontsize(3).sub();
    rezultat_div.innerHTML = `${pretvoriURec(izborKorisnika)} ${malaRecKorisnik} beats ${pretvoriURec(izborKompjutera)}${malaRecKomp} You win.`;
}


function poraz(izborKorisnika, izborKompjutera) {
    kompjuterRezultat++
    kompjuterRezultat_span.innerHTML = kompjuterRezultat;
    const malaRecKorisnik = "you".fontsize(3).sub();
    const malaRecKomp = "computer".fontsize(3).sub();
    rezultat_div.innerHTML = `${pretvoriURec(izborKorisnika)}${malaRecKorisnik} equals ${pretvoriURec(izborKompjutera)}${malaRecKomp} You lose!`;
}

function nereseno(izborKorisnika, izborKompjutera) {
    const malaRecKorisnik = "you".fontsize(3).sub();
    const malaRecKomp = "computer".fontsize(3).sub();
    rezultat_div.innerHTML = `${pretvoriURec(izborKorisnika)}${malaRecKorisnik} equals ${pretvoriURec(izborKompjutera)}${malaRecKomp} It's a draw!`;
}
function game(izborKorisnika) {
    const izborKompjutera = uzmiIzborKompa();
    switch (izborKorisnika + izborKompjutera) {
        case "km":
        case "pk":
        case "mp":
            pobeda(izborKorisnika, izborKompjutera);
            break;
        case "kp":
        case "pm":
        case "mk":
            poraz(izborKorisnika, izborKompjutera);
            break;
        case "kk":
        case "pp":
        case "mm":
            nereseno(izborKorisnika, izborKompjutera);
            break;
    }
}

function main() {
    kamen_div.addEventListener("click", function() {
        game("k");
    })

    papir_div.addEventListener("click", function() {
        game("p");
    })
    makaze_div.addEventListener("click", function() {
        game("m");
    })



}
function reset(){
 korisnikRezultat = 0;
 kompjuterRezultat = 0;
 korisnikRezultat_span.innerHTML = korisnikRezultat;
 kompjuterRezultat_span.innerHTML = kompjuterRezultat;
 rezultat_div.innerHTML = "";
}
main();

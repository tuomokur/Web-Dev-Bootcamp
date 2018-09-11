/*
var nimi = prompt("Kerro nimesi!");
alert("Hauska tavata, " + nimi + "!");
console.log("Samoin myös täällä konsolissa, " + nimi)
*/

/*
//Kyselijä harkka 
var etuNimi = prompt("Kerro etunimesi!");
var sukuNimi = prompt("Kerro sukunimesi!");
var ikä = prompt("Kuinka vanha olet?");

console.log("Sinun nimesi on " + etuNimi +" " + sukuNimi);
console.log("Olet " + ikä + " vuotta vanha");
*/

/*
// if else if else
var ikä = prompt("Kuinka vanha olet?");

if (ikä < 0){
    alert("Ei mahdollista!");
}else if(ikä == 18){
    alert("Olet täysi-ikäinen!");
}else if(ikä % 2 != 0){
    alert("Onpa outo ikä!");
}
*/

/*
//Arvailupeli
var salaNum = 4;

var arvaus = prompt("Arvaa numero");

if(Number(arvaus) == salaNum){
    alert("Oikein!");
}else if(Number(arvaus) < salaNum){
    alert("Luku on suurempi");
}else if(Number(arvaus) > salaNum){
    alert("Luku on pienempi");
}
*/

/*
//While-harjoituksia

// tulosta kaikki numero välillä -10 ja 19
console.log("tulosta kaikki numero välillä -10 ja 19");
var num = -10;

while(num <= 19){
    console.log(num);
    num++;
}


// tulosta kaikki parilliset numerot väliltä 10 ja 40
console.log("tulosta kaikki parilliset numerot väliltä 10 ja 40");

var num = 10;

while(num <= 40){
    if(num % 2 == 0){
        console.log(num);
    }
    num++;
}

//tulosta kaikki ei-kokonaisluvut väliltä 300 ja 333
console.log("tulosta kaikki ei-kokonaisluvut väliltä 300 ja 333");

var num = 300;

while(num <=333){
    if(num % 2 != 0){
        console.log(num);
    }
    num++;
}

//tulosta kaikki 3 ja 5 jaolliset luvut väliltä 5 ja 50
console.log("tulosta kaikki 3 ja 5 jaolliset luvut väliltä 5 ja 50");

var num = 5;

while(num <= 50){
    if(num % 3 == 0 && num % 5 == 0){
        console.log(num);
    }
    num++;
}

// while-luupin hyödyntämistä
var vastaus = prompt("Joko ollaan perillä?");

while(vastaus != "joo"){
    var vastaus = prompt("Joko ollaan perillä?");
}
alert("JES!");

// ver 2 
var vastaus = prompt("Joko ollaan perillä?");

while(vastaus.indexOf("joo") == -1){
    var vastaus = prompt("Joko ollaan perillä?");
}
alert("JES!");




// For-luupit

// tulosta kaikki numero välillä -10 ja 19
console.log("tulosta kaikki numero välillä -10 ja 19");

for(i=-10; i<=19; i++){
    console.log(i);
}

// tulosta kaikki parilliset numerot väliltä 10 ja 40
console.log("tulosta kaikki parilliset numerot väliltä 10 ja 40");

for(i=10; i<=40; i+=2){
    console.log(i);
}

//tulosta kaikki ei-kokonaisluvut väliltä 300 ja 333
console.log("tulosta kaikki ei-kokonaisluvut väliltä 300 ja 333");

for(i=300; i<=333; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

//tulosta kaikki 3 ja 5 jaolliset luvut väliltä 5 ja 50
console.log("tulosta kaikki 3 ja 5 jaolliset luvut väliltä 5 ja 50");

for(i=5; i<=50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}


// Funktiot

function onkoParillinen(numero){
    if(numero % 2 === 0){
        console.log("Kyllä on");
    }else{
        console.log("Ei ole");
    }
}

onkoParillinen(3)


function kertoma(numero){
    var tulos = 1;

    for(var i = 1; i <= numero; i++){
        tulos = tulos * i;
    }
    return tulos;
}


function kebabKäärmeeksi(sana){
    var uusiSana = sana.replace(/-/g , "_");
    return uusiSana;
}




// Taulukot

var tehtävät = ["Korjaa pöytä"];

var valinta = prompt("Mitä haluat tehdä?");

while(valinta !== "lopeta"){
    if(valinta === "taulukko"){
        console.log(tehtävät);
    }else if(valinta === "uusi"){
        var uusiTehtävä = prompt("Lisää uusi tehtävä");
        tehtävät.push(uusiTehtävä);
    }
    var valinta = prompt("Mitä haluat tehdä?");
}

console.log("Hyvästi!");



// Taulukon iterointi

var värit = ["punainen", "sininen", "keltainen", "vihreä"];

for(var i=0; i<värit.length; i++){
    console.log(värit[i]);
}



var värit = ["punainen", "sininen", "keltainen", "vihreä"];

värit.forEach(function(väri){
    console.log(väri);
});



// 4 harkkaa

//taulukon kääntäminen
var numerot = [1,2,3,4];
numerot.reverse();

var kirjaimet = ["a", "b","c","d"];
kirjaimet.reverse();


//taulukon summa
var taulukko = [5,10,5,10,4];
var summa = 0;

taulukko.forEach(function(num){
    summa = summa + num;
});

console.log("Summa on " + summa);


var taulukko = [5,10,10,12,12];
var max = 0;

taulukko.forEach(function(num){
    if(num >= max){
        max = num;
    }
});

console.log(max);



// Oliot

var elokuva = [
    {  
        nimi: "Uuno armeijassa",
        arvio: "5 tähteä",
        onKatsottu: true,

    },
    {
        nimi: "Rampe ja Naukkis",
        arvio: "5 tähteä",
        onKatsottu: false,
    },
]

elokuva.forEach(function(elokuvat){
    var tulos = "Sinä ";
    if(elokuvat.onKatsottu){
        tulos += "olet katsonut elokuvan ";
    }else{
        tulos += "et ole katsonut elokuvaa ";
    }
    tulos += elokuvat.nimi + " ";
    tulos += elokuvat.arvio;
    console.log(tulos)
});

*/

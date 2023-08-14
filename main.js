// get references to elements on the page
let imageContainer = document.querySelector("img");
let caption = document.querySelector("p");
let btcButton = document.getElementById("btc"); 
let dollars = document.getElementById("value");
let goldButton = document.getElementById("gold");
let dollars2 = document.getElementById("money");
let caption2 = document.getElementById("p2");

function convertBtc() {
    let requestURL = "https://api.exchangerate.host/latest";
    console.log("Request URL: ", requestURL);
    
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        btc = myJson.rates.BTC;
        console.log(btc, dollars);
        answer = btc * parseInt(dollars.value);
        caption.innerHTML = `${dollars.value} US dollar is equal to BTC: ${answer}`;
        dollars.value = "";
    });
}

function convertGold() {
    let requestUrl = "http://api.nbp.pl/api/cenyzlota/last/30/?format=json"
    console.log("Request URL: ", requestUrl);

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        cenas = myJson[1].cena 
        dollars3 = Math.round(cenas / 4); 
        //console.log(dollars3);
        console.log(dollars2.value)
        answer = parseInt(dollars2.value) / dollars3;
        caption2.innerHTML = `${dollars2.value} US dollar is equal to grams of gold: ${answer}`;
        dollars2.value = "";
        console.log(answer);

    });

    
    
    
}

btcButton.onclick = convertBtc;
goldButton.onclick = convertGold;
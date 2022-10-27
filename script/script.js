var platinum = document.querySelector(".platinum");
var gold = document.querySelector(".gold");
var svip = document.querySelector(".svip");
var silver = document.querySelector(".silver");
var platinumSeats = document.querySelector(".platinum-seats");
var goldSeats = document.querySelector(".gold-seats");
var silverSeatsVip = document.querySelector(".silver-seats-vip");
var silverSeats = document.querySelector(".silver-seats");
var result = document.querySelector(".result");
var add = document.querySelector(".add");
var remove = document.querySelector(".remove");

function platinumFunction() {
    var seat = document.querySelector("#select-seat").value;
    var seatText = "You have selected" + "<br><br>"+seat+" "+"Tickets";
    if (seat.toLowerCase() == "platinum") {
        platinumSeats.style.backgroundColor = "#E5E4E2";
        platinumSeats.innerHTML = seatText;
        // goldSeats.innerHTML = "This is reserved for Gold";
        // silverSeatsVip.innerHTML = "This is reserved for Silver VIP";
        // silverSeats.innerHTML = "This is reserved for Silver";
        goldSeats.style.backgroundColor = "transparent";
        silverSeatsVip.style.backgroundColor = "transparent";
        silverSeats.style.backgroundColor = "transparent";
        platinumSeats.style.color="black";
        goldSeats.style.color="transparent";
        silverSeatsVip.style.color="transparent";
        silverSeats.style.color="transparent";
        platinumSeats.style.width = "1000px";
        platinumSeats.style.height = "80px";
        goldSeats.style.width="600px";
        silverSeatsVip.style.width="800px";
        silver.style.width="1000px";
        goldSeats.style.height = "50px";
        silverSeatsVip.style.height = "50px";
        silverSeats.style.height = "50px";
    }
    else if (seat.toLowerCase() == "gold") {
        goldSeats.style.backgroundColor = "#FFD700";
        goldSeats.innerHTML = seatText;
        // platinumSeats.innerHTML = "This is reserved for Platinum";
        // silverSeatsVip.innerHTML = "This is reserved for Silver VIP";
        // silverSeats.innerHTML = "This is reserved for Silver";
        // goldSeats.style.transform="translateY(-50px)"
        // goldSeats.style.boxShadow = "5px -5px 5px 5px black";
        platinumSeats.style.backgroundColor = "transparent";
        silverSeatsVip.style.backgroundColor = "transparent";
        silverSeats.style.backgroundColor = "transparent";
        goldSeats.style.color="black";
        platinumSeats.style.color="transparent";
        silverSeatsVip.style.color="transparent";
        silverSeats.style.color="transparent";
        goldSeats.style.width = "1000px";
        goldSeats.style.height = "80px";
        platinumSeats.style.width="400px";
        silverSeatsVip.style.width="800px";
        silver.style.width="1000px";
        platinumSeats.style.height = "50px";
        silverSeatsVip.style.height = "50px";
        silverSeats.style.height = "50px";


    }
    else if (seat.toLowerCase() == "silver vip") {
        silverSeatsVip.style.backgroundColor = "#C0C0C0";
        silverSeatsVip.innerHTML = seatText;
        // platinumSeats.innerHTML = "This is reserved for Platinum";
        // goldSeats.innerHTML = "This is reserved for Gold";
        // silverSeats.innerHTML = "This is reserved for Silver";
        goldSeats.style.backgroundColor = "transparent";
        platinumSeats.style.backgroundColor = "transparent";
        silverSeats.style.backgroundColor = "transparent";
        silverSeatsVip.style.color="black";
        goldSeats.style.color="transparent";
        platinumSeats.style.color="transparent";
        silverSeats.style.color="transparent";
        silverSeatsVip.style.width = "1000px";
        silverSeatsVip.style.height = "80px";
        platinumSeats.style.width="400px";
        goldSeats.style.width="600px";
        silver.style.width="1000px";
        goldSeats.style.height = "50px";
        platinumSeats.style.height = "50px";
        silverSeats.style.height = "50px";
    }
    else if (seat.toLowerCase() == "silver") {
        silverSeats.style.backgroundColor = "#DCDCDC";
        silverSeats.innerHTML = seatText;
        // platinumSeats.innerHTML = "This is reserved for Platinum";
        // silverSeatsVip.innerHTML = "This is reserved for Silver VIP";
        // goldSeats.innerHTML = "This is reserved for Gold";
        goldSeats.style.backgroundColor = "transparent";
        silverSeatsVip.style.backgroundColor = "transparent";
        platinumSeats.style.backgroundColor = "transparent";
        silverSeats.style.color="black";
        goldSeats.style.color="transparent";
        silverSeatsVip.style.color="transparent";
        platinumSeats.style.color="transparent";
        silverSeats.style.width = "1000px";
        silverSeats.style.height = "80px";
        platinumSeats.style.width="400px";
        goldSeats.style.width="600px";
        silverSeatsVip.style.width="800px";
        goldSeats.style.height = "50px";
        silverSeatsVip.style.height = "50px";
        platinumSeats.style.height = "50px";
    }
    else {
        silverSeats.style.backgroundColor = "transparent";
        platinumSeats.style.backgroundColor = "transparent";
        goldSeats.style.backgroundColor = "transparent";
        silverSeatsVip.style.backgroundColor = "transparent";
        platinumSeats.style.color="transparent";
        goldSeats.style.color="transparent";
        silverSeatsVip.style.color="transparent";
        silverSeats.style.color="transparent";
        // platinumSeats.innerHTML = "This is reserved for Platinum";
        // silverSeatsVip.innerHTML = "This is reserved for Silver VIP";
        // goldSeats.innerHTML = "This is reserved for Gold";
        // silverSeats.innerHTML = "This is reserved for Silver";
        silverSeats.style.height = "50px";
        goldSeats.style.height = "50px";
        silverSeatsVip.style.height = "50px";
        platinumSeats.style.height = "50px";
        platinumSeats.style.width = "400px";
        goldSeats.style.width = "600px";
        silverSeatsVip.style.width = "800px";
        silverSeats.style.width = "1000px";

    }

}

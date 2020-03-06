$(document).ready(function(){

	$(".wrapper").css({"background-color":"navyblue"});
	$(".font-color-red").html("A party is where people who like each other gather together to enjoy each others company while generally eating and drinking (sometimes drinking alcohol). That’s a universal human behavior.");
	$(".font-color-red").css({"color":"blue", "font-size":"30px"});
	$(".strong").css({"font-size":"60px", "line-height":"40px"});
	$(".strong").html("$$$$");
	$("h1").html("price does not matter, because it's a party!");
	$("picture").hide();
	$("h1").on("mouseenter", function(){
		$("h1").css({"color":"white"});
		$(".strong").css({"transform":"rotate(15deg)"});
	});

	var yellow = document.createElement("div");
	var node = document.createTextNode("party in the USA!");
	yellow.appendChild(node);

	$("h1").click(function(){
		$("picture").append(yellow);
	});

	$(document).on("scroll", function(){
		$("h1").css({"position":"fixed", "font-size":"100px", "text-align":"center"});
	});

});

//important tags for party city main page
// <img>
//<picture>
//<div class="slick-track">
//<svg class="icon icon-pc-logo">
//<section class="o_promo-bar overlay-dark font-color-light text-align-left height-slim">
//lists are used for 


// First slider button
var first_slider = document.querySelector(".content .first_slider");
var bg_img = ["(img/bg1.jpg)","(img/bg2.jpg)","(img/bg3.jpg)"];
var prev1 = document.getElementById("prev1");
var next1 = document.getElementById("next1");
var white_content = document.querySelectorAll(".white_content");

var click1 = 0;

first_slider.style.backgroundImage = "url" + bg_img[click1];

next1.addEventListener("click", function(event){
	click1++;
	if(click1 >= bg_img.length){
		click1 = 0;
	}
	first_slider.style.backgroundImage = "url" + bg_img[click1];

	for(var i=0; i<img_li.length;i++){
		img_li[i].classList.remove("active");
	}
	img_li[click1].classList.add("active");

	for(var i=0;i<white_content.length;i++){
		white_content[i].classList.add("visible");
	}
	white_content[click1].classList.remove("visible");
	
});

prev1.addEventListener("click", function(event){
	click1--;
	if(click1 < 0){
		click1 = bg_img.length - 1;
	}
	first_slider.style.backgroundImage = "url" + bg_img[click1];

	for(var i=0;i<white_content.length;i++){
		white_content[i].classList.add("visible");
	}
	white_content[click1].classList.remove("visible");

	for(var i=0; i<img_li.length;i++){
		img_li[i].classList.remove("active");
	}
	img_li[click1].classList.add("active");
	// document.querySelector(".read").style.animation = "read .6s ease-in-out";
});


// First slider image
var img_li = document.querySelectorAll(".slider_album li");
var count = 0;

for(var i=0;i<img_li.length;i++){
	img_li[i].addEventListener("click",function(event){
		var value = this.getAttribute("data-value");
		first_slider.style.backgroundImage = "url" + bg_img[value];
		first_slider.style.transition = "opacity .5s ease-in-out";

		for(var i=0; i<img_li.length;i++){
			img_li[i].classList.remove("active");
		}
		img_li[value].classList.add("active");

		for(var i=0;i<white_content.length;i++){
			white_content[i].classList.add("visible");
		}

		white_content[value].classList.remove("visible");
		// document.querySelector(".read").style.animation = "read .6s ease-in-out";
	});
}

//BUY THeme
var buy = document.querySelector(".multi_purpose .more_template .buy_theme");
var p_in_buy = buy.querySelector("p");

buy.addEventListener("mouseover",function(){
	p_in_buy.innerHTML = "YES I WANT IT";
	p_in_buy.style.animation = "yes .3s "

});

buy.addEventListener("mouseout",function(){
	p_in_buy.innerHTML = "BUY THIS THEME";
	p_in_buy.style.animation = "buy_theme .3s "
});


// Second Slider
var prev2 = document.getElementById("prev2");
var next2 = document.getElementById("next2");
var member_img = document.querySelectorAll(".team_member .member_img");
var team_slider = document.querySelector(".outer_team .team_slider");

click2 = 0;

console.log(member_img);
team_slider.style.transform = "translateX(0px);"

next2.addEventListener("click",function() {
	console.log("next");
	click2++;
	team_slider.style.transition = "all .4s ease-in-out";
	if(click2 >= member_img.length - 2){
		click2 = 0;
		team_slider.style.transform = "translateX(390px)"
	}
	team_slider.style.transform += "translateX(-390px)"
	console.log("click "+ click2);
}); 

prev2.addEventListener("click",function(){
	console.log("previous");
	var len = (-390) * (member_img.length - 2);  
	click2--;
	team_slider.style.transition = "all .4s ease-in-out";
	if(click2 < 0){
		click2 = member_img.length - 3;
		team_slider.style.transform = "translateX(" + len + "px)";
	}
	team_slider.style.transform += "translateX(390px)"
	console.log("click "+ click2);
});

var team_member = document.querySelectorAll(".team_member");
var member_info = document.querySelectorAll(".member_info");
var name_position = document.querySelectorAll(".name_position");
var media_info = document.querySelectorAll(".media_info");
// console.log();

for(var i = 0 ;i< member_info.length;i++){
	member_info[i].addEventListener("mouseover", teamMemberFadeIn);
	member_info[i].addEventListener("mouseout", teamMemberFadeOut);
}

function teamMemberFadeIn(event){
	for(var i=0;i<team_member.length;i++){
		this.style.opacity = 1;
		this.style.transition = "all .5s linear";
		name_position[i].style.animation = "name_position_fadeIn .4s ease-in-out";
		media_info[i].style.animation = "media_info_fadeIn .4s ease-in-out";
	}
}

function teamMemberFadeOut(event){
	for(var i=0;i<team_member.length;i++){
		this.style.opacity = 0;
		this.style.transition = "opacity .5s ease-in-out";
		name_position[i].style.animation = "name_position_fadeOut .4s ease-in-out";
		media_info[i].style.animation = "media_info_fadeOut .4s ease-in-out";
	}
}
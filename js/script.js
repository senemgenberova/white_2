// //preload

var preloader = document.getElementsByClassName('preLoad')[0];
var main = document.getElementsByClassName('main')[0];
function preLoad(){
    main.style.display = 'none';
    preloader.style.display = 'block';
    changeOver(0);
}
setTimeout(function() {
    main.style.display = 'block';
    preloader.style.display = 'none';
}, 1000);


















//searchbox
document.getElementById('searchbutton').style.transition = 'all 1.5s';
var searchvar = document.getElementById('searchbutton');
function search(){
    searchvar.style.width = '16.6666%';
    document.getElementById('input').style.width = '105px';
    document.getElementById('input').value = '';
}
function searchback() {
    searchvar.style.width = '11%';
    document.getElementById('input').style.width = '50px';
    document.getElementById('input').value = 'Search';
}

//slider
    document.getElementById('girls').style.position = 'relative';
    document.getElementsByClassName("girls_slide")[0].style.transition = "all 1.2s"; 
    var photo = document.getElementsByClassName("girl");
    var pos = 0;
    for (var i = 0; i < 7; i++) {
        var b = photo[i].style;
        b.left = pos + 'px';
        pos += 379;
    }


    // Lale
    var margin = 0;
    var prev = 0;
    var slide_div_length = document.getElementsByClassName("girl")[0].clientWidth; 
    var slider_length = document.querySelectorAll(".girls_slide .girl").length;
    function ireli() {
        prev++;
        margin -= slide_div_length; 
        var slides_div_margin = document.getElementsByClassName("girls_slide")[0].style.marginLeft = margin + 'px';
        if (prev >= slider_length - 3) {
            margin = 0;
            slides_div_margin = document.getElementsByClassName("girls_slide")[0].style.marginLeft = margin + 'px';
            prev = 0;
        }
    }
    function geri() {
        prev--;
        margin += slide_div_length;
        var slides_div_margin = document.getElementsByClassName("girls_slide")[0].style.marginLeft = margin + 'px'; 
        if (prev <= 0) {
            margin = -(slide_div_length) * 3;
            prev = 4;
            var slides_div_margin = document.getElementsByClassName("girls_slide")[0].style.marginLeft = margin + 'px'; 
        }
    }



    //overlay
    var a = document.getElementsByClassName('overlay');
    var b = document.getElementsByClassName('girl');
    function showOver(n){
       console.log(b);
       a[n].style.opacity = '0.8';
       b[n].style.margin = '20px';
       b[n].style.height = '255px';
       b[n].style.width = '354px';
    }
    function unshowOver(n){
       a[n].style.opacity = '0';
       b[n].style.height = '285px';
       b[n].style.width = '394px';
       b[n].style.margin = '0px';
    }

    //quotes 
    var dots = document.getElementsByClassName('dot');
    var words = document.getElementsByClassName("quote");
    var left = 0;
    for (var f = 0; f < 3; f++) {
        var k = words[f].style;
        k.left = left + 'px';
        left += 1154;
    }
    dots[0].style.background = 'black';
    dots[0].style.height = '15px';
    dots[0].style.width = '15px';
    dots[0].style.marginTop = '-1px';

    document.getElementsByClassName('quotes')[0].style.transition = 'all 2s';
    function changeQuote(n){
        for(var i=0; i<3; i++){
            if(i==n){
        dots[i].style.background = 'black';
        dots[i].style.height = '15px';
        dots[i].style.width = '15px';
        dots[i].style.marginTop = '-1px';
            }
            else{
        dots[i].style.background = 'transparent';
        dots[i].style.height = '12px';
        dots[i].style.width = '12px';
        dots[i].style.marginTop = '0px';
            }
        }
        if(n==0){
        document.getElementsByClassName('quotes')[0].style.marginLeft = 0 + 'px';
        }
        else if(n==1){
        document.getElementsByClassName('quotes')[0].style.marginLeft = -(document.getElementsByClassName('quote')[0].clientWidth) + 'px';        
        }
        else if(n==2){
        document.getElementsByClassName('quotes')[0].style.marginLeft = -2*(document.getElementsByClassName('quote')[0].clientWidth) + 'px';        
        }
    }











    //clean code 
    document.getElementsByClassName('content')[0].style.transition = 'all 2s';
    var titleclean = document.querySelectorAll('.clean .text .title #first');
    var titlecode = document.querySelectorAll('.clean .text .title #second');
    var pharagraph = document.getElementById('pharagraph');
    var first = ['Clean ','Technical  ','Responsive','Documentation','Quality','Support'];
    var second = ['   Code',' Support',' ',' ',' ',' '];
    var pharagraphs = ['We tried to makefdsaf very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.', 
    'We fdsadsfdf dfsadssf tried to makwe verydsf adsf dsfad  hisfg hdfs af-ad dquality product and sdsadsfssddddddddddddddddddddddddddds     sfadfds  gag fdg  ddfaswefa   gaadgdging.',
    'We tried to makdfsdfdadss dfsdfsdfe very hisafsdfsdfdsfdsf dsf fag eerqer re fadf seetq  ag ghgdfa hgsrewve ddaasnd modify the tfemplate  to  y our likidsfdf dsdfdfsdffdsds  ng.', 
    'We tried to make very high-quality product and so our code is vesfdsdf fsdfafw f fafds fsdfdsd dsdfd fgasdafffsdffds fddsf ffsafsfdddffdsdfadfsdf ds f  ssdf  d affsssddsff dsffd.', 
    'fdsfdssa fsad ssdsadadqd adss ads dfgsfg gdffsfasaean. Whatever anyone could improve and modifyaddsfdsf the template tdsfo yodsursdfdfs lifskindsddf dfsd f ssffdsfdsf fdfdsfsdsdfg.', 
    'We tried to make very high-quality product and so our code is very neat and clean. Whatever anyofdsdas das ssdeqee qq das dafdzxc ffg fw fastq aa dsfa df dsfdsf  dsf fasd fdxf .' ]
    var covers = document.getElementsByClassName('cover');
    var imageboxes = document.getElementsByClassName('imagebox');
    var downwords = document.querySelectorAll('.clean .content .symbols .symbol p');


function openList(){
    document.getElementById('list').style.display = 'block';
}
function closeList(){
    document.getElementById('list').style.display = 'none';
}

    function changeOver(n){
// text
        var opac = 0;
        var pos = 0;
        document.getElementsByClassName('text')[0].style.top = 0+'px';
        document.getElementsByClassName('text')[0].style.opacity = 0;
        var intv = setInterval(function(){ showText() }, 15);        
        function showText(){
        if(pos<50){
        pos +=1;
        }
        else {
        pos=50;
        }
        if(opac<1){
        opac += 0.02;
        }
        else{
        opac=1;
        return;
        }
        document.querySelectorAll('.content .text')[0].style.top = pos+'px';
        document.querySelectorAll('.content .text')[0].style.opacity = opac;
        }
// text
        for(var q=0; q<covers.length; q++){
        covers[q].classList.remove('activeSymbol');
        covers[q].style.display = 'block';
        downwords[q].style.display = 'none';        
        imageboxes[q].style.backgroundPositionY = '120px';
    }
        imageboxes[n].style.backgroundPositionY = '0px';
        downwords[n].style.display = 'block';
        covers[n].classList.add('activeSymbol');   
        titleclean[0].innerText = first[n];
        titlecode[0].innerText = second[n];
        pharagraph.innerText = pharagraphs[n];
        titleclean[0].style.color = 'white';
        titlecode[0].style.color = 'white';
        titleclean[0].style.fontWeight = '900';
        titlecode[0].style.fontWeight = '100';
    }








    
    // function hoverImg(n){
    //     for(var q=0; q<covers.length; q++){
    //     if (covers[q].className == 'activeSymbol'){
    //     covers[q].style.marginTop = '-35px';
    //     imageboxes[q].style.backgroundPositionY = '0px';
    //     }
    //     else {
    //     covers[q].style.marginTop = '0px';
    //     imageboxes[q].style.backgroundPositionY = '120px';                
    //     }        
    // }
    
    //     if (covers[n].style.className == 'activeSymbol'){
    //     imageboxes[n].style.backgroundPositionY = '120px';
    //     covers[n].style.marginTop = '-35px';            
    //     }
    //     else {
    //     imageboxes[n].style.backgroundPositionY = '60px';
    //     covers[n].style.marginTop = '-15px';            
    //     }

    // }







//menu
    var bool;
    var menu = document.getElementsByClassName('openMenu')[0];

    function openMenu(){
    if (menu.style.display = "none"){
    bool = 1;
    }
    else if (menu.style.display = "block"){
    bool = 0;
    }    

    if (bool = 1){
        menu.style.display = "block";
    }
    else if(bool = 0){
        menu.style.display = "none";
    }    
}


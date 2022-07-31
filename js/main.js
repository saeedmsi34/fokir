// var bgColors=["red","blue","gray","violet","aqua","darkgreen","darkslateblue","white","chartreuse","rgb(92, 76, 230)","chocolate","gold"]
// for(var i=0;i<bgColors.length;i++){
//   $(".color-box li").eq(i).css("background-color",bgColors[i])
// }


// $(".color-box li").click(function(){
//  let currentBg=$(this).css("background-color")
// $("#change").css("color",currentBg)
// $(".change").css("color",currentBg)
// })

// $(".color-box i").click(function(){
//   let options=$(".color-options").outerWidth()
//   if($(".color-box").css("right")=="0px")
//   {
//     $(".color-box").animate({"right":-options},2000)
//   }
//   else{
//     $(".color-box").animate({"right":0},2000)
//   }

// })



// $(window).scroll(function(){
//     let currentOffset=$(window).scrollTop();

//   if  (currentOffset>100){

//     $("#nav").css({"background-color":"white", "transition": "all 2s"}) 

//     $(".nav-link").css({"color":"#8e7754"})

//     $('.nav-link').hover( function(){

//       $(this).css('color', 'black');
//   },

//   function(){
//     $(this).css('color', '#8e7754');
//   });

//   $(".imgNav").attr("src","photo/bakery-color.png");
//   $("#upBtn").fadeIn(2000)
// }else{

//   $("#nav").css({"background-color":"transparent"})
//   $("#upBtn").fadeOut(2000)

//   $(".nav-link").css({"color":"white"})

//   $('.nav-link').hover( function(){

//     $(this).css('color', '#8e7754');

//   },

//   function(){

//     $(this).css('color', 'white');

//   });

// $(".imgNav").attr("src","photo/bakery-light-1.png");

//   }

// })



////////////////////////// section Home////////////////////

$(window).scroll(function () {
    let currentOffSet = $(window).scrollTop()
    if (currentOffSet > 100) {
        // nav//
        $("#nav").css({ "background-color": "rgba(78, 77, 75, 0.9)", "transition": "all 1s" })
        // btnUp//
        $(".btnUp").fadeIn(2000)
    }
    else {
        // nav//
        $("#nav").css({ "background-color": "transparent" })
        // btnUp//
        $(".btnUp").fadeOut(2000)
    }
})
// btnUp//
$(".btnUp").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000)
})

// /loading////

$(document).ready(function () {

    $(".Loadding").fadeOut(2000, function () {
        $("body").css({ "overflow": "auto" })
    })

})

$('.counter').counterUp({
    delay: 10,
    time: 2000
});


function myFunction(x) {
    x.classList.toggle("change");

}






// $('.skitter-large').skitter({
//     progressbar: true
//   });




$('.testimonel-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: false,
    dots: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
    }
});





var typed = new Typed('.element', {
    strings: ['Front-End Web Developer', 'React.js'],
    typeSpeed: 100,
    backDelay: 100,
    loop: true,
    loopCount: Infinity,
    backSpeed: 100,
    smartBackspace: false // Default value
});














// function sayHell(){
//     document.getElementsByClassName(".hovOur").style.css="position:static !important"

// }



// var hovOurs=document.querySelectorAll(".hovOur") 
// for(i=0;i<hovOurs.length;i++){
//     hovOurs[i].addEventListener("click",function(){
//         console.log("test")
// //         hovOurs.style.cssText="position:static !important" 
//             hovOurs[i].style.position="static" 


//     })

// }


// function sayHell(){
//     hovOurs.style.position="static !important" 

// }






function sayHell() {
    $('.hovOur').css('cssText', 'display: none !important');

}

// portfolio

var imgs = Array.from(document.querySelectorAll(".slid"))
var lightContainer = document.querySelector(".light-container")
var lightContainerBox = document.querySelector(".light-containerBox")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev= document.getElementById("prev")

var curentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", slideShow)

    function slideShow(e) {
        lightContainer.style.display = "flex"
        var imgSrc = e.target.src;
        console.log(imgSrc)
        lightContainerBox.style.backgroundImage = `url(${imgSrc})`
        curentIndex = imgs.indexOf(e.target)
        console.log(curentIndex)

    }
}

close.addEventListener("click", getClose)
function getClose() {
    lightContainer.style.display = "none"
    $('.hovOur').css('cssText', 'display: flex !important');

}

next.addEventListener("click" , getNext)
function getNext(){
    curentIndex++;
    if(curentIndex==imgs.length){
        curentIndex=0;
      
    }
    var imgSrc=imgs[curentIndex].src
    lightContainerBox.style.backgroundImage=`url(${imgSrc})`
  
  
  }

  prev.addEventListener("click",getPrev)
  function getPrev(){
      curentIndex--;
      if(curentIndex<0){
          curentIndex=imgs.length-1
      }
      var imgSrc=imgs[curentIndex].src
      lightContainerBox.style.backgroundImage=`url(${imgSrc})`

  }
document.addEventListener("keydown",function(e){
    if(e.key=="Escape"){
        getClose()


    }else if(e.key=="ArrowRight"){
        getNext()

    }else if(e.key=="ArrowLeft"){
    getPrev()

}
})

lightContainer.addEventListener("click",function(e){
    if(e.target!==lightContainerBox&&e.target!==next&&e.target!==prev){
        getClose()

    }
})


























var inputName=document.getElementById("inputName")
var inputEmail=document.getElementById("inputEmail")
var inputSubject=document.getElementById("inputSubject")
var inputMessage=document.getElementById("inputMessage")
var addBtn=document.getElementById("addBtn")
var inputs=document.getElementsByClassName("mp1")




var contacts=[]

function addContact(){
    var contact={
        inputName:inputName.value,
        inputEmail:inputEmail.value,
        inputSubject:inputSubject.value,
        inputMessage:inputMessage.value,
    }
    contacts.push(contact)
    localStorage.setItem("contactList",JSON.stringify(contacts))
}
addBtn.onclick=function(){
    addContact()
    displayData()
    clearForm()
 
}


function displayData(){
    cartona="";
    for(var i=0;i<contacts.length;i++){
        cartona+=
        `
        <tr class="">
        <td>${i + 1}</td>
            <td>${contacts[i].inputName}</td>
            <td>${contacts[i].inputEmail}</td>
            <td>${contacts[i].inputSubject}</td>
            <td>${contacts[i].inputMessage}</td> 
            <td><button onclick=delet(${i}) class="btn btn-danger">Delete</button></td>      
            </tr>


        `
    }
    document.getElementById("tableBody").innerHTML=cartona;

}



function clearForm(){
        for(var i=0;i<inputs.length;i++){
            inputs[i].value=""
        }
       

}

function delet(index){
    contacts.splice(index,1)
    displayData()
    localStorage.setItem("contactList",JSON.stringify(contacts))
  
  }








function search(val){
    cartona="";
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].inputName.toLowerCase().includes(val.toLowerCase())){

  
        cartona+=
        `
        <tr class="">
        <td>${i + 1}</td>
            <td>${contacts[i].inputName}</td>
            <td>${contacts[i].inputEmail}</td>
            <td>${contacts[i].inputSubject}</td>
            <td>${contacts[i].inputMessage}</td> 
            <td><button onclick=delet(${i}) class="btn btn-danger">Delete</button></td>      
            </tr>


        `
    }
}
    document.getElementById("tableBody").innerHTML=cartona;

}






















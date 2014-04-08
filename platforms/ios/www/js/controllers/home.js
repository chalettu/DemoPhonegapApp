function Home_Controller($scope,$http,$timeout,$compile,appData) {
//put whatever methods you want in here
$timeout(function(){

    var mySwiper = new Swiper('.swiper-container',{
    slidesPerView: 3,
    loop:true,
    //Enable 3D Flow
    tdFlow: {}
  })
    
},1000);


}
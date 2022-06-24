$(function(){"use strict";$(".hero-banner__video, .video-play-button").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false});var nav_offset_top=$('header').height()+50;function navbarFixed(){if($('.header_area').length){$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=nav_offset_top){$(".header_area").addClass("navbar_fixed");}else{$(".header_area").removeClass("navbar_fixed");}});};};navbarFixed();$('#home_slider_banner').owlCarousel({loop:true,margin:0,items:1,nav:false,autoplay:true,autoplay:3500,smartSpeed:1000,dots:false,})
$('#service_slider').owlCarousel({loop:true,margin:15,items:5,dots:true,autoplay:true,autoplay:300,smartSpeed:800,responsiveClass:true,navText:["<div class='left_service_arrow'><img src='img/left.png'></div>","<div class='left_service_arrow'><img src='img/right.png'></div>"],responsive:{0:{items:2,dots:false,nav:true,},600:{items:3},1000:{items:5}}})
if($('.blog-slider').length){$('.blog-slider').owlCarousel({loop:true,margin:30,items:1,nav:true,autoplay:2500,smartSpeed:1500,dots:false,responsiveClass:true,responsive:{0:{items:1},600:{items:2},1000:{items:3}}})}
if($('.clients').length){$('.clients').owlCarousel({loop:true,margin:30,items:5,nav:false,dots:true,responsiveClass:true,responsive:{0:{items:2,dots:false,},600:{items:3},1000:{items:5}}})}});function createCookie(cookieName,cookieValue,daysToExpire)
{var date=new Date();date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));document.cookie=cookieName+"="+cookieValue+"; expires="+date.toGMTString();}
function accessCookie(cookieName)
{var name=cookieName+"=";var allCookieArray=document.cookie.split(';');for(var i=0;i<allCookieArray.length;i++)
{var temp=allCookieArray[i].trim();if(temp.indexOf(name)==0)
return temp.substring(name.length,temp.length);}
return "";}
var user=accessCookie("ftaCookie");if(user!=""){}else{$('#preloader').show();preloaderFadeOutTime=500;function hidePreloader(){var preloader=$('#preloader');preloader.fadeOut(preloaderFadeOutTime);}
if($(window).width()<=480){setTimeout(function(){hidePreloader()},3000);}else{setTimeout(function(){hidePreloader()},3000);}
user="FTA";num='1';if(user!=""&&user!=null)
{createCookie("ftaCookie",user,num);}}
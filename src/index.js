import './css/main.css';
import './css/font.css';
import './css/media.css';

import $ from 'jquery';
// import '../node_modules/owl.carousel';
// import "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
// $('.slaider').owlCarousel();


import {TimelineMax, Power0, Power1, Back} from 'gsap';



let tl = new TimelineMax();
        tl.staggerFrom(".mail_font", 0.5, {opacity: 0,x: 200},0.1 )
        .fromTo(".item__name", 0.3, {x:-100, opacity: 0},{x:0, opacity: 1})
        .staggerFrom(".row h1", 0.8, {alpha:0}, 1.2, "textEffect")
        .staggerFrom(".row h1", 1.2, {rotationY:"-270deg", transformOrigin: "50% 50% -80", ease:Back.easeOut}, 1.2, "textEffect")
        .staggerTo(".row h1", 1.2, {rotationX:"+=360deg", transformOrigin:"50% 50% 10"}, 1.2)
        .staggerFrom(".item__descr", 0.8, {
                opacity:0,
                cycle:{ x:[-100, 100, 200, 300] }   },0.1)
        .staggerFrom(".yslugi a", 0.8, {
                opacity:0,
                cycle:{ rotationX:[-90,90]  }      },0.1)
        .staggerFrom(".manager", 2.1, {
                opacity:0,
                cycle:{ x:function(){
                        return Math.random()*300 }} },1.5)
        .staggerFrom(".circle", 0.3, {
                opacity:0,
                cycle:{ rotationY:[-190,190],
                        transformOrigin:["50% top -200","50% bottom 200"]
                }  },0.7)
        .staggerFrom(".item", 1, {
                opacity:0,
                cycle:{
                        x:function(i){
                                return (i+1) * 50; },
                        ease:function(i){
                                return Back.easeOut.config( i * 0.3); }
                }  },0.2)
        .staggerFrom(".factoring_item", 0.5, {
                opacity:0,
                cycle:{ 
                        y:function(index){
                                return index * 50;
                              } 
                }   },0.2)
        
        .from(".__fact_separ_img", 0.5, {x:-50, autoAlpha: 0,ease:Power1.easeInOut},'+=0.1')
        .to(".__fact_separ_img", 1.8, { ease: Bounce.easeOut, x: 100})
        .to(".__fact_separ_img", 2.5, { ease: Back.easeOut.config(1.7), x: 0})
        .from(".window_comment", 0.5, {rotation: 720, autoAlpha: 0,ease:Power1.easeInOut}, '+=0.1')
	.to(".window_comment", 0.6, { y:0, ease:Bounce.easeInOut})
	.from("#separator",1,{opacity:0,scale:0})
	.from(".__sep_descr",1,{opacity:0,scale:0,delay:1});
		// .from(".__descr_f",1,{opacity:0,scale:2,delay:2})
		// .from(".money",0,7,{scale:0,ease:Bounce.easeOut})
		// .from(".f_num_wrapp",0.7,{opacity:0,scale:2,ease:Back.easeOut.config(3.5)});


        




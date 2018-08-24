import css from './css/main.css';


import {TimelineMax} from 'gsap';

let tl = new TimelineMax();
tl.add( TweenLite.to('.__contact_phone_f', 1, {opacity:0}) );
tl.staggerFrom(".mail_font", 0.5, { 
        opacity: 0,
        x: 200},0.1 );
// tl.staggerFrom(__section_descr.chars,0.8, {ease:Back.easeOut,x:"+=100",cycle:{y:curve},
//         opacity:0},0.02)
//         .staggerTo(__section_descr.chars,0.8, {ease:Back.easeOut,cycle:{y:[100,-100],
//                 rotation:[120,-120]},opacity:0},0.03,"+=1");
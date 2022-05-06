
// //import { Carousel } from '@trendyol-js/react-carousel';
// export const Carousel2 = ()=>{



//     const Carol2data = [
//         {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide1.jpg" },
//         {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/BadmintonStringing.jpg" },
//         {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide5.jpg" },
//         {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide2.jpg" }
//     ]

//     const Caro22data = [
//             {title : "BADMINTON RACKET STRINGING" , 
//             p1 : "Some Players prefer to have the comfort, power and flexibility to choose a contribution of features on a single string. For this, few tennis brands offer Hybrid Strings, which have one string for Mans and a different string for Crosses now. Now, YOU can also create your very own hybrid string!"  , 
//             p2 : " To avail of this service at sportsjam.in add your favourite racket in your order, along with Tennis Strings for Mains and Tennis String for Crosses (Hybrid Stringing). Please note that a good understanding of string features are required to achieve an optimum  balance between comfort, durability, control and power." ,
//             p3 : "Read More"},
            
//             {title : "HYBRID RACKET STRINGING" , 
//             p1 : "Intermediate and advanced rackets usually come in unstrung condition. We help you with atring it with your choice of strings, to get your racket perform as per your playing style."   ,
//             p2 : " At Sportsjam.in, we offer the best range of tennis and badminton rackets and strings of top brands, To avail this service, mentioning your choice of string and tension in your order, Get your very own customized racket - ready to play!", 
//             p3 : "Read More"},
            
//             {title : "TT BAT ASSEMBLY" , 
//             p1 : "Choose a ready-to-play Table bat from the best manufactures or build your very own customized bat!"   ,  
//             p2 : "We provide you a wide range of Rubbers and Blades from the best brands. Now you can make your desired combination across brands and according to your playing style. To avail this service at  Sportsjam.in, add a blade, 2 rubbers (black and red) and the TT bat assembly service in your order.",
//             p3 : "Read More"},
            
//             {title : "CRICKET BAT KNOCKING IN" , 
//             p1 : "Buying your best suited Cricket Bat is the key to score those massive runs - true, yet the important process often ignored is getting your bat ready to play."   ,  
//             p2 : " Get your bat kmocked-in to prepare the blade for optimum performance and longivity. In this, the bat goes through a process of oiling  and hammer/ball knocks to make it ready to face the impact of high speed deliveries. To avail this service at Sportsjam.in, add you  desired English willow bat along with the knocking-in service in your order. ", 
//             p3 : "Read More"},
//             ]



//             var slider_1 = document.querySelector('.slider_1');
//             var slider_2 = document.querySelector('.slider_2');
//             var slide1 = document.querySelector('.slide1');
//             var slide2 = document.querySelector('.slide2');
//             var slide3 = document.querySelector('.slide3');
//             var slide4 = document.querySelector('.slide4');
            
//             var section_index = 0;
            
//             slide1.addEventListener('mouseover', function(){
//                 slider_1.style.transform = 'translate('+ 0 +'%)';
//             })
//             slide2.addEventListener('mouseover', function(){
//                 slider_1.style.transform = 'translate('+ -45 +'%)';
//             })
//             slide3.addEventListener('mouseover', function(){
//                 slider_1.style.transform = 'translate('+ -90 +'%)';
//             })
//             slide4.addEventListener('mouseover', function(){
//                 slider_1.style.transform = 'translate('+ -130 +'%)';
//             })
            
//             slide1.addEventListener('mouseover', function(){
//                 slider_2.style.transform = 'translate('+ 0 +'%)';
//             })
//             slide2.addEventListener('mouseover', function(){
//                 slider_2.style.transform = 'translate('+ -25 +'%)';
//             })
//             slide3.addEventListener('mouseover', function(){
//                 slider_2.style.transform = 'translate('+ -50 +'%)';
//             })
//             slide4.addEventListener('mouseover', function(){
//                 slider_2.style.transform = 'translate('+ -75 +'%)';
//             })
        

    
//     return(


//    <>
//     <div class="container-sliding">
    
//         <div class="carousal-1">
//             <div class="slider_1">
                
//                 {Carol2data.map((e) => (
//                 <section>
//                 <>
//                     <img src={e.image} alt=""></img>   
//                 </>
//                 </section>
//                 ))}   
//             </div>  
//         </div>
      


//         <div class="carousal-2">
//             <div class="slider_2">
            
//             {Caro22data.map((e) => (
//                 <section>
//                 <>
//                     <p class="heading-slider">{e.title}</p>
//                     <p class="description-slider">{e.p1}</p>
//                     <p class="description-slider">{e.p2}</p>
//                     <p>{e.p3}</p>  
//                 </>
//                 </section>
//                 ))}    
//             </div>  
//         </div>
      
//    </div>

//    <div class="controls">
//         <span class="slide1">RACKET STRINGING</span>
//         <span class="slide2">HYBRID STRINGING</span>
//         <span class="slide3">TT ASSEMBLY</span>
//         <span class="slide4">BAT KNOCKING</span>
//    </div>
// </>
//     )
// }



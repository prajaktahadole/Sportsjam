import {Carousel1} from '../Carousel/carousel'
import d3img5 from '../../ImageData/img5.jpg';
import d3img6 from '../../ImageData/img6.jpg';
import './Landing.css';

export const Landing = ()=>{

  const div3data = [
    {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/victor-offer.jpg" , title : "VICTOR SHOES"},
    {image : "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Slinger.jpg"  , title : "SLINGER GRAND SLAM PACK"},
    ]


  return (
    <div className='homeDivMain'>
       <Carousel1></Carousel1>

    <div className='homeDiv1'>div1</div>



    <div className='homeDiv2'>
    <h1>OUR CUSTOMIZED SERVICES</h1>
  
    </div>




    <div className='homeDiv3'>

    {div3data.map((e) => (
              <div className='homeDiv3inner'>
              <>
                <img src={e.image} alt=""></img>
                 <h5>{e.title}</h5>
              </>
              </div>
            ))}
    </div>



    <div className='homeDiv4'>
      <img src='https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/asics-tennis-shoes.jpg'></img>
    </div>



    <div className='homeDiv5'>
      div5
    </div>




    <div className='homeDiv6'>
      <div  className='homeDiv3inner'>
          <img src='https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bta-store.jpg'></img>
      </div>
      <div  className='homeDiv3inner  homeDivinneright'>
          <h3>ABOUT SPORTSJAM</h3>
          <p>Let’s get going to dig out the best products in your game & make ‘em available right at your doorstep.
             We will be glad to serve you in any city in India & speedily, so that you enjoy your product in the coming weekend! All this, 
             with no shipping charges if you purchase above Rs.1000. Scout through your favourite brands with latest technologies.
            Just click & be its proud owner, at the best available price in the market. Come, help us help you to fly high with your new &
           improved game with high quality sportsgear!</p>
           <button>FIND OUR STORE</button>
      </div>
    </div>




    <div className='homeDiv7'>
      div7
    </div>





    <div className='homeDiv8'>
      footer
    </div>



    </div>
  )
  

  
    
  
}
import React,{useState} from 'react'
import './Carousel.css'
import { IoArrowForward } from "react-icons/io5";

function ExploreNow() {
    const slidesData = [
        { 
          id: 1, 
          content: (
            <div>
              <h2 className='slide-title'>Enhance fortune 50<br/> company’s insights <br/>teams research<br/> capabilities</h2>
              {/* <button>Button for Slide 1</button> */}
            </div>
          ),
          
        },
        { 
          id: 2, 
          content: (
            <div>
              <h2 className='slide-title'>Enhance fortune 90<br/> company’s insights <br/>teams research<br/> capabilities</h2>
              {/* <button>Button for Slide 1</button> */}
            </div>
          ),
          
        },
        { 
          id: 3, 
          content: (
            <div>
            <h2 className='slide-title'>Enhance fortune 100<br/> company’s insights <br/>teams research<br/> capabilities</h2>
            {/* <button>Button for Slide 1</button> */}
          </div>
          ),
          
        }
      ];
    
      // State to keep track of current slide index
      const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
      // Function to handle click on navigation dots
      const handleDotClick = (index) => {
        setCurrentSlideIndex(index);
      };
  return (
    <div>
        <div className="carousel-container">
            <div className="slideshow-container">
              {slidesData.map((slide, index) => (
                <div key={slide.id} className={index === currentSlideIndex ? 'mySlides fade active' : 'mySlides fade'}>
                  {slide.content}
                  {/* <img src={slide.imageUrl} alt={`Slide ${slide.id}`} style={{ width: '100%' }} /> */}
                </div>
              ))}
              
            </div>
            {/* Navigation dots */}
            <div className="dot-container">
              {slidesData.map((_, index) => (
                <span
                  key={index}
                  className={index === currentSlideIndex ? 'dot active' : 'dot'}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
            <button className='explore'>Explore Now <IoArrowForward className='forward'/></button>
          </div>
    </div>
  )
}

export default ExploreNow
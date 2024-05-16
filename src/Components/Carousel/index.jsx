import Carousel from 'react-bootstrap/Carousel';
import items from './MyItems';

function InfoCarousel() {
    return (
        <Carousel data-bs-theme="white" className='w-50 '>
          {items.map(item => (
              <Carousel.Item key={item.id}>
                  <img
                      className="d-block w-100"
                      src={item.image}
                      alt={item.title}
                  />
                  <Carousel.Caption className="bg-black/50 p-4 rounded">
                      <h5 className='text-white font-bold text-2xl mb-2'>{item.title}</h5>
                      <p className="text-white text-lg">{item.paragraph}</p>
                  </Carousel.Caption>
              </Carousel.Item>
          ))}
        </Carousel>
    );
}
  
export default InfoCarousel;
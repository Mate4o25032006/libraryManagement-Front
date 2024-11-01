import Carousel from 'react-bootstrap/Carousel';
import items from './MyItems';

function InfoCarousel() {
    return (
        <Carousel fade data-bs-theme="white" className="w-50">
            {items.map(item => (
                <Carousel.Item key={item.id} interval={3000}>
                    <img className="d-block w-100 rounded-lg" src={item.image} alt={item.title} />
                    <Carousel.Caption className="carousel-caption">
                        <h5>{item.title}</h5>
                        <p>{item.paragraph}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
  
export default InfoCarousel;
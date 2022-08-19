import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

import img1 from '../../assets/romance-book.jpg';
import img2 from '../../assets/science-book.jpg';
import img3 from '../../assets/historicial-book.jpg';

import './Carousel.scss'


const CarouselContainer =()=> {
  return (
    <Container>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='paragraph1'>Romance Books</h3>
          <p className='paragraph2'>The best Romance Books of 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 >Science Books</h3>
          <p >The best Science Books of 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 >Historicial Books</h3>
          <p >
            The Best Historicial Books of 2022
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default CarouselContainer;
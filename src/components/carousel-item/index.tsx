import React from 'react';
import './style.css';
import { Carousel, Row } from 'react-bootstrap';
export const CarouselItem = ({ sliderNews }: any) => {

  return (
    <Row className="my-5">
      <Carousel>
        {
          sliderNews.map((news: any, index: number) => {
            const { title, description, urlToImage, url } = news;
            return (<Carousel.Item onClick={() => {
              window.open(url);
            }}>
              <img
                className="d-block w-100"
                src={urlToImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{title}</h3>
                <p>{description}</p>
              </Carousel.Caption>
            </Carousel.Item>)
          })
        }
      </Carousel>
    </Row>
  );
};

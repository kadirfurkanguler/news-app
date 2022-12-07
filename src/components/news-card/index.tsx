import React from 'react';
import './style.css';
import { Card, Button, Col } from 'react-bootstrap';
import { strings } from 'utils';
export const NewsCard = ({ news }: any) => {
  const { title, description, urlToImage, url } = news;
  return (
    <Col md="4" >
      <Card >
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}
          </Card.Text>
          <a href={url} target="_blank">
            <Button variant="primary">{strings.detail}</Button>
          </a>
        </Card.Body>
      </Card></Col>
  );
};

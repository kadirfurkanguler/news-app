import React, { useEffect, useState } from 'react';
import './style.css';
import { getAll } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { CarouselItem, NewsCard } from 'components';
export const HomeScreen = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { allNews, isLoading, allNewsLength } = useSelector((state: any) => state.news);
  let items = [];
  for (let number = 1; number <= Math.round(allNewsLength / 20); number++) {
    items.push(
      <Pagination.Item onClick={() => {
        setPage(number - 1);
      }} key={number} active={number === page + 1}>
        {number}
      </Pagination.Item>,
    );
  }


  useEffect(() => {
    dispatch(getAll(page + 1) as any);
  }, [page]);
  return (
    <>
      <Container>
        {
          isLoading?.getCategory ? (
            <div className="page">
              <div className="loader"></div>
            </div>
          ) : (
            <>

              <Row>
                <Col md="9" className="mx-auto"><CarouselItem sliderNews={allNews.slice(0, 3)} /></Col>
              </Row>
              <Col md="9" className="mx-auto">
              <Row>
                {
                  allNews.slice(3, 20).map((news: any, index: number) => {
                    return (
                      <NewsCard news={news} key={index} />
                    )
                  })
                }
              </Row>
              </Col>
              <Row>
                <Col md="6" className="mx-auto d-flex justify-content-center">
                  <Pagination size="lg">{items}</Pagination></Col>
              </Row>
            </>
          )
        }
      </Container>

    </>
  );
};

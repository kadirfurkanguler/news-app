import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { getCategory } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { NewsCard } from 'components';
export const CategoryScreen = () => {
  const { category } = useParams();
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { categoryNews, isLoading, categoryNewsLength } = useSelector((state: any) => state.news);
  let items = [];
  for (let number = 1; number <= Math.round(categoryNewsLength / 20); number++) {
    items.push(
      <Pagination.Item onClick={() => {
        setPage(number - 1);
      }} key={number} active={number === page + 1}>
        {number}
      </Pagination.Item>,
    );
  }
  useEffect(() => {
    dispatch(getCategory({ category, page: 1 }) as any);
    setPage(0);
  }, [category]);

  useEffect(() => {
    dispatch(getCategory({ category, page: page + 1 }) as any);
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
            <Row>
              {/* <Col md="3" >
                {
                  //!TODO add sidebar
                  // Manuel eklemem gerekiyor ama vaktim yok ayrica zaten kategoriye gore filtreleme var
                }
              </Col> */}
              <Col md="9" className="mx-auto"> <Row>
                {
                  categoryNews.map((news: any, index: number) => {
                    return (
                      <NewsCard news={news} key={index} />
                    )
                  })
                }
              </Row>
                <Row>
                  <Col md="6" className="mx-auto d-flex justify-content-center">
                    <Pagination size="lg">{items}</Pagination></Col>
                </Row></Col>
            </Row>
          )
        }
      </Container>

    </>
  );
};

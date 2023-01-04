import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { searchNews } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { NewsCard } from 'components';
export const SearchScreen = () => {
  {
    /*
    Aranan kelimeye göre haberleri getiren sayfa
    parametre olarak kelime  ve sayfa sayısı alır.
    kelime ile haberleri getirir.
    pagination ile 20'şer 20'şer haber getirir.
    dispatch ile haberlerin global state'e kaydedilmesi için gerekli isteği atar.
  */
  }
  const { q } = useParams();
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
    dispatch(searchNews({ q, page: 1 }) as any);
    setPage(0);
  }, [q]);

  useEffect(() => {
    dispatch(searchNews({ q, page: page + 1 }) as any);
  }, [page]);
  return (
    <>
      <Container>
        <Row>
          <Col className="mx-auto text-center">
            <h1>{q?.toUpperCase()} ile ilgili haberler...</h1></Col>
        </Row>
        {
          isLoading?.searchNews ? (
            <div className="page">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <Col md="9" className="mx-auto">

                <Row>
                  {
                    categoryNews.map((news: any, index: number) => {
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

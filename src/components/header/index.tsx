import React, { useState } from 'react';
import { Nav, Container, Navbar, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';
import { strings, categories } from 'utils';
{
  /*
  utils klasörü içerisindeki strings.ts ve categories.ts dosyalarını import ediyoruz.
  */
}


export const Header = () => {
  const [keyword, setKeyword] = useState('')
  {
    /*
      Header Componenti
      Navbar ve Search Bar Componenti
      Arama işlemi olursa search pathine yönlendirir.
      kategori listesi için categories.ts içerisindeki kategorileri kullanıyoruz dinamik olarakda oluşturabiliriz.
    */
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>Kadir Furkan Guler</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={strings.search}
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <NavLink onClick={() => {
              setKeyword('');
            }} to={`search/${keyword}`}> <Button variant="outline-light">{strings.search}</Button></NavLink>
          </Form>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark" expand="md">

        <Container>
          <Navbar.Brand as={NavLink} to="/">{strings.home}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                categories.map((category, index) => {
                  return (
                    <Nav.Link as={NavLink} to={category.path} key={index}>{strings[category.name]}</Nav.Link>
                  )
                })
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [items] = useState(data)

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">유소영 Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>


      <Routes>
        <Route path='/' element={
          <>
           <div className='main-bg'></div>
          <Container>
           <Row>
            <Card items={items}></Card>
            <Card2 items={items}></Card2>
           <Card3 items={items}></Card3>
          </Row>
        </Container>
        </>
        } />
        <Route path='/detail' element={
          <>
            <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876_1280.jpg" width="80%" />
             </div>
              <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
               <button className="btn btn-danger">주문하기</button> 
             </div>
            </div>
          </div> 
          </>} />
      </Routes>

    </div>
  );
}




function Card(props) {
  return(
    <Col>
      <img src='https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876_1280.jpg' width="80%"/>
      <h4>{props.items[0].title}</h4>
      <p>{props.items[0].content}</p>
      <p>{props.items[0].price}</p>
    </Col>
  )
}

function Card2(props) {
  return(
    <Col>
      <img src='https://cdn.pixabay.com/photo/2018/02/18/13/03/cute-3162209_1280.jpg' width="80%"/>
      <h4>{props.items[1].title}</h4>
      <p>{props.items[1].content}</p>
      <p>{props.items[1].price}</p>
    </Col>  
  )
}

function Card3(props) {
  return(
    <Col>
      <img src='https://cdn.kiranico.net/file/kiranico/mhworld-web/images/wp/factory/saxe/RxU8uPN.jpg' width="80%"/>
      <h4>{props.items[2].title}</h4>
      <p>{props.items[2].content}</p>
      <p>{props.items[2].price}</p>
    </Col>
  )
}

export default App;

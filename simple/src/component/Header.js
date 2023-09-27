import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">개발 지옥</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">강의 추천</Nav.Link>
            <Nav.Link href="#link">강의 평가</Nav.Link>
            <NavDropdown title="기타" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">마이페이지</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                구매 내역
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">장바구니</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                로그아웃
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  );
}

export default Header;

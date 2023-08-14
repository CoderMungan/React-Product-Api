import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function LinkNav({ veri, setveri }) {

    const [input, setInput] = useState("")

    const handlerCheck = (event) => {
        const handler = event.target.value
        setInput(handler)
    }

    // Search Yaparken Ürünü Filtreleme
    const clickButton = () => {
        const veriAl = veri.filter((data) => data.title.includes(input))
        setveri(veriAl)
        setInput("")
    }

    return (


        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Anasayfa</Nav.Link>
                            <Nav.Link href="#action2">Ürün Detay</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={handlerCheck}
                                value={input}
                            />
                            <Button variant="outline-success" onClick={clickButton} value={input}>Ara</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

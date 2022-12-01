import React from 'react';
import { Link } from 'react-router-dom'

// Import Components
import { Row, Col, Card, Alert, Breadcrumb, Button, ButtonGroup, ListGroup, Nav, Dropdown, DropdownButton, Pagination, ProgressBar, Tabs, Tab } from "react-bootstrap";

// Import Image
import UserImg from '../../assets/img/customers/customer8.jpg';
import UserImg1 from '../../assets/img/customers/customer2.jpg';
import UserImg2 from '../../assets/img/customers/customer3.jpg';
import CardImg from '../../assets/img/img-01.jpg';

class Components extends React.Component {
    render() {
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Components</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Components</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
				    <div className="container">
                        <div className="comp-sec-wrapper">

                            {/* Avatar */}
                            <section className="comp-section">
                                <div className="comp-header">
                                    <h3 className="comp-title">Avatar</h3>
                                    <div className="line"></div>
                                </div>

                                <Row>
                                    <Col sm={12}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Sizing</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <div className="avatar avatar-xxl mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar avatar-xl mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar avatar-lg mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar avatar-sm mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar avatar-xs">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col sm={12}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Avatar With Status</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <div className="avatar avatar-online mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar avatar-offline mr-1">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar avatar-away">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col sm={12}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Shape</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <div className="avatar mr-1">
                                                    <img className="avatar-img rounded" alt="User Image" src={UserImg} />
                                                </div>
                                                <div className="avatar">
                                                    <img className="avatar-img rounded-circle" alt="User Image" src={UserImg} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col sm={12}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Group</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <div className="avatar-group">
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={UserImg} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={UserImg1} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={UserImg2} />
                                                    </div>
                                                    <div className="avatar">
                                                        <span className="avatar-title rounded-circle border border-white">CF</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </section>
                            {/* /Avatar */}

                            {/* Alerts */}
                            <section className="comp-section">
                                <div className="comp-header">
                                    <h3 className="comp-title">Alerts</h3>
                                    <div className="line"></div>
                                </div>
                                <Card>
                                    <Card.Body>
                                        <Alert variant="primary" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="secondary" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="success" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="danger" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="warning" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="info" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="light" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>

                                        <Alert variant="dark" dismissible>
                                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        </Alert>
                                    </Card.Body>
                                </Card>
                            </section>
                            {/* /Alerts */}

                            {/* Breadcrumps */}
                            <section className="comp-section">
                                <div className="comp-header">
                                    <h3 className="comp-title">Breadcrumps</h3>
                                    <div className="line"></div>
                                </div>

                                <Card>
                                    <Card.Body>
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
                                        </Breadcrumb>

                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Products</Breadcrumb.Item>
                                        </Breadcrumb>

                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Accessories</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Card.Body>
                                </Card>
                            </section>
                            {/* /Breadcrumps */}

                            {/* Buttons */}
                            <section className="comp-section">
                                <div className="comp-header">
                                    <h3 className="comp-title">Buttons</h3>
                                    <div className="line"></div>
                                </div>

                                <Card>
                                    <Card.Body>
                                        <Card.Title>Default Button</Card.Title>
                                        <Button variant="primary" className="mr-1">Primary</Button>
                                        <Button variant="secondary" className="mr-1">Secondary</Button>
                                        <Button variant="success" className="mr-1">Success</Button>
                                        <Button variant="warning" className="mr-1">Warning</Button>
                                        <Button variant="danger" className="mr-1">Danger</Button> 
                                        <Button variant="info" className="mr-1">Info</Button>
                                        <Button variant="light" className="mr-1">Light</Button> 
                                        <Button variant="dark" className="mr-1">Dark</Button>
                                        <Button variant="link">Link</Button>
                                        <hr/>
                                        <Card.Title className="mt-4">Button Sizes</Card.Title>
                                        <Button variant="primary" size="lg" className="mr-1">Primary</Button>
                                        <Button variant="secondary" size="lg" className="mr-1">Secondary</Button>
                                        <Button variant="success" size="lg" className="mr-1">Success</Button>
                                        <Button variant="warning" size="lg" className="mr-1">Warning</Button>
                                        <Button variant="danger" size="lg" className="mr-1">Danger</Button> 
                                        <Button variant="info" size="lg" className="mr-1">Info</Button>
                                        <Button variant="light" size="lg" className="mr-1">Light</Button> 
                                        <Button variant="dark" size="lg" className="mr-1">Dark</Button>
                                        <Button variant="link" size="lg">Link</Button>
                                        <Card.Title className="mt-4"></Card.Title>
                                        <Button variant="primary" size="sm" className="mr-1">Primary</Button>
                                        <Button variant="secondary" size="sm" className="mr-1">Secondary</Button>
                                        <Button variant="success" size="sm" className="mr-1">Success</Button>
                                        <Button variant="warning" size="sm" className="mr-1">Warning</Button>
                                        <Button variant="danger" size="sm" className="mr-1">Danger</Button> 
                                        <Button variant="info" size="sm" className="mr-1">Info</Button>
                                        <Button variant="light" size="sm" className="mr-1">Light</Button> 
                                        <Button variant="dark" size="sm" className="mr-1">Dark</Button>
                                        <Button variant="link" size="sm">Link</Button>
                                        <hr/>
                                        <Card.Title className="mt-4">Button Groups</Card.Title>
                                        <ButtonGroup size="lg" className="mb-2">
                                            <Button>Left</Button>
                                            <Button>Middle</Button>
                                            <Button>Right</Button>
                                        </ButtonGroup>
                                        <br />
                                        <ButtonGroup className="mb-2">
                                            <Button>Left</Button>
                                            <Button>Middle</Button>
                                            <Button>Right</Button>
                                        </ButtonGroup>
                                        <br />
                                        <ButtonGroup size="sm">
                                            <Button>Left</Button>
                                            <Button>Middle</Button>
                                            <Button>Right</Button>
                                        </ButtonGroup>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Card.Title>Rounded Button</Card.Title>
                                        <Card.Text>use <code>.btn-rounded</code> in className to get Rounded button</Card.Text>
                                    </Card.Header>

                                    <Card.Body>
                                        <Button variant="primary" className="mr-1 btn-rounded">Primary</Button>
                                        <Button variant="secondary" className="mr-1 btn-rounded">Secondary</Button>
                                        <Button variant="success" className="mr-1 btn-rounded">Success</Button>
                                        <Button variant="warning" className="mr-1 btn-rounded">Warning</Button>
                                        <Button variant="danger" className="mr-1 btn-rounded">Danger</Button> 
                                        <Button variant="info" className="mr-1 btn-rounded">Info</Button>
                                        <Button variant="light" className="mr-1 btn-rounded">Light</Button> 
                                        <Button variant="dark" className="mr-1 btn-rounded">Dark</Button>
                                        <Button variant="link" className="btn-rounded">Link</Button>
                                        <hr/>
                                        <p>use <code>.btn-rounded</code> in className <code>outline-*</code> variant to get Rounded Outline button</p>
                                        <Button variant="outline-primary" className="mr-1 btn-rounded">Primary</Button>
                                        <Button variant="outline-secondary" className="mr-1 btn-rounded">Secondary</Button>
                                        <Button variant="outline-success" className="mr-1 btn-rounded">Success</Button>
                                        <Button variant="outline-warning" className="mr-1 btn-rounded">Warning</Button>
                                        <Button variant="outline-danger" className="mr-1 btn-rounded">Danger</Button>
                                        <Button variant="outline-info" className="mr-1 btn-rounded">Info</Button>
                                        <Button variant="outline-light" className="mr-1 btn-rounded">Light</Button>
                                        <Button variant="outline-dark" className="btn-rounded">Dark</Button>
                                    </Card.Body>                            
                                </Card>

                                {/* Outline Buttons */}
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Outline Buttons</Card.Title>
                                        <Card.Text>Use <code>outline-*</code> varient for outline buttons.</Card.Text>
                                    </Card.Header>

                                    <Card.Body>
                                        <div className="row row-sm align-items-center">
                                            <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-primary">Primary</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-secondary">Secondary</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-success">Success</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-warning">Warning</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-danger">Danger</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-info">Info</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-light">Light</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-dark">Dark</Button>
                                            </div>
                                        </div>

                                        <div className="row row-sm align-items-center mt-3">
                                            <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-primary" active>Primary</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-secondary" active>Secondary</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-success" active>Success</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-warning" active>Warning</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-danger" active>Danger</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-info" active>Info</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-light" active>Light</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-dark" active>Dark</Button>
                                            </div>
                                        </div>

                                        <div className="row row-sm align-items-center mt-3">
                                            <div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-primary" disabled>Primary</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-secondary" disabled>Secondary</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-success" disabled>Success</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-warning" disabled>Warning</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-danger" disabled>Danger</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-info" disabled>Info</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-light" disabled>Light</Button>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                                <Button variant="outline-dark" disabled>Dark</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                {/* /Outline Buttons */}

                                {/* Progress Button */}
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Progress Buttons</Card.Title>
                                    </Card.Header>

                                    <Card.Body>
                                        <Button variant="primary" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Primary</Button>
                                        <Button variant="secondary" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Secondary</Button>
                                        <Button variant="success" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Success</Button>
                                        <Button variant="warning" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Warning</Button>
                                        <Button variant="danger" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Danger</Button> 
                                        <Button variant="info" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Info</Button>
                                        <Button variant="dark" className="mr-1"><span className="spinner-border spinner-border-sm mr-2" role="status"></span>Dark</Button>
                                    </Card.Body>
                                </Card>
                                {/* /Progress Button */}

                            </section>
                            {/* /Buttons */}


                            {/* Cards */}
                            <section className="comp-section">
                                <div className="comp-header">
                                    <h3 className="comp-title">Cards</h3>
                                    <div className="line"></div>
                                </div>

                                <Row>
                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Img variant="top" src={CardImg} />
                                            <Card.Header>
                                                <Card.Title>Card with image and links</Card.Title>
                                            </Card.Header>
                                            <Card.Body>                                        
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Img variant="top" src={CardImg} />
                                            <Card.Header>
                                                <Card.Title>Card with image and button</Card.Title>
                                            </Card.Header>
                                            <Card.Body>                                        
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Img variant="top" src={CardImg} />
                                            <Card.Header>
                                                <Card.Title>Card with image and list</Card.Title>
                                            </Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Card with link</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>                                    
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Card with button</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>                                    
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Card with list</Card.Title>
                                            </Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                            </ListGroup>                                   
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Header>
                                                This is my header
                                            </Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card with list</Card.Title>
                                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                This is my header
                                            </Card.Footer>                              
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Header>
                                                <Nav variant="tabs" defaultActiveKey="#first">
                                                <Nav.Item>
                                                    <Nav.Link href="#first">Active</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#link">Link</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#disabled" disabled>
                                                    Disabled
                                                    </Nav.Link>
                                                </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                                        <Card>
                                            <Card.Header>
                                                <Nav variant="pills" defaultActiveKey="#first">
                                                <Nav.Item>
                                                    <Nav.Link href="#first">Active</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#link">Link</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#disabled" disabled>
                                                    Disabled
                                                    </Nav.Link>
                                                </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                            </section>
                            {/* /Cards */}

                            {/* Dropdowns */}
                            <section className="comp-section comp-dropdowns">
                                <div className="comp-header">
                                    <h3 className="comp-title">Dropdowns</h3>
                                    <div className="line"></div>
                                </div>

                                <Card>
                                    <Card.Body>
                                        <Card.Title>Dropdowns Custom</Card.Title>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-custom-components">
                                            Custom toggle
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                                Orange
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <hr/>
                                        <Card.Title>Dropdowns within Buttons</Card.Title>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            variant="primary"
                                            title="Action"
                                            className="mr-2"
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                            Active Item
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>

                                        <DropdownButton
                                            as={ButtonGroup}
                                            variant="secondary"
                                            title="Action"
                                            className="mr-2"
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                            Active Item
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>

                                        <DropdownButton
                                            as={ButtonGroup}
                                            variant="success"
                                            title="Action"
                                            className="mr-2"
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                            Active Item
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>

                                        <DropdownButton
                                            as={ButtonGroup}
                                            variant="info"
                                            title="Action"
                                            className="mr-2"
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                            Active Item
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>

                                        <DropdownButton
                                            as={ButtonGroup}
                                            variant="warning"
                                            title="Action"
                                            className="mr-2"
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                            Active Item
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>

                                        <DropdownButton
                                            as={ButtonGroup}
                                            variant="danger"
                                            title="Action"
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                            Active Item
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                        <hr/>
                                        <Card.Title>Split button dropdowns</Card.Title>
                                        <Dropdown as={ButtonGroup} className="mr-2">
                                            <Button variant="primary">Action</Button>

                                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown as={ButtonGroup} className="mr-2">
                                            <Button variant="secondary">Action</Button>

                                            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown as={ButtonGroup} className="mr-2">
                                            <Button variant="success">Action</Button>

                                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown as={ButtonGroup} className="mr-2">
                                            <Button variant="info">Action</Button>

                                            <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown as={ButtonGroup} className="mr-2">
                                            <Button variant="warning">Action</Button>

                                            <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown as={ButtonGroup}>
                                            <Button variant="danger">Action</Button>

                                            <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </section>
                            {/* Dropdowns */}

                            {/* Pagination */}
                            <section className="comp-section comp-dropdowns">
                                <div className="comp-header">
                                    <h3 className="comp-title">Pagination</h3>
                                    <div className="line"></div>
                                </div>

                                <Card>
                                    <Card.Body>
                                        <Pagination>
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Item active>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>

                                        <Pagination size="lg">
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Item active>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>

                                        <Pagination size="sm">
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Item active>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>
                                    </Card.Body>
                                </Card>
                            </section>
                            {/* /Pagination */}

                            {/* Progressbar */}
                            <section className="comp-section comp-dropdowns">
                                <div className="comp-header">
                                    <h3 className="comp-title">Progress</h3>
                                    <div className="line"></div>
                                </div>

                                <Card>
                                    <Card.Header>
                                        <Card.Title>Default Progress Bars</Card.Title>
                                    </Card.Header>

                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <div>
                                                    <ProgressBar variant="success" now={40} className="mb-4" />
                                                    <ProgressBar variant="info" now={20} className="mb-4" />
                                                    <ProgressBar variant="warning" now={60} className="mb-4" />
                                                    <ProgressBar variant="danger" now={80} className="mb-4" />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div>
                                                    <ProgressBar striped variant="success" now={40} className="mb-4" />
                                                    <ProgressBar striped variant="info" now={20} className="mb-4" />
                                                    <ProgressBar striped variant="warning" now={60} className="mb-4" />
                                                    <ProgressBar striped variant="danger" now={80} className="mb-4" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Card.Title>Animated Progress Bars</Card.Title>
                                    </Card.Header>

                                    <Card.Body>
                                        <Row>
                                            <Col md={12}>
                                                <div>
                                                    <ProgressBar animated  variant="success" now={40} className="mb-4" />
                                                    <ProgressBar animated  variant="info" now={20} className="mb-4" />
                                                    <ProgressBar animated  variant="warning" now={60} className="mb-4" />
                                                    <ProgressBar animated  variant="danger" now={80} className="mb-4" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Card.Title>Stacked Progress Bars</Card.Title>
                                    </Card.Header>

                                    <Card.Body>
                                        <Row>
                                            <Col md={12}>
                                                <div>
                                                    <ProgressBar>
                                                        <ProgressBar striped variant="success" now={35} key={1} />
                                                        <ProgressBar variant="warning" now={20} key={2} />
                                                        <ProgressBar striped variant="danger" now={10} key={3} />
                                                    </ProgressBar>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </section>
                            {/* Progressbar */}

                            {/* Tabs */}
                            <section className="comp-section comp-dropdowns">
                                <div className="comp-header">
                                    <h3 className="comp-title">Tabs</h3>
                                    <div className="line"></div>
                                </div>

                                <Row>
                                    <Col md={6}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Basic Tabs</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                                    <Tab eventKey="home" title="Home">
                                                        Tab Content 1
                                                    </Tab>
                                                    <Tab eventKey="profile" title="Profile">
                                                        Tab Content 2
                                                    </Tab>
                                                    <Tab eventKey="contact" title="Contact">
                                                        Tab Content 3
                                                    </Tab>
                                                </Tabs>                                
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={6}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>No Animation Tabs</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                                    <Tab eventKey="home" title="Home">
                                                        Tab Content 1
                                                    </Tab>
                                                    <Tab eventKey="profile" title="Profile">
                                                        Tab Content 2
                                                    </Tab>
                                                    <Tab eventKey="contact" title="Contact">
                                                        Tab Content 3
                                                    </Tab>
                                                </Tabs>                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>                        
                            </section>
                            {/* Tabs */}

                            {/* Typography */}
                            <section className="comp-section">
                                <div className="comp-header">
                                    <h3 className="comp-title">Typography</h3>
                                    <div className="line"></div>
                                </div>

                                <Row>
                                    <Col md={12}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Headings</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <h1>h1. Bootstrap heading</h1>
                                                <h2>h2. Bootstrap heading</h2>
                                                <h3>h3. Bootstrap heading</h3>
                                                <h4>h4. Bootstrap heading</h4>
                                                <h5>h5. Bootstrap heading</h5>
                                                <h6>h6. Bootstrap heading</h6>
                                            </Card.Body>
                                        </Card>

                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Blockquotes</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <blockquote>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                </blockquote>
                                                <blockquote className="blockquote mb-0">
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                </blockquote>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={4}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Text element</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                                <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                                <p><u>This line of text will render as underlined</u></p>
                                                <p><small>This line of text is meant to be treated as fine print.</small></p>
                                                <p><strong>This line rendered as bold text.</strong></p>
                                                <p><em>This line rendered as italicized text.</em></p>
                                                <p className="text-monospace mb-0">This is in monospace</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Coloured Link</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <p className="text-primary">.text-primary</p>
                                                <p className="text-secondary">.text-secondary</p>
                                                <p className="text-success">.text-success</p>
                                                <p className="text-danger">.text-danger</p>
                                                <p className="text-warning">.text-warning</p>
                                                <p className="text-info">.text-info</p>
                                                <p className="text-light bg-dark">.text-light</p>
                                                <p className="text-dark">.text-dark</p>
                                                <p className="text-muted">.text-muted</p>
                                                <p className="text-white bg-dark mb-0">.text-white</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Coloured text</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <p><Link to="#" className="text-primary">Primary link</Link></p>
                                                <p><Link to="#" className="text-secondary">Secondary link</Link></p>
                                                <p><Link to="#" className="text-success">Success link</Link></p>
                                                <p><Link to="#" className="text-danger">Danger link</Link></p>
                                                <p><Link to="#" className="text-warning">Warning link</Link></p>
                                                <p><Link to="#" className="text-info">Info link</Link></p>
                                                <p><Link to="#" className="text-light bg-dark">Light link</Link></p>
                                                <p><Link to="#" className="text-dark">Dark link</Link></p>
                                                <p><Link to="#" className="text-muted">Muted link</Link></p>
                                                <p><Link to="#" className="text-white bg-dark mb-0">White link</Link></p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={4}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Bullet Lists</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <ul className="mb-0">
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Consectetur adipiscing elit</li>
                                                    <li>Integer molestie lorem at massa</li>
                                                    <li>Facilisis in pretium nisl aliquet</li>
                                                    <li>Nulla volutpat aliquam velit
                                                        <ul>
                                                            <li>Phasellus iaculis neque</li>
                                                            <li>Purus sodales ultricies</li>
                                                            <li>Vestibulum laoreet porttitor sem</li>
                                                            <li>Ac tristique libero volutpat at</li>
                                                        </ul>
                                                    </li>
                                                    <li>Faucibus porta lacus fringilla vel</li>
                                                    <li>Aenean sit amet erat nunc</li>
                                                    <li>Eget porttitor lorem</li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Bullet Lists</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <ol className="mb-0">
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Consectetur adipiscing elit</li>
                                                    <li>Integer molestie lorem at massa</li>
                                                    <li>Facilisis in pretium nisl aliquet</li>
                                                    <li>Nulla volutpat aliquam velit
                                                        <ul>
                                                            <li>Phasellus iaculis neque</li>
                                                            <li>Purus sodales ultricies</li>
                                                            <li>Vestibulum laoreet porttitor sem</li>
                                                            <li>Ac tristique libero volutpat at</li>
                                                        </ul>
                                                    </li>
                                                    <li>Faucibus porta lacus fringilla vel</li>
                                                    <li>Aenean sit amet erat nunc</li>
                                                    <li>Eget porttitor lorem</li>
                                                </ol>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title>Unstyled Lists</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <ul className="list-unstyled mb-0">
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Consectetur adipiscing elit</li>
                                                    <li>Integer molestie lorem at massa</li>
                                                    <li>Facilisis in pretium nisl aliquet</li>
                                                    <li>Nulla volutpat aliquam velit
                                                        <ul>
                                                            <li>Phasellus iaculis neque</li>
                                                            <li>Purus sodales ultricies</li>
                                                            <li>Vestibulum laoreet porttitor sem</li>
                                                            <li>Ac tristique libero volutpat at</li>
                                                        </ul>
                                                    </li>
                                                    <li>Faucibus porta lacus fringilla vel</li>
                                                    <li>Aenean sit amet erat nunc</li>
                                                    <li>Eget porttitor lorem</li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </section>
                            {/* /Typography */}
                        </div>
                    </div>
                </div>
                {/* Page Content */}                
            </div>
        )
    }
}
export { Components };
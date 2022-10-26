import Nav from 'react-bootstrap/Nav';
import './footer.css';

export function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-copyright'>
                <p> Copyright © 2022 Teliolabs Communication Private Limited. All Rights Reserved </p>
            </div>
            <div className='footer-links'>
                <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="https://www.teliolabs.com/itsolution/5g/">5G</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="https://www.teliolabs.com/about-us/">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="https://www.teliolabs.com/contact-us/">Contact Us</Nav.Link>
                </Nav.Item>
                </Nav>
            </div>
        </div>
    </div>
  );
}

import React from 'react';
import './styles.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="list">
                    <ul>
                        <li>Impressum</li>
                        <li>Contact</li>
                        <li>Mainpage</li>
                    </ul>
                </div>
                <p>© 2020 Company. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
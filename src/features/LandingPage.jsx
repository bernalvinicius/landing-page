import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUniversity, faHeart } from '@fortawesome/free-solid-svg-icons'
import database from '../assets/images/database.png';
import './styles.scss';

class LandingPage extends Component {
    render() {
        return (
            <div className="grid-content">
                <header className="header">
                    <h1>Awesome Product</h1>
                    <h2>Mussum Ipsum, cacilds vidis litro abertis</h2>
                    <button>Order yours now!</button>
                </header>
                <main className="main">
                    <section className="section-image">
                        <div className="image-container">
                            <div className="image">
                                <img src={database} alt="Logo" />
                            </div>
                            <div className="text">
                                <h3>Product is so awesome</h3>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>
                            </div>
                        </div>
                    </section>
                    <section className="section-icons">
                        <div className="container">
                            <div className="icon">
                                <FontAwesomeIcon className="icon-i" icon={faBolt} />
                                <p>
                                    Product so awesome. Makes you awesome - go buy!
                                </p>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon className="icon-i" icon={faUniversity} />
                                <p>
                                    Product so great. Makes you even greater - go buy now. Super cheap deal! go buy now. Super cheap deal!
                                </p>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon className="icon-i" icon={faHeart} />
                                <p>
                                    Feel lonely? Go buy product and have a friend!
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="section-text">
                        <div className="container">
                            <h3>Take Product with you everywhere you go.</h3>
                            <p>Product is all you need. Anywhere - ever. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente hic voluptatum quo sunt totam accusamus distinctio minus aliquid quis!</p>
                        </div>
                    </section>
                    <section className="section-list">
                        <div className="container">
                            <h3>Reasons to buy this product:</h3>
                            <div className="list">
                                <div className="list-1">
                                    <ul>
                                        <li>Its the best</li>
                                        <li>Its awesome</li>
                                        <li>It makes you happy</li>
                                        <li>It brings world peace</li>
                                        <li>Its free!</li>
                                    </ul>
                                </div>
                                <div className="list-2">
                                    <ul>
                                        <li>Its the best</li>
                                        <li>Its awesome</li>
                                        <li>It makes you happy</li>
                                        <li>It brings world peace</li>
                                        <li>Its free!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-button">
                        <div className="container">
                            <h3>Why you still reading?</h3>
                            <button>Order yours now!</button>
                        </div>
                    </section>
                </main>
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
            </div>
        )
    }
}

export default LandingPage;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUniversity, faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

function SectionIcons() {
    return (
        <section className="section-icons">
            <div className="container">
                <div className="icon">
                    <FontAwesomeIcon className="icon-i" icon={faBolt} />
                    <p>Product so awesome. Makes you awesome - go buy!</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon className="icon-i" icon={faUniversity} />
                    <p>Product so great. Makes you even greater - go buy now. Super cheap deal! go buy now. Super cheap deal!</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon className="icon-i" icon={faHeart} />
                    <p>Feel lonely? Go buy product and have a friend!</p>
                </div>
            </div>
        </section>
    )
}

export default SectionIcons;

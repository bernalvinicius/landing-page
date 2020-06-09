import React from 'react';
import './styles.scss';

function SectionList() {
    return (
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
    )
}

export default SectionList;

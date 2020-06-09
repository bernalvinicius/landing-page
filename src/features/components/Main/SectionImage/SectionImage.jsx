import React from 'react';
import './styles.scss';
import database from '../../../../assets/images/database.png';

function SectionImage() {
    return (
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
    )
}

export default SectionImage;

import React from "react";

function Product ({label, image, imageALT, nameOfBag, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={imageALT}/>
            <p>{nameOfBag}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;
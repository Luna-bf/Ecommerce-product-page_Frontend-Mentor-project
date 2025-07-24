const products = [
    {
        id: 1,
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1.jpg',
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg',
    },
    {
        id: 2,
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-2.jpg',
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg',
    },
    {
        id: 3,
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-3.jpg',
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg',
    },
    {
        id: 4,
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-4.jpg',
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg',
    },
];

console.log(products[1].productImageSrc);

const elements = {
    productLis: document.querySelectorAll('#products-imgs-small li'),
    productImgsSmall: document.querySelectorAll('#products-imgs-small li img'),
    quantityMinus: document.querySelector('#quantity .bi-dash'),
    quantityPara: document.querySelector('#quantity span'),
    quantityPlus: document.querySelector('#quantity .bi-plus'),
}



// Je veux retirer l'event listener lorsque je clique sur une autre image
function productsImagesEvent() {

    // Je boucle sur tout mes éléments
    elements.productLis.forEach(function(productLi) { productLi.addEventListener('click', function () {
        
        productLi.classList.add('wrapper');
    })});
    
    elements.productImgsSmall.forEach(function(productImageSmall) { productImageSmall.addEventListener('click', function () {
        
        productImageSmall.classList.add('active-img');
    })});
}

productsImagesEvent();


// QUANTITY
let count = 0;

function quantity() {

    elements.quantityMinus.addEventListener('click', function() {

        for(let count = 0; count < elements.quantityMinus; count--) {

            elements.quantityPara.textContent = count - 1;
            console.log(count);
        }
    });

    elements.quantityPlus.addEventListener('click', function() {

        for(let count = 0; count < elements.quantityPlus; count++) {

            elements.quantityPara.textContent = count + 1;
            console.log(count);
        }
    });
}

quantity();
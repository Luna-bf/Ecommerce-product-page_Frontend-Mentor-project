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


const elements = {
    // Product imgs
    productLis: document.querySelectorAll('#products-imgs-small li'),
    productImgsSmall: document.querySelectorAll('#products-imgs-small li img'),

    // Quantity
    quantityContainer: document.querySelector('.product-infos-container'),
    quantityMinus: document.querySelector('#quantity #minus'),
    quantityPara: document.querySelector('#quantity span'),
    quantityPlus: document.querySelector('#quantity #plus'),
    warningPara: document.createElement('span'),
}



/***EVEN LISTENERS***/
// Je veux retirer l'event listener lorsque je clique sur une autre image
function productsImagesEvent() {

    // Je boucle sur tout mes éléments
    elements.productLis.forEach(function (productLi) {
        productLi.addEventListener('click', function () {

            productLi.classList.add('wrapper');
        })
    });

    elements.productImgsSmall.forEach(function (productImageSmall) {
        productImageSmall.addEventListener('click', function () {

            productImageSmall.classList.add('active-img');
        })
    });
}

productsImagesEvent();



// QUANTITY
function quantity() {

    let count = 0;

    elements.quantityMinus.addEventListener('click', function () {

        count -= 1;
        elements.quantityPara.textContent = count;

        // Lorsque la quantité désirée pour l'article atteint zéro...
        if (count === 0) {
            elements.quantityMinus.setAttribute('disabled', true); //Je déclare l'attribut 'disabled' à true au bouton
        }
    });

    // Augmente la quantité
    elements.quantityPlus.addEventListener('click', function () {

        count += 1;
        elements.quantityPara.textContent = count;

        if (count >= 2) {
            elements.quantityPlus.setAttribute('disabled', true); //Je déclare l'attribut 'disabled' à true au bouton

            elements.warningPara.style.color = 'firebrick';
            elements.warningPara.style.marginTop = '15px';
            elements.warningPara.textContent = 'Limite de 2 articles par client.';

            elements.quantityContainer.append(elements.warningPara);
        }
    });
}

quantity();
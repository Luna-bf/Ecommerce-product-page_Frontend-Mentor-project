/***OBJECTS***/
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

const quantityElements = {
    quantityContainer: document.querySelector('.product-infos-container'),
    quantityMinus: document.querySelector('#quantity #minus'),
    quantityPara: document.querySelector('#quantity span'),
    quantityPlus: document.querySelector('#quantity #plus'),
    warningPara: document.createElement('span'),
}



/***EVEN LISTENERS***/

// PRODUCT LIST
const productList = document.querySelectorAll('#products-imgs-small li'); //Renvoie une NodeList, soit un tableau contenant tout les éléments lis.

productList.forEach(function(product) { // Je boucle sur mon tableau productList

    // J'ajoute un évènement de click au produit
    product.addEventListener('click', function() {

        /*
        - Ici la fonction removeClass va parcourir tout les éléments, lorsque je vais cliquer sur un élément, il prendra la classe
        'active-style', si je clique sur un autre élément, la fonction removeClass() va parcourir tout les éléments et supprimer
        la classe 'active-style' de l'élément qui l'avait obtenu avant.
        
        - Enfin, j'ajoute la classe 'active-style' à l'élément sur lequel j'ai cliqué.
        */
        removeClass(); // J'appelle ma fonction removeClass()
        product.classList.add('active-style'); // Puis j'ajoute la classe à l'élément cliqué
    })
});

function removeClass() {

    productList.forEach(function(product) { // Je parcours mon tableau productList

        product.classList.remove('active-style'); // Si l'un des produit a la classe 'active-style', je la supprime
    });
}


// QUANTITY
function quantity() {

    let count = 0;

    quantityElements.quantityMinus.addEventListener('click', function () {

        count -= 1;
        quantityElements.quantityPara.textContent = count;

        // Lorsque la quantité désirée pour l'article atteint zéro...
        if (count === 0) {
            quantityElements.quantityMinus.setAttribute('disabled', true); //Je déclare l'attribut 'disabled' à true au bouton
        }
    });

    // Augmente la quantité
    quantityElements.quantityPlus.addEventListener('click', function () {

        count += 1;
        quantityElements.quantityPara.textContent = count;

        if (count >= 2) {
            quantityElements.quantityPlus.setAttribute('disabled', true); //Je déclare l'attribut 'disabled' à true au bouton

            quantityElements.warningPara.style.color = 'firebrick';
            quantityElements.warningPara.style.marginTop = '15px';
            quantityElements.warningPara.textContent = 'Limit 2 per customers.';

            quantityElements.quantityContainer.append(quantityElements.warningPara);
        }
    });
}

quantity();
/***OBJECTS***/

// Images
const productsImages = [
    {
        id: 1,
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg',
        productThumbnailAlt: 'Product 1 (thumbnail)',
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1.jpg',
        productImageAlt: 'Product 1',
    },
    {
        id: 2,
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg',
        productThumbnailAlt: 'Product 2 (thumbnail)',
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-2.jpg',
        productImageAlt: 'Product 2',
    },
    {
        id: 3,
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg',
        productThumbnailAlt: 'Product 3 (thumbnail)',
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-3.jpg',
        productImageAlt: 'Product 3 (image)',
    },
    {
        id: 4,
        productThumbnailSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg',
        productThumbnailAlt: 'Product 4 (thumbnail)',
        productImageSrc: './ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-4.jpg',
        productImageAlt: 'Product 4',
    },
];

// Carousel
const carouselElements = {
    carouselContainer: document.getElementById('carousel-container'),
    carouselImage: document.querySelectorAll('.carousel-img-container img'),
    carouselThumbnail: document.querySelectorAll('.carousel-imgs-small li img'),
};

// Quantity
const quantityElements = {
    quantityContainer: document.querySelector('.product-infos-container'),
    quantityMinus: document.querySelector('#quantity #minus'),
    quantityPara: document.querySelector('#quantity span'),
    quantityPlus: document.querySelector('#quantity #plus'),
    warningPara: document.createElement('span'),
};



/***EVEN LISTENERS***/

// PRODUCT LIST
const productListThumbnails = document.querySelectorAll('.products-imgs-small li img');
const productList = document.querySelectorAll('.products-imgs-small li'); //Renvoie une NodeList, soit un tableau contenant tout les éléments lis.


productList.forEach(function (product) { // Je boucle sur mon tableau productList

    // J'ajoute les images et les alt aux balises li
    for (let thumbnail = 0; thumbnail < productsImages.length; thumbnail++) {

        productListThumbnails[thumbnail].setAttribute('src', productsImages[thumbnail].productThumbnailSrc);
        productListThumbnails[thumbnail].setAttribute('alt', productsImages[thumbnail].productThumbnailAlt);
    }

    // J'ajoute un évènement de click au produit
    product.addEventListener('click', function () {

        /*
        - Ici la fonction removeClass va parcourir tout les éléments, lorsque je vais cliquer sur un élément, il prendra la classe
        'active-style', si je clique sur un autre élément, la fonction removeClass() va parcourir tout les éléments et supprimer
        la classe 'active-style' de l'élément qui l'avait obtenu avant.
        
        - Enfin, j'ajoute la classe 'active-style' à l'élément sur lequel j'ai cliqué.
        */
        removeClass(); // J'appelle ma fonction removeClass()
        product.classList.add('active-style'); // Puis j'ajoute la classe à l'élément cliqué

        makeCarouselVisible(); // J'appelle la fonction makeCarouselVisible pour l'afficher
    })
});



// removeClass()
function removeClass() {

    productList.forEach(function (product) { // Je parcours mon tableau productList (les balises li)

        product.classList.remove('active-style'); // Si l'un des produit a la classe 'active-style', je la supprime
    });
}


// CAROUSEL
function makeCarouselVisible() {

    // Images (grandes images)
    for (let carouselImageSrc = 0; carouselImageSrc < productsImages.length; carouselImageSrc++) {

        carouselElements.carouselImage[carouselImageSrc].setAttribute('src', productsImages[carouselImageSrc].productImageSrc);
        carouselElements.carouselImage[carouselImageSrc].setAttribute('alt', productsImages[carouselImageSrc].productImageAlt);
    }


    // Thumbnails (petites images)
    for (let carouselThumbnailSrc = 0; carouselThumbnailSrc < productsImages.length; carouselThumbnailSrc++) {

        carouselElements.carouselThumbnail[carouselThumbnailSrc].setAttribute('src', productsImages[carouselThumbnailSrc].productThumbnailSrc);
        carouselElements.carouselThumbnail[carouselThumbnailSrc].setAttribute('alt', productsImages[carouselThumbnailSrc].productThumbnailAlt);
    }



    //Je fais une boucle for pour parcourir le tableau (querySelectorAll / NodeList) et ajouter les images au carousel
    for (let image = 0; image < carouselElements.carouselImg.length; image++) {

        carouselElements.carouselImage[image].setAttribute('src', productsImages[image].productImageSrc);
        carouselElements.carouselImage[image].setAttribute('alt', productsImages[image].productImageAlt);


        for (let getImage = 0; getImage < productsImages.length; getImage++) {

            if (productsImages[getImage] === carouselElements[image]) {

                carouselElements.carouselImage[image].setAttribute('src', productsImages[image].productImageSrc);
                carouselElements.carouselImage[image].setAttribute('alt', productsImages[image].productImageAlt);

            } else {
                console.log('err');
            }
        }
    }

    // Il faut que l'image affichée sur le carousel soit la même que la petite image sur laquelle j'ai cliqué (balise img)
    // Exemple: Voir si la grande et la petite image font parties du même objet (si leur objet ont le même id ou index)
    // console.log(productsImages[0].id);

    carouselElements.carouselContainer.style.display = 'block';

    // Code initial (for...in) 
    /*for (const imgThumbnail in productsImages) {

        carouselImg.setAttribute('src', `${productsImages[imgThumbnail].productThumbnailSrc}`);
        carouselImg.setAttribute('alt', `${productsImages[imgThumbnail].productThumbnailAlt}`);

        console.log(`Source: ${productsImages[imgThumbnail].productThumbnailSrc}`);
        console.log(`Alt: ${productsImages[imgThumbnail].productThumbnailAlt}`);
    }*/
}



// QUANTITY
function quantity() {

    let count = 0;

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

    quantityElements.quantityMinus.addEventListener('click', function () {

        count -= 1;
        quantityElements.quantityPara.textContent = count;

        // Lorsque la quantité désirée pour l'article atteint zéro...
        if (count === 0) {
            quantityElements.quantityMinus.setAttribute('disabled', true); //Je déclare l'attribut 'disabled' à true au bouton
        }
    });
}

quantity();
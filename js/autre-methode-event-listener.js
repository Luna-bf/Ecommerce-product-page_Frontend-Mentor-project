// Méthode non utilisée
const productList = document.querySelectorAll('#products-imgs-small li'); //Renvoie une NodeList, soit un tableau contenant tout les éléments lis.

/*
    Cette boucle va appliquer un style à un élément. Lorsque l'élément est cliqué, le style lui est attribué 
    et est retiré de tout autre élément possèdant aussi ce style.
*/
productList.forEach(function (product, index, listProducts) {
    
    product.addEventListener('click', function () {

        listProducts.forEach(function(prod) {

            prod.classList.toggle('wrapper', prod === product);
        });
    });
});
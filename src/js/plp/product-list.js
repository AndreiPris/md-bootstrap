import products from './products-data';
import productsTemplate from '../templates/product-list.hbs';

var productElement = document.getElementById('products');

if (productElement) {
  productElement.innerHTML = productsTemplate({ products });
}

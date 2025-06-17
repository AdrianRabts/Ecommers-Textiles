// Función para agregar productos al carrito
function addToCart(productId) {
    // Aquí podrías implementar una lógica para agregar productos al carrito
    // En este caso, solo mostramos un mensaje en consola
    console.log(`Producto con ID ${productId} añadido al carrito`);
    alert('Producto añadido al carrito');
}

// Función de búsqueda de productos (Filtro)
document.getElementById('search').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block'; // Muestra el producto si coincide con la búsqueda
        } else {
            product.style.display = 'none'; // Oculta el producto si no coincide
        }
    });
});

// Lógica para agregar los botones "Añadir al Carrito" a los productos
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.parentElement.querySelector('h3').textContent; // Obtiene el nombre del producto como identificador
        addToCart(productId);  // Llama a la función para agregar al carrito
    });
});

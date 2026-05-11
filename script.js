const products = {
    product1: {
        title: "Продукт 1",
        description: "Це чудовий продукт 1 з високою якістю матеріалів. Він ідеально підходить для щоденного використання та забезпечує комфорт та стиль.",
        price: "$19.99",
        image: "./images/product1.jpg"
    },
    product2: {
        title: "Продукт 2",
        description: "Продукт 2 - це інноваційне рішення для ваших потреб. Виготовлений з преміум матеріалів, він гарантує довговічність та надійність.",
        price: "$29.99",
        image: "./images/product2.jpg"
    },
    product3: {
        title: "Продукт 3",
        description: "Відкрийте для себе продукт 3, який поєднує функціональність та елегантність. Ідеальний вибір для тих, хто цінує якість.",
        price: "$39.99",
        image: "./images/product3.jpg"
    },
    product4: {
        title: "Продукт 4",
        description: "Продукт 4 пропонує неперевершену продуктивність та дизайн. Зроблений з увагою до деталей, він стане вашим улюбленим аксесуаром.",
        price: "$49.99",
        image: "./images/product4.jpg"
    },
    product5: {
        title: "Продукт 5",
        description: "Зустрічайте продукт 5 - поєднання стилю та функціональності. Він створений для тих, хто шукає щось особливе.",
        price: "$59.99",
        image: "./images/product5.jpg"
    },
    product6: {
        title: "Продукт 6",
        description: "Продукт 6 - це вершина інновацій. Його унікальні матеріали забезпечують максимальний комфорт та довговічність.",
        price: "$69.99",
        image: "./images/product6.jpg"
    },
    product7: {
        title: "Продукт 7",
        description: "Продукт 7 - це ексклюзивний товар з унікальним дизайном. Він поєднує сучасні технології та класичний стиль для неперевершеного досвіду.",
        price: "$79.99",
        image: "./images/product7.jpg"
    },
    product8: {
        title: "Продукт 8",
        description: "Відкрийте світ продукту 8, який пропонує передові функції та вишуканий вигляд. Ідеально для тих, хто цінує інновації.",
        price: "$89.99",
        image: "./images/product8.jpg"
    }
};

function showProductModal(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('productModal').style.display = 'block';
    }
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
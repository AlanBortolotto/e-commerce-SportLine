let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotalSpan = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cartTotal = 0;

  cart.forEach(item => {
    cartTotal += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(itemDiv);
  });

  cartCount.textContent = cart.length;
  cartTotalSpan.textContent = cartTotal.toFixed(2);
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

// Função para finalizar a compra
function finalizePurchase() {
  if (cart.length === 0) {
    alert("O seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
    return;
  }

  // Salvar os dados do carrinho no localStorage
  localStorage.setItem("cartItems", JSON.stringify(cart));
  localStorage.setItem("cartTotal", cartTotal.toFixed(2));

  // Redireciona para a página de confirmação
  window.location.href = "confirmacao.html"; // Redireciona para a página de confirmação
}
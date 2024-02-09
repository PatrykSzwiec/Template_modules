<template>
  <div class="website">
    <div class="product-card">
      <div class="product-info">
        <div class="product-image">
          <img src="../images/image-product-desktop.jpg" alt="Product Image" class="img-fluid" />
        </div>
        <div class="product-details  justify-content-center align-items-center">
          <h1 class="text-uppercase text-muted">PERFUME</h1>
          <h2>Gabrielle <br/> Essence Eau<br/>De Parfum</h2>
          <p class="text-muted">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div class="price">
            <div class="price-wrapper">
              <span class="discount-price">$149.99</span>
              <span class="original-price">$169.99</span>
            </div>
          </div>
          <button class="add-to-cart">
            <img class="icon-cart" src="../images/icon-cart.svg" alt="Cart Icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700&display=swap');
.website {
  background-color: hsl(30, 38%, 92%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card {
  max-width: 600px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.product-info {
  display: flex;
}

.product-image {
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
}

.product-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.product-details {
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
}

.product-details h1 {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 5px;
  color: hsl(228, 12%, 48%);
  
}

.product-details h2 {
  font-size: 30px;
  font-family: 'Fraunces', serif;
  font-weight: 700;
  word-wrap: break-word;
  color: hsl(212, 21%, 14%);
}

.product-details p {
  font-size: 14px;
  color: hsl(228, 12%, 48%);
  margin-top: 10px;
}

.product-details .price {
  margin-top: 20px;
  display: flex;
  
}

.product-details .price-wrapper {
  display: flex;
  justify-content: space-between;
}

.product-details .original-price {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  color: hsl(228, 12%, 48%);
  margin-left: 10px;
  margin-top: 10px;
  text-decoration: line-through;
}

.product-details .discount-price {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 30px;
  color: hsl(158, 36%, 37%);
  font-weight: bold;
}

.add-to-cart {
  margin: 20px auto;
  padding: 10px 20px;
  background-color: hsl(158, 36%, 37%);
  color: hsl(0, 0%, 100%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.add-to-cart .icon-cart {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.add-to-cart:hover {
  background-color: hsl(158, 36%, 27%);
}
</style>
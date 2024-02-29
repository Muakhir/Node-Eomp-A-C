<template>
  <div>
    <h2 class="static-heading">Product Details</h2>
    <div v-if="product" class="row align-items-center justify-content-center">
      <div class="col-md-4 text-center">
        <img :src="product.prodImg" class="img-fluid" alt="Product Image">
      </div>
      <div class="col-md-4">
        <div>
          <h3 class="product-title">{{ product.prodName }}</h3>
          <p class="product-info">
            {{ product.prodQuantity }} Kits Available
            <br>
            <br>
            {{ product.prodCategory }}
            <br>
            <button class="btn btn-primary">
              <p class="money"> R{{ product.prodAmount }}</p>
            </button>
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <spinnerComponent></spinnerComponent>
    </div>
  </div>
</template>

<script>
import cardView from '../components/cards.vue'

export default {
  components: {
    cardView
  },
  computed: {
    product() {
      const productId = this.$route.params.id;
      return this.$store.state.products.find(product => product.prodID == productId);
    }
  },
  mounted() {
    this.$store.dispatch('getProducts', this.$route.params);
  }
}
</script>

<style scoped>

.row {
  min-height: 80vh;
}

.text-center {
  text-align: center;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  max-height: 450px;
  margin-bottom: 10px; /* Adjusted margin */
}

.static-heading {
  color: black;
  font-size: 28px;
  margin-top: 30px;
}

.product-title {
  font-size: 30px;
  color: black;
  margin-bottom: 20px;
}

.product-info {
  font-size: 1.5rem;
  color: black;
  margin-bottom: 20px; 
}

.btn-primary {
  background-color: #87EF97;
  color: #000000;
  border: none;
  margin-top: 40px; /* Adjusted margin */
  padding: 15px; /* Adjusted padding */
  font-size: 20px;
}

.btn-primary:hover {
  background-color: #53b261;
}

.money {
  margin: 0;
}

</style>

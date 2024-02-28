<template>
  <div>
    <div v-if="product">
      <h1>{{ product.prodName }} Details</h1>
      <!-- Display more detailed information about the product here -->
      <p>Product ID: {{ product.prodID }}</p>
      <p>Product Image: <img :src="product.prodImg" alt="Product Image" /></p>
      <p>Product Category: {{ product.prodCategory }}</p>
      <p>Product Quantity: {{ product.prodQuantity }}</p>
      <p>Product Amount: R{{ product.prodAmount }}</p>
      <!-- Add more details as needed -->
    </div>

    <div v-else>
      <spinnerComponent></spinnerComponent>
    </div>
  </div>
</template>

<script>
import spinnerComponent from '@/components/spinnerComponent.vue';

export default {
  components: {
    spinnerComponent,
  },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    getProductById() {
      // Fetch product details based on the route parameter
      const productId = this.$route.params.id;
      return this.$store.state.products.find((p) => p.prodID === productId);
    },
  },
  watch: {
    $route: 'fetchProductDetails',
  },
  methods: {
    fetchProductDetails() {
      // Fetch product details when the route changes
      this.product = this.getProductById();
    },
  },
  mounted() {
    // Initialize product details on component mount
    this.fetchProductDetails();
  },
};
</script>

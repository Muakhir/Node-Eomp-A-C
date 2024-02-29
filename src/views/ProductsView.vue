<template>
  <div>
    <h1>Explore Our Amazing Health Kits Below</h1>

    <div class="search-sort-container">
      <input v-model="searchTerm" type="text" placeholder="Search products">
      <button class="Prod1" @click="toggleCategory">{{ category === 'vegan' ? 'Vegan' : category === 'non-vegan' ? 'Non-Vegan' : 'All Products' }}</button>
      <button class="Sort" @click="sortProducts">Sort</button>
    </div>

    <!-- Container for all products -->
    <div class="container">
      <div v-if="sortedProducts" class="row">
        <div class="col-md-4 mb-4" v-for="product in sortedProducts" :key="product.prodID">
          <!-- Using the cardView component with slots -->
          <cardView>

            <!-- Slot for the header -->
            <template v-slot:cardH>
              <h5 class="card-title">{{ product.prodName }}</h5>
            </template>

            <!-- Slot for the Body -->
            <template v-slot:cardB>
              <img :src="product.prodImg" class="card-img-top" alt="Product Image">
            </template>

            <!-- Slot for the Footer -->
            <template v-slot:cardF>
              <p class="card-text">
                {{ product.prodQuantity }} Available
                <br>
                {{ product.prodCategory }}
                <br>
                <p class="money">R{{ product.prodAmount }} </p>
              </p>
              <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                <button class="btn btn-primary">View Details</button>
              </router-link>
            </template>


            
          </cardView>
        </div>
      </div>

      <div v-else>
        <spinnerComponent></spinnerComponent>
      </div>
    </div>
  </div>
</template>
  
<script>
import cardView from '../components/cards.vue'; 

import spinnerComponent from '@/components/spinnerComponent.vue';
  
export default {
  name: 'ProductsView',
  components: {
  spinnerComponent,
  cardView
},
data() {
  return {
    searchTerm: '',
    shouldSort: false, 
    // Added shouldSort variable
    category: 'all', 
    // Adds a category property with 'all' as default
    };
  },
computed: {
  products() {
  return this.$store.state.products;
  },
  sortedProducts() {
    // Im Using a copy to avoid mutating the original array
    let sorted = [...this.products];
  
    // Check if sorting is enabled
    if (this.shouldSort) {
    // Sorting by price
    sorted.sort((a, b) => a.prodAmount - b.prodAmount);
}
// Search functionality
    if (this.searchTerm.trim() !== '') {
    const term = this.searchTerm.toLowerCase();
    sorted = sorted.filter(product =>
    product.prodName.toLowerCase().includes(term)
    );
    }

// Filter based on the selected category
  if (this.category !== 'all') {
  sorted = sorted.filter(product => {
  if (this.category === 'vegan') {
  return product.prodCategory.toLowerCase() === 'vegan';
  } else if (this.category === 'non-vegan') {
  return product.prodCategory.toLowerCase() !== 'vegan';
  }
});
  }
  return sorted;
      },
    },
methods: {
  sortProducts() {
  // this toggles the shouldSort function, it returns the products to the original array on the second click
  this.shouldSort = !this.shouldSort;
  },
  toggleCategory() {
  // Toggle between 'vegan', 'non-vegan', and 'all'
  const categories = ['vegan', 'non-vegan', 'all'];
  const currentIndex = categories.indexOf(this.category);
  this.category = categories[(currentIndex + 1) % categories.length];
  },
  },
  mounted() {
    this.$store.dispatch('getProducts');
    },
  };

  </script>



<style scoped>
h1 {
  color: black;
  margin-top: 100px;
}

.money{
  color: black;
  font-size: 25px;
  font-weight: 600;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 150px;
}

.search-sort-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
  margin-top: 80px;
}

.search-sort-container input {
  padding: 15px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-sort-container button {
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-right: 15px;
  width: 10%;
}

.search-sort-container button:hover {
  background-color: #4FB860;
  color: black;
}

.card {
  width: 350px !important; /* Set a fixed width for consistency */
  height: 100%;
  transition: transform 0.3s ease-in-out;
  /* margin: 0 15px 15px 0; */
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: scale(1.05);
}
.row {
  display: flex;
  justify-content: space-between; /* Add this line */
}

.card-text {
  font-size: 20px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.btn-primary {
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #4FB860;
  color: black;
}

@media screen and (min-width: 900px) {
  .card {
    width: 80%; /* Adjust the width for larger screens */
    margin-left: 20px;
    margin-right: 20px;
  }
  h1{
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media screen and (min-width: 860px) {
  .card {
    width: 80%; /* Adjust the width for larger screens */
    margin-left: 20px;
    margin-right: 20px;
  }
  h1{
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 720px) {
  .card {
    width: 80%; /* Full width on screens up to 720px */
    margin-left: 20px;
    margin-right: 20px;
  }
  h1{
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    margin-top: 30px;
    margin-left: 20px;
  }

  .search-sort-container {
    flex-direction: column;
    margin-left: 40px;
    margin-right: 40px;
  }

  .search-sort-container input {
    width: 100%;
    margin-bottom: 10px;
    margin-left: 40px;
    margin-right: 40px;
  }

  .search-sort-container button {
    width: 50%;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .card {
    width: 80%; /* Full width on screens up to 720px */
    margin-left: 20px;
    margin-right: 20px;
  }

  .card-img-top {
    height: 150px;
  }
  h1{
    margin-left: 10px;
    margin-right: 10px;
  }
  
}

@media screen and (max-width: 300px) {
  .card {
    width: 80%; /* Full width on screens up to 720px */
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>

  
  

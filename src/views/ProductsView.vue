<template>
    <div>
      <h1>Explore Our Amazing Health Kits Below</h1>
      
      <div class="search-sort-container">
        <input v-model="searchTerm" type="text" placeholder="Search products">
        <button @click="sortProducts">Sort</button>
      </div>
  
      <div class="container">
        <div v-if="sortedProducts" class="row">
          <div class="col-md-4 mb-4" v-for="product in sortedProducts" :key="product.prodID">
            <div class="card box-shadow">
              <img :src="product.prodImg" class="card-img-top" alt="Product Image">
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">
                  {{ product.prodQuantity }} available<br>
                  R{{ product.prodAmount }}
                </p>
  
                <router-link :to="{ name: 'ProductDetails', params: { id: product.prodID } }">
                  <button class="btn btn-primary">View Details</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
  
        <div v-else>
          <spinnerComponent></spinnerComponent>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import spinnerComponent from '@/components/spinnerComponent.vue';
  
  export default {
    name: 'ProductsView',
    components: {
      spinnerComponent,
    },
    data() {
      return {
        searchTerm: '',
        shouldSort: false, 
        // Added shouldSort variable
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      sortedProducts() {
        // Using a copy to avoid mutating the original array
        let sorted = [...this.products];
  
        // Check if sorting is enabled
        if (this.shouldSort) {
          // Sorting alphabetically
          sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
        }
  
        // Search functionality
        if (this.searchTerm.trim() !== '') {
          const term = this.searchTerm.toLowerCase();
          sorted = sorted.filter(product =>
            product.prodName.toLowerCase().includes(term)
          );
        }
  
        return sorted;
      },
    },
    methods: {
      sortProducts() {
        // this toggles the shouldSort function, it returns the products to the original array on the second click
        this.shouldSort = !this.shouldSort;
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
  padding: 10px;
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
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.search-sort-container button:hover {
  background-color: #4FB860;
  color: black;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  margin: 0 15px 15px 0;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: scale(1.05);
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

@media screen and (max-width: 600px) {
  .container {
    margin-top: 30px;
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
    width: 100%;
    margin-left: 40px;
    margin-right: 40px;
  }

  .card {
    margin-bottom: 20px;
    
  }

  .card-img-top {
    height: 150px;
  }
}
</style>

  
  

<template>
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="inputM">
              <input class="info" v-model="payload.prodID" type="text" placeholder="Product ID:" />
              <input class="info" v-model="payload.prodName" type="text" placeholder="Product Name:" />
              <input class="info" v-model="payload.prodQuantity" type="text" placeholder="Product Quantity:" />
              <input class="info" v-model="payload.prodAmount" type="text" placeholder="Product Amount:" />
              <input class="info" v-model="payload.prodImg" type="text" placeholder="Product Image URL:" />
  
              <p class="cat">Category:</p>
              <select v-model="payload.prodCategory">
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegan">Non-Vegan</option>
              </select>
              <br>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['prodID', 'prodName', 'prodQuantity', 'prodAmount', 'prodImg', 'prodCategory'],
    methods: {
      updateProduct() {
        this.$emit('update-product', {
          prodID: this.prodID,
          prodName: this.prodName,
          prodQuantity: this.prodQuantity,
          prodAmount: this.prodAmount,
          prodImg: this.prodImg,
          prodCategory: this.prodCategory,
        });
        this.$emit('close-modal');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  
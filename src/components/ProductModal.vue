<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProductModal">
    Edit
  </button>
  <!-- Modal -->
  <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @show.bs.modal="updateModalData">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update Details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <section @submit.prevent="updateProduct()">
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="Product ID" v-model="payload.prodID">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="Product Name" v-model="payload.prodName">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="Product Image" v-model="payload.prodImg">
            </div>

            <div class="mb-3 text-center">
          <label for="category" class="form-label">Product Category</label>
          <select id="category" class="form-select w-50 mx-auto" required v-model="payload.prodCategory">
            <option value="vegan">Vegan</option>
            <option value="non-vegan">Non-Vegan</option>
          </select>
        </div>

            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="Quantity" v-model="payload.prodQuantity">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Amount/Price" v-model="payload.prodAmount">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-success" @click="updateProduct()">Update</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'UpdateProduct',
  data() {
    return {
      payload: {
        prodID: '',
        prodName: '',
        prodImg: '',
        prodCategory: '',
        prodQuantity: '',
        prodAmount: ''
      }
    };
  },
  methods: {
    async updateProduct() {
      console.log(this.$data)
      try {
        this.$store.dispatch('updateProduct', { id: this.payload.prodID, data: this.payload });
      } catch (error) {
        console.error(error);
      }
      window.location.reload();
    },
    updateModalData() {
      // Check if the product prop is provided
      if (this.product) {
        // Update the payload data with the product details
        this.payload = {
          prodID: this.product.prodID,
          prodName: this.product.prodName,
          prodImg: this.product.prodImg,
          prodCategory: this.product.prodCategory,
          prodQuantity: this.product.prodQuantity,
          prodAmount: this.product.prodAmount,
        };
      }
    },
  }
};
</script>

<style scoped>
.modal-content {
  font-family: 'Poppins', sans-serif;
}

.modalButton {
  width: 100%;
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  margin: 15px 0;
  font-size: 20px;
  transition: 0.5s;
  font-family: 'Poppins', sans-serif;
}

.modalButton:hover {
  transition: 0.5s;
  transform: scale(1.1);
  color: white;
  background-color: #215e2a;
}
label{
  text-align: center;
}
</style>

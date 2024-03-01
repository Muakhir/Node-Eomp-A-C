<template>
  <div>
    <!-- Button to open the modal -->
    <button @click="openModal">Open Modal</button>

    <!-- The modal -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <!-- Modal header -->
        <div class="modal-header">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Product Input Modal</h2>
        </div>

        <!-- Modal body with input fields -->
        <div class="modal-body">
          <label for="prodID">Product ID:</label>
          <input class="info" v-model="prodID" type="text" id="prodID" placeholder="Product ID:" />

          <label for="prodName">Product Name:</label>
          <input class="info" v-model="prodName" type="text" id="prodName" placeholder="Product Name:" />

          <label for="prodQuantity">Product Quantity:</label>
          <input class="info" v-model="prodQuantity" type="text" id="prodQuantity" placeholder="Product Quantity:" />

          <label for="prodAmount">Product Amount:</label>
          <input class="info" v-model="prodAmount" type="text" id="prodAmount" placeholder="Product Amount:" />

          <label for="prodImg">Product Image URL:</label>
          <input class="info" v-model="prodImg" type="text" id="prodImg" placeholder="Product Image URL:" />

          <p class="cat">Category:</p>
          <select v-model="prodCategory">
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegan">Non-Vegan</option>
          </select>
        </div>

        <!-- Modal footer with buttons -->
        <div class="modal-footer">
          <button @click="closeModal">Cancel</button>
          <button @click="submitInput">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: Boolean,
    selectedProduct: Object,
  },
  data() {
    return {
      prodID: "",
      prodName: "",
      prodQuantity: "",
      prodAmount: "",
      prodImg: "",
      prodCategory: "Vegan",
    };
  },
  methods: {
    openModal() {
      if (this.selectedProduct) {
        // Set values when the modal is opened
        this.prodID = this.selectedProduct.prodID;
        this.prodName = this.selectedProduct.prodName;
        this.prodQuantity = this.selectedProduct.prodQuantity;
        this.prodAmount = this.selectedProduct.prodAmount;
        this.prodImg = this.selectedProduct.prodImg;
        this.prodCategory = this.selectedProduct.prodCategory;
      }
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitInput() {
      const productData = {
        prodID: this.prodID,
        prodName: this.prodName,
        prodQuantity: this.prodQuantity,
        prodAmount: this.prodAmount,
        prodImg: this.prodImg,
        prodCategory: this.prodCategory,
      };
      console.log("Submitted input:", productData);

      // Close the modal
      this.closeModal();
    },
  },
};
</script>

<style scoped>
/* Styles for the modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 15px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>

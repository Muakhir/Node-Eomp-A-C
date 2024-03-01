<template>

    <h1>Admin</h1>
    
    
    <h1 class="pCrud">Product Crud</h1>
    
      <div class="admin">
        <!-- Edit inputs -->
        <div class="inputM">
    
            <input class="info" v-model="prodID" type="text" placeholder="Product ID:" />
            <input class="info" v-model="prodName" type="text" placeholder="Product Name:"/>
            <input class="info" v-model="prodQuantity" type="text" placeholder="Product Quantity:"/>
            <input class="info" v-model="prodAmount" type="text" placeholder="Product Amount:"/>
            <input class="info" v-model="prodImg" type="text" placeholder="Product Image URL:"/>
    
            <p class="cat">Category:</p>
            <select v-model="prodCategory">
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegan">Non-Vegan</option>
            </select>
            <br>
          <button type="button" class="btn btn-primary" @click="registerProduct">Add Product</button>
    
        </div>
            
        <!-- Product Table -->
        <table class="table table-bordered">
          <thead >
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getProducts" :key="item.prodID">
              <td>{{ item.prodID }}</td>
              <td><img :src="item.prodImg" alt="Product Image" ></td>
              <td>{{ item.prodName }}</td>
              <td>{{ item.prodCategory }}</td>
              <td>{{ item.prodQuantity }}</td>
              <td>{{ item.prodAmount }}</td>
              <td>
                <button class="btn1" @click="deleteProduct(item.prodID)">Delete</button>
                <button class="btn2" @click="editProduct(item)">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
    
      <!-- MODAL -->
      <!-- <ProductModal
  :isModalOpen="isProductModalOpen"
  @closeModal="closeProductModal"
  @submitInput="submitProductInput"
/> -->

    
        <h1 class="pCrud">User Crud</h1>
    
        <div class="users">
    
        <div class="inputM">
        
        <input class="info" v-model="userID" type="text" placeholder="User ID:"/>
        <input class="info" v-model="firstName" type="text" placeholder="User Name:"/>
        <input class="info" v-model="lastName" type="text" placeholder="User Surname:"/>
        <input class="info" v-model="userAge" type="text" placeholder="User Age:"/>
        <!-- <input class="info" v-model="gender" type="text" placeholder="User Gender:"/> -->
        <input class="info" v-model="emailAdd" type="text" placeholder="Email address:"/>
        <input class="info" v-model="userPwd" type="text" placeholder="Password:"/>

        <p class="cat">Gender:</p>
        <select v-model="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        </select>
        <br>

        <p class="cat">Role:</p>
        <select v-model="userRole">
        <option value="User">User</option>
        <option value="Admin">Administrator</option>
        </select>
        <br>


    <button type="button" class="btn btn-primary" @click="registerUser">Add User</button>

    
    </div>


    <div class="userTableContainer">
          <!-- User Table -->
          <table class="userTable table table-bordered">
          <thead >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getUsers" :key="item.userID">
              <td>{{ item.userID }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.userAge }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.emailAdd }}</td>
              <td>{{ item.userRole }}</td>
              <!-- <td>{{ item.userPwd }}</td> -->
              <td>
                <button class="btn1" @click="deleteUser(item.userID)">Delete</button>
                <button class="btn2" @click="updateUser(item)">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>


        </div>


    </div>
   
    
      </div>
    </template>
    
<script>
import ProductModal from '../components/ProductModal.vue';
import Swal from 'sweetalert2';


export default {

components:{
  ProductModal
},
data(){
  return{
    isProductModalOpen: false,
    selectedProduct: {},
    prodID: '',
    prodName: '',
    prodImg: '',
    prodCategory: '',
    prodQuantity: '',
    prodAmount: '',
    userID: '',
    firstName: '',
    lastName: '', 
    userAge: '',
    gender: '',
    emailAdd: '',
    userRole: '',
    userPwd:''
}
  },
computed: {
// Products
  getProducts() {
    return this.$store.state.products;
},

    // Users
    getUsers(){
    return this.$store.state.users
    },
    registerUser() {
    this.$store.dispatch('registerUser', {
    userID: this.userID,
    firstName: this.firstName,
    lastName: this.lastName, 
    userAge: this.userAge,
    gender: this.gender,
    emailAdd: this.emailAdd,
    userRole: this.userRole,
    userPwd: this.userPwd
          
}).then(() => {
    Swal.fire('User Added!', 'The user has been added.', 'success')
    }).catch((error) => {
      console.error('Error adding user:', error);
      Swal.fire('Error', 'There was an error adding the user. Please try again.', 'error');
    });
  },      
},
  mounted() {
    this.$store.dispatch('getProducts'),
    this.$store.dispatch('getUsers') 
},
methods: {      
  // Product methods
  deleteProduct(prodID) {
  Swal.fire({
  title: 'Are you sure?',
  text: 'You will not be able to recover this product!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
  this.$store.dispatch('deleteProduct', prodID);
  Swal.fire('Deleted!', 'The product has been deleted.', 'success')
  .then(() => {
   this.refreshProductsTable();
  })
}
}).catch((error) => {
  console.error('Error deleting product:', error);
  Swal.fire('Error', 'There was an error deleting the product. Please try again.', 'error');
});
},
  updateProduct(product){
  // Set the form fields with the values of the selected product
  this.prodID = product.prodID;
  this.prodName = product.prodName;
  this.prodImg = product.prodImg;
  this.prodCategory = product.prodCategory;
  this.prodQuantity = product.prodQuantity;
  this.prodAmount = product.prodAmount;
  this.$store.dispatch('updateProduct', product)
},

  // User methods
  deleteUser(userID) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this user!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    this.$store.dispatch('deleteUser', userID)
    .then(() => {
    Swal.fire('Deleted!', 'The user has been deleted.', 'success')
    .then(() => {
    // Call a method to refresh the users table
    this.refreshUsersTable();
    });
    })
    .catch((error) => {
    console.error('Error deleting User:', error);
    Swal.fire('Error', 'There was an error deleting the User. Please try again.', 'error');
});
}
  });
},
// Add a new method to refresh the users table
refreshUsersTable() {
  this.$store.dispatch('getUsers');
},
// Add/Edit product methods
  editProduct(product) {
  // Set the selectedProduct and open the modal
  console.log("Editing product:", product);
  this.selectedProduct = { ...product };
  this.isProductModalOpen = true;
},
  closeProductModal() {
    // Close the modal and reset the selectedProduct
    this.isProductModalOpen = false;
    this.selectedProduct = null;
  },
    submitProductInput(updatedProduct) {
    // Handle the submitted input, e.g., update the product in the store
    this.$store.dispatch('updateProduct', updatedProduct);

    // Close the modal
    this.closeProductModal();
  },
  registerProduct(){
    let product ={
    prodID: this.prodID,
    prodName: this.prodName,
    prodImg: this.prodImg,
    prodCategory: this.prodCategory,
    prodQuantity: this.prodQuantity,
    prodAmount: this.prodAmount
}
  this.$store.dispatch('registerProduct', product)
  .then(() => {
  Swal.fire('Product Added!', 'The product has been added.', 'success')
  .then(() => {
        // Call a method to refresh the products table
        this.refreshProductsTable()
    });
  })
  .catch((error) => {
    console.error('Error adding product:', error);
    Swal.fire('Error', 'There was an error adding the product. Please try again.', 'error');
});
},
// Method to refresh the products table
refreshProductsTable() {
  this.$store.dispatch('getProducts');
},
}
};

</script>
    
<style scoped>
/* Product and User Crud styling */
h1 {
  text-align: center;
  padding-top: 50px;
  color: black;
}    
.pCrud {
  text-align: center;
  padding-bottom: 50px;
  color: black;
}
    
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
    
.cat {
  font-size: 20px;
  margin-bottom: 5px;
  color: black;
}
    
.table {
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
    
th, td {
  border: 1px solid #ddd;
  padding: 18px;
  text-align: left;
}
    
th {
  background-color: #f2f2f2;
}
    
img {
  max-width: 150px;
  height: auto;
}
    
input, select {
  width: 40%;
  padding: 15px;
  margin-bottom: 30px;
  margin-right: 20px;
  border-radius: 15px;
  border: 2px solid black;
  background-color: transparent;
  transition: 0.5s;
}
input::placeholder,
select::placeholder {
  color: black;
  font-size: 18px;
  font-weight: 500;
}
    
input:hover, select:hover {
  background-color: white;
  transform: scale(1.05);
  transition: 0.5s;
}
    
.btn-primary  {
  width: 40%;
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  margin: 15px 0;
  font-size: 20px;
  transition: 0.5s;
  margin-bottom: 50px;
}
.btn1 {
  width: 100%;
  background-color: rgb(236, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  margin: 15px 0;
  font-size: 20px;
  transition: 0.5s;
}
.btn2{
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
}
    
.btn-primary:hover, .btn2:hover {
  transition: 0.5s;
  transform: scale(1.1);
  color: white;
  background-color: #215e2a;
}
.btn1:hover{
  transition: 0.5s;
  transform: scale(1.1);
  color: white;
  background-color: rgb(129, 20, 20);
}
    
/* USER CRUD STYLING */
.userTable {
  width: 100%;
  margin-left: 0;
  margin-bottom: 50px;
  
}

.userTableContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive styles */
@media screen and (max-width: 720px) {
  input, select, .btn-primary, .btn1, .btn2 {
     width: 100%;
  }
  }
   
@media screen and (max-width: 300px) {
  input, select, .btn-primary, .btn1, .btn2 {
    width: 100%;
  }
    
.userTable {
    margin-left: 0;
  }
}
</style>
    
    
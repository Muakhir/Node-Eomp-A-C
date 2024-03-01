<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateUserModal">
      Edit
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @show.bs.modal="updateModalData">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="User ID" v-model="payload.userID">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="First Name" v-model="payload.firstName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="Last Name" v-model="payload.lastName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="Age" v-model="payload.userAge">
              </div>
              <div class="mb-3 text-center">
                <label for="gender" class="form-label">Gender</label>
                <select id="gender" class="form-select w-50 mx-auto" required v-model="payload.gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="mb-3 text-center">
                <label for="userRole" class="form-label">Role</label>
                <select id="userRole" class="form-select w-50 mx-auto" required v-model="payload.userRole">
                  <option value="User">User</option>
                  <option value="Administrator">Administrator</option>
                </select>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.emailAdd">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-success">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateUser',
    data() {
      return {
        payload: {
          userID: '',
          firstName: '',
          lastName: '',
          userRole: '',
          gender: '',
          userAge: '',
          emailAdd:''
        }
      }
    },
    methods: {
      async updateUser() {
    try {
      this.$store.dispatch('updateUser', { id: this.payload.userID, data: this.payload } );
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  },
  updateModalData() {
      // Check if the user prop is provided
      if (this.user) {
        // Update the payload data with the user details
        this.payload = {
          userID: this.user.userID,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          userAge: this.user.userAge,
          emailAdd: this.user.emailAdd,
          userRole: this.user.userRole,
          gender: this.user.gender
        };
      }
    }
  
    },
    
  }
  </script>
  
  <style scoped>
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
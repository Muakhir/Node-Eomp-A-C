<template>
    <div class="users">
      <!-- Button to trigger the modal -->
      <button type="button" class="btn btn-primary" @click="openModal">Add User</button>
  
      <!-- Modal -->
      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userModalLabel">Add User</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Modal content (your form) -->
              <div class="inputM">
                <input class="info" v-model="userID" type="text" placeholder="User ID:"/>
                <input class="info" v-model="firstName" type="text" placeholder="User Name:"/>
                <input class="info" v-model="lastName" type="text" placeholder="User Surname:"/>
                <input class="info" v-model="userAge" type="text" placeholder="User Age:"/>
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
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="registerUser">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userID: '',
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        emailAdd: '',
        userPwd: '',
        userRole: '',
      };
    },
    methods: {
      openModal() {
        // Trigger the modal by ID
        var myModal = new bootstrap.Modal(document.getElementById('userModal'), {
          keyboard: false
        });
        myModal.show();
      },
        registerUser(){
          this.$store.dispatch('registerUser', this.$data)

        // Close the modal after registration
        var myModal = new bootstrap.Modal(document.getElementById('userModal'));
        myModal.hide();
      },
    },
  };
  </script>
  
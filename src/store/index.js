import { createStore } from 'vuex';
import axios from 'axios';

// axios.defaults.withCredentials = true;

const baseURL = 'https://node-eomp-a-c.onrender.com';



export default createStore({
  state: {
    products: [],
    users: []
  },
  getters: {

  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users){
      state.users = users;
    }
  },
  actions: {
    // CRUD FOR PRODUCTS
    // function to get products
    async getProducts({ commit }) {
      try {
        let { data } = await axios.get(baseURL + '/products');
        commit('setProducts', data.results);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    },
    // function to deleteProduct
    async deleteProduct({ commit }, id) {
      try {
        await axios.delete(baseURL  + '/products/' + id + '/deleteProduct');
      } catch (error) {
        console.error('Error deleting Product:', error);
      }
      // window.location.reload()
    },
    // function to update products
    async updateProduct({ commit }, update) {
      try {
        // Make PATCH request to update product
        await axios.patch(baseURL + '/products/' + update.prodID +"/updateProduct", update);
        // Fetch updated products after successful update
        const { data } = await axios.get(baseURL + '/products');
        // Commit mutation to update the state with the new product data
        // commit('setProducts', data.results);
      } catch (error) {
        console.error('Error updating Product:', error);
      }
      window.location.reload()
    },
    // add product code
    async registerProduct({ commit }, newProduct) {
      try {
        let {data} = await axios.post(baseURL + '/products/addProduct', newProduct);
        commit('setProducts', data);
      } catch (error) {
        console.error('Error adding Product:', error);
      }
      // window.location.reload()
    },

    // CRUD FOR USERS
    async getUsers({ commit }) {
      try {
        let { data } = await axios.get(baseURL + '/users');
        commit('setUsers', data.results);
      } catch (error) {
        console.error('Error getting users:', error);
      }
    },
    // this deletes users
    async deleteUser({ commit }, id) {
      try {
        await axios.delete(baseURL  + '/users/' + id + '/deleteUser');
      } catch (error) {
        console.error('Error deleting User:', error);
      }
      // window.location.reload()
    },
    // this function updates/edits users
    async updateUser({ commit, state }, update) {
      try {
        // Make PATCH request to update user
        await axios.patch(baseURL + '/users/' + update.userID +"/updateUser", update);
        // Fetch updated users after it update
        const { data } = await axios.get(baseURL + '/users');
        // Commit mutation to update the state with the new users data
        // commit('setUsers', data.results);
      } catch (error) {
        console.error('Error updating Users:', error);
      }
      window.location.reload()
    },
    // this is used to add users
    async registerUser({ commit }, newUser) {
      try {
        let {data} = await axios.post(baseURL + '/users/register', newUser);
        commit('setUsers', data.results);
      } catch (error) {
        console.error('Error adding User:', error);
      }
      // window.location.reload()
    }, 
  },
  modules: {}
});
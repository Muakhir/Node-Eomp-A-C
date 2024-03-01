<template>

  
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
    <router-link to="/" class="navbar-brand">
      <span class="logo">
        Kittleys
      </span>
      <i class="fa fa-circle animated-dot" style="font-size:9px"></i>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" active-class="active-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" active-class="active-link">Admin</router-link>
        </li>
      </ul>

      <!-- CONTACT US button -->
      <router-link to="/contact" class="btn-primary" active-class="active-link">Contact Us</router-link>
    </div>
  </nav>
</template>

  
<script>
  export default {
  }

</script>
    
<style scoped>
  
/* Custom styling for the navbar */
.navbar {
  background-color: transparent !important;
  padding-top: 20px;
}
    
.logo {
  margin-left: 50px;
  font-size: 40px !important;
}
    
.navbar-brand .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: black !important;
}
.fa{
  font-size: 50px;
  color: #05FF00;
  border-radius: 50px;
  margin-right: 25px;
}
i{
  margin-left: 8px;
}
.navbar-nav {
  text-align: center; 
}
    
.navbar-nav .nav-item {
  margin-right: 15px; 
}

.navbar-nav .nav-item .nav-link {
  color: black !important;
}
 
/* Style for the CONTACT US button */
.btn-primary {
  background-color: #87EF97;
  padding: 13px;
  color: rgb(0, 0, 0);
  border: none;
  margin-right: 80px;
  border-radius: 15px;
  font-weight: 500;
  text-decoration: none;
  font-size: 18px;
  transition: 0.5s;
}
.btn-primary:hover{
  background-color: #2c6935;
  color: white;
  transform: scale(1.1);
  transition: 0.5s;
}
.navbar-toggler-icon {
  background-color: black;
  border: 2px solid black;
}

/* Active styling for the hamburger icon */
.navbar-toggler-icon:hover {
  background-color: #42b983;
}

li{
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
    
/* Hover effect for navbar links */
  .navbar-nav .nav-item .nav-link:hover {
  color: #42b983 !important;
  transform: scale(1.1);
}
  
/* Active styling for navbar links */
  .navbar-nav .nav-item .active-link {
  color: #42b983 !important;
  transform: scale(1.1);
}
.navbar-nav .nav-item .nav-link,
.navbar-nav .nav-item .active-link {
  transition: color 0.3s, transform 0.3s;
}
  
@media screen and (max-width: 600px) {

/* Style for the CONTACT US button */
  .btn-primary {
  background-color: transparent;
  /* padding: 13px; */
  color: rgb(0, 0, 0);
  border: none;
  margin-right: 10px;
  border-radius: 15px;
  font-weight: 500;
  text-decoration: none;
  font-size: 20px;
  margin-top: 80px !important;
}
  .btn-primary:hover{
  color: #42b983 !important;
  transform: scale(1.1);
  background: transparent;
  transition: color 0.3s, transform 0.3s;
}

}
/* Keyframe animation for the dot */
@keyframes expandDot {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

/* Apply animation to the dot */
.animated-dot {
  animation: expandDot 2s infinite; /* You can adjust the duration and iteration count */
}
</style>
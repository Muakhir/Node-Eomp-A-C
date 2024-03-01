<template>
  <div class="container">

    <div class="text">
      <h3>Meal kits, Ready made for you</h3>
      <h1>Eat Healthy</h1>
      <h1>Live Healthy</h1>
      <h1>Today</h1>

      <div class="buttons">

        <router-link to="/products" >
          <button class="meal-kits-btn">Meal Kits</button>
        </router-link>

        <router-link to="/about">
          <button class="get-started-btn">Learn More</button>
        </router-link>
      </div>
    </div>

    <div class="img">
      <img class="food1" src="https://i.imgur.com/fidHou9.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  margin-top: -50px;
}

.text {
  text-align: center; 
  margin-right: 20px; 
}

h3 {
  color: #4FB860;
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 30px; 
}

h1 {
  color: black;
  font-weight: 600;
  font-size: 50px;
  margin: 0; 
}

.buttons {
  display: flex;
  justify-content: center; 
  margin-top: 40px; 
}

button {
  margin: 0 10px; 
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

.get-started-btn {
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  padding: 20px;
  transition: 0.5s;
}
.get-started-btn:hover{
  transform: scale(1.1);
  transition: 0.5s;
}

.meal-kits-btn {
  background-color: #EAF476;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  padding: 20px;
  transition: 0.5s;
}

.meal-kits-btn:hover{
  transform: scale(1.1);
  transition: 0.5s;
}

.food1 {
  max-width: 70%; 
  height: auto;
}

.img {
  text-align: center; 
  padding-top: 20px;
  margin-top: 20px; 
}
/* Responsiveness for mobile devices */
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column; 
    text-align: center; 
    margin-top: 30px;
  }

  .text {
    margin-right: 0; 
  }

  .buttons {
    flex-direction: column; 
    margin-top: 10px; 
  }

  .buttons button {
    margin: 10px 0; 
    margin-left: 20px;
    margin-right: 20px;
  }

  .img {
    order: 2; 
    margin-top: 20px; 
  }
  
  h3 {
    color: #4FB860;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 30px; 
  }

  h1 {
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin: 0; 
  }
}
</style>

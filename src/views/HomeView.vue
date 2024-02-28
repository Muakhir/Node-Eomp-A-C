<template>
  <div class="container">

    <div class="text">
      <h3>Meal kits, Ready made for you</h3>
      <h1>Eat Healthy</h1>
      <h1>Live Healthy</h1>
      <h1>Today</h1>

      <div class="buttons">
        <button class="get-started-btn">Get Started</button>
        <button class="meal-kits-btn">Meal Kits</button>
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
  height: 100vh; /* Use the full viewport height */
  margin-top: -50px;
}

.text {
  text-align: center; /* Center the text */
  margin-right: 20px; /* Add spacing between text and image */
}

h3 {
  color: #4FB860;
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 30px; /* Adjust the margin-bottom */
}

h1 {
  color: black;
  font-weight: 600;
  font-size: 50px;
  margin: 0; /* Remove default margin for h1 */
}

.buttons {
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  margin-top: 40px; /* Adjust the margin-top */
}

button {
  margin: 0 10px; /* Add some horizontal margin to buttons */
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

.get-started-btn {
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 50px;
  font-weight: 500;
}

.meal-kits-btn {
  background-color: #EAF476;
  color: black;
  border: none;
  border-radius: 50px;
  font-weight: 500;
}

.food1 {
  max-width: 70%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
}

.img {
  text-align: center; /* Center the image horizontally */
  padding-top: 20px;
  margin-top: 20px; /* Add some margin to the top */
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column; /* Stack items vertically on small screens */
    text-align: center; /* Center text on small screens */
    margin-top: 30px
  }

  .text {
    margin-right: 0; /* Remove margin for text on small screens */
  }

  .buttons {
    flex-direction: column; /* Stack buttons vertically on small screens */
    margin-top: 10px; /* Adjust margin for buttons on small screens */
  }

  .buttons button {
    margin: 10px 0; /* Add spacing between buttons on smaller screens */
    margin-left: 20px;
    margin-right: 20px;
  }

  .img {
    order: 2; /* Move the image to the top on small screens */
    margin-top: 20px; /* Add margin to the top of the image on small screens */
  }
  
  h3 {
    color: #4FB860;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 30px; /* Adjust the margin-bottom */
  }

  h1 {
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin: 0; /* Remove default margin for h1 */
  }
}
</style>

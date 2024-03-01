<template>
  <div class="container">
    <div class="content">
      <div class="about">
        <h3 class="Ab">About Kittleys</h3>
        <h3 class="head">Care About Nutrition For your Health</h3>
        <p class="texty">
          At Kittleys, we're dedicated to making healthy eating easy and accessible for all. We offer customizable food kits with fresh,
          high-quality ingredients to suit various dietary needs and preferences.
        </p>
        <p class="texty2">
          Our team is passionate about food and community, and we partner with local organizations to promote wellness and sustainability.
        </p>
        <p class="texty2">
          Join us in our mission to make healthy eating delicious and fun!
        </p>
      </div>
    </div>
    <div class="food-image">
      <img src="https://i.imgur.com/LniFTIm.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.Ab {
  color: #4FB860;
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px; /* Adjusted margin */
}

.head {
  color: black;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 20px; /* Adjusted margin */
}

.texty,
.texty2 {
  color: black;
  font-weight: 500;
  font-size: 18px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  margin-top: -30px;
}

.content {
  max-width: 600px;
}

.about {
  padding: 20px;
}

.food-image {
  max-width: 600px;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 749px) {
  .container {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 250px;
  }

  .about {
    text-align: center; /* Center text for mobile view */
  }

  .food-image {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>

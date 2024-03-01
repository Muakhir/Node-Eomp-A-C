<template>
  <div>
    <h1>Contact Us</h1>

    <div class="container">

      <div class="content">

        <div class="text">
          <p>
            At Kittleys, we're always excited to hear from our customers and community. Whether you have a question about our products, need help with an order, or simply want to share your feedback, we're here to listen and assist.
          </p>
          <p>
            You can reach us through the following channels:
          </p>
          <p>
            Email: info@Kittleys.com
            <br>
            Phone: (061) 027-8132
          </p>
          <p>
            We strive to provide exceptional customer service and ensure that your experience with Kittleys is positive and fulfilling. Don't hesitate to get in touch with us - we look forward to hearing from you!
          </p>
        </div>

      </div>

      <div class="form-container">
        <form action="https://formspree.io/f/mgegykyq" method="POST" class="contact-form"  ref="form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" >
          </div>
          <div class="form-group">
            <label for="surname">Surname:</label>
            <input type="text" id="surname" name="surname" placeholder="Enter your surname" >
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" >
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder="Type your message here"></textarea>
          </div>
          <button type="submit" @click="validateForm">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    validateForm() {
      // this is the validation logic 
      const name = this.$refs.form.querySelector('#name').value;
      const surname = this.$refs.form.querySelector('#surname').value;
      const email = this.$refs.form.querySelector('#email').value;
      const message = this.$refs.form.querySelector('#message').value;

      // Check if any field is empty
      if (!name || !surname || !email || !message) {
        alert('Please fill in all fields');
        return;
      }

      this.submitForm();
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
}

.content {
  text-align: left;
}

.text {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  color: #000;
}

p {
  font-size: 18px;
  font-weight: 500;
}

.form-container {
  text-align: left;
  margin: 20px;
  margin-top: 50px !important;
}

h1 {
  text-align: center;
  color: black;
  font-weight: 500;
  font-size: 40px;
  margin: 20px;
}

.contact-form {
  border: 8px solid transparent;
  padding: 50px;
  border-radius: 40px;
  animation: borderAnimation 2s infinite alternate; 
}

@keyframes borderAnimation {
  0% {
    border-color: #ecdd00;
  }
  100% {
    border-color: #2eb94c;
  }
}

form {
  max-width: 100%;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  background: transparent;
  color: black;
  box-sizing: border-box;
}

::placeholder {
  color: black;
  font-weight: 500;
  font-size: 16px;
}

button {
  background-color: #4FB860;
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #215e2a;
  color: white;
  transition: background-color 0.3s ease;
}

/* Media Queries for Responsive Design */
@media screen and (max-width: 720px) {
  input,
  textarea {
    width: 100%;
  }
}

@media screen and (max-width: 300px) {
  .form-group {
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    margin-left: 0;
    margin-right: 0;
  }

  button {
    width: 100%;
    padding: 10px 20px;
  }

  .container {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>

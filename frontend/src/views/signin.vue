<script setup>

import axios from 'axios'
import { ref } from 'vue';

import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const message = ref('')

async function submitForm() {

  if (validarEmail(email.value) && password.value) {
    const data = {
      "email": email.value,
      "password": password.value
    };
    try {

      axios.post('http://localhost:3033/api/users/signin', data
      )
        .then(response => {


          console.log("estatus: " + response.status)
          // redirect to the home page
          if (response.status === 200) {
            localStorage.setItem("session", JSON.stringify(response.data));
            router.push('/')

          } else {
            message.value = "Unautirized... Please check your email and password"
          }
        })
    }
    catch (error) {
      message.value = "Please check your email and password"
    };

  }
}
const validarEmail = (email) => {
  // Expresión regular para validar el formato del email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const result = regex.test(email)

  if (result) {
    message.value = "Please check yout email an password"
  } else {
    message.value = "Please check yout email an password"

  }
  return result
}






</script>

<template>
  <div class="container">
    <img src="../assets/img/icon-above-font.svg" alt="" width="500" height="600">


    <form @submit.prevent="submitForm">
      <label for="username">Email:</label>
      <input type="email" v-model="email" placeholder="Please enter your email address">

      <label for="password">Password:</label>
      <input type="password" v-model="password" placeholder="Enter your password" @change="validarEmail">
      <span>{{ message }}</span>
      <button @click="submitForm">Sign In</button>

      <div class="register-link">
        ¿Do not have an account?
        <router-link :to="{ name: 'signup' }">SignUp</router-link>

      </div>
    </form>
  </div>
</template>

<style scoped>
.container img {
  width: 350px;
  height: 350px;
}

.container {
  display: block;
  max-width: 380px;
  height: 80vh;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.container h2 {
  text-align: center;
}

.container label {
  display: block;
  margin-bottom: 5px;
}

.container input[type="email"],
.container input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.container button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.container button:hover {
  background-color: #45a049;
}

.container .register-link {
  text-align: center;
}

span {
  color: red
}
</style>

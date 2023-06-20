<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onBeforeMount } from 'vue';
import UserService from '../services/UserService';



const router = useRouter()
const service = new UserService()
const user = service.getUser()





onBeforeMount(async () => {

    const storage = JSON.parse(localStorage.getItem("session"))
    service.fetchUserById(storage.userid)
})


</script>
<template>
    <img :src="user.imageUrl" alt="">
    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Nombre :</label>
            <input type="text" id="name" v-model="user.name" required>
        </div>
        <div>
            <label for=" lastname">last name:</label>
            <input type="text" id="lastname" v-model="user.lastName" required>
        </div>
        <div>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="user.email" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="user.password" required>
        </div>
        <div>
            <label for="image">Avatar:</label>
            <input type="file" name="file" accept="image/*" @change="handleFileUpload">
        </div>
        <div>
            <label for="bio">Bio:</label>
            <input type="text" id="bio" v-model="user.bio">
        </div>
        <button type="submit">Update</button> <button type="submit">Close account</button>
    </form>

    <!-- <p>{{ user.content }}</p>
        <img :src="`${user.imageUrl}`" width="400" height="400" />
        <p>{{ user.createdAt }}</p> --> -->

    <!-- </div> -->
</template>
<style scoped>
img {

    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
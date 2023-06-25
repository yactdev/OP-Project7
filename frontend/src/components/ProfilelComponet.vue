<script setup>
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onBeforeMount, ref } from 'vue';
import UserService from '../services/UserService';





const router = useRouter()
const service = new UserService()
const user = service.getUser()

const deleteUser = async () => {



    try {
        const storage = await JSON.parse(localStorage.getItem('session'));

        const headers = {
            headers: {
                Accept: 'aplication/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${storage.token} `,
            },
        };
        await
            axios.delete(`http://localhost:3033/api/users/delete/${storage.userid}`, headers)

                .then(() => {
                    //   this.posts.vareturnlue = response.data;
                    localStorage.removeItem("session");
                    console.log("User deleted")
                    router.push("/")
                });
    } catch (error) {
        console.log(error);
    }

}

const updateUser = async () => {
    alert("User Updated")
}

let name = ref('')
let lastName = ref('')
let email = ref('')
let password = ref('')
let bio = ref('')

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
        <button type="submit" @click="updateUser">Update
        </button>
        <button type="submit" @click="deleteUser">Delete account
        </button>
    </form>
    <router-link :to="{ name: 'home' }">back</router-link>
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
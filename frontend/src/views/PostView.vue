<script setup>
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue"
import axios from 'axios';

let post = ref([])
const route = useRoute()
const { id } = route.params
console.log(id)
// const allPost = []
const auth = JSON.parse(localStorage.getItem("session"))
console.log("token: " + auth.userid)
const data = { "userid": auth.userid }
const headers = { headers: { "content-type": "application/json", "Authorization": auth.token } };
const postData = async () => {
    try {
        const res = await axios.get("http://localhost:3033/api/post/" + id, headers)
        console.log("response", res.data)
        post.value = res.data

        // post.value = data.find(p => p.id == id)
        // console.log(allPost)


    }
    catch (err) {
        // Handle errors
        console.log(err);
    }
}

postData()








</script>
<template>
    <div>

    </div>
    <h1>POST</h1>

    <div class="card">




        <!-- <a>{{ post.User.email }} </a> -->
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>

        <img :src="`${post.imageUrl}`" width="400" height="400" />
        <p>{{ post.createdAt }}</p>
    </div>
</template>
<style scoped>
template {
    display: flex;

    background-color: rgb(60, 60, 139);
    ;

}

.card {
    padding: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid black;
    width: 80%;
    align-items: center;
    margin: 20px;
    align-content: center;

}

h3 {
    display: flex;
    justify-content: center;
}

img {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
}
</style>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter()
const posts = ref([])
// localhost:5001/api/post
// const allPost = null;
// export default {
//   data() {
//     return {
//       posts: [],
//       error: null
//     };
//   },

//   created() {
//     const headers = { "Content-Type": "application/json", "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIzOGM0M2ZkNC00MTNmLTRiM2YtYTM2Mi1lMzdmN2U5YWNhN2MiLCJpYXQiOjE2ODYxOTY2MjcsImV4cCI6MTY4NjI4MzAyN30.XTze7gtgBjDqZue6mEBMpG1rKZTzSyNNSB7MvwQsY1w" };
//     axios.get('localhost:5001/api/post', { headers })
//       .then(response => {
//         console.table(response.data)
//         this.posts = response.data;
//       })
//       .catch(error => {
//         this.error = error;
//       });
//   }
// }

const getData = async () => {
  // Simple GET request using axios
  const headers = { headers: { "content-type": "application/json", "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIyNTQ0NTY4Ny1mMTNlLTQxYTktOTZjYy1kMDE0NmU0Y2I1NGMiLCJpYXQiOjE2ODY0NTk3NTMsImV4cCI6MTY4NjU0NjE1M30.izQuWw25PRhOwceUErL1ACNzZIdhfbsM8ESks3Lt6Ko" } };
  axios.get("http://localhost:3033/api/post", headers)

    .then(response => { posts.value = response.data; localStorage.setItem("data", JSON.stringify(response.data)) })



}
getData()
console.log(getData)

</script>


<template>
  <div v-for="post in posts" :key="post.id" class="card" @click="router.push(`/post/${post.id}`)">

    <a>{{ post.User.email }} </a>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <img :src="`${post.imageUrl}`" width="400" height="400" />
    <p>{{ post.createdAt }}</p>
  </div>
</template>

    
<style scoped>
template {
  text-decoration: none;
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
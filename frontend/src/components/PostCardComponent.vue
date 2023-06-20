<template>
    <div v-for="post in posts" :key="post.id" class="card" @click="router.push(`/post/${post.id}`)">

        <div class="post-user">

            <img class="avatar" :src="`${post.User.imageUrl}`" width="50" height="50" />
            <p> {{ post.User.name }}</p>
            <p> {{ post.User.lastName }}</p>

        </div>
        <div class="post-list">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <img :src="`${post.imageUrl}`" width="400" height="400" />
            <p>{{ post.createdAt }}</p>
        </div>


    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import PostService from '../services/PostService';
import { useRouter } from 'vue-router';



const router = useRouter()
const service = new PostService()
const posts = service.getPosts()

onMounted(() => {

    service.fetchAllPosts()
})

</script>

<style  scoped>
template {
    text-decoration: none;
    display: flex;
    justify-content: center;
    background-color: rgb(60, 60, 139);
    ;

}

.card {
    padding: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-style: solid black;



    align-content: center;

}

h3 {
    display: flex;
    justify-content: center;
}

.avatar {
    border-radius: 50%;
    object-fit: fill;
}



.post-list {
    gap: 10px;
    display: flex;
    justify-content: left;

}

.post-list img {

    object-fit: cover;
    overflow: hidden;

    align-self: left;
}
</style>
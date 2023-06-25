<template>
    <div class="post-list">

        <PostView v-for="post in posts" :key="post.id" class="card" title="post.title" content="post.content"
            imageUrl="post.imageUrl" createdAt="post.createAt" />
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import PostService from '../services/PostService';
import { useRouter } from 'vue-router';
import PostView from "../views/ProfileView.vue"



// const activeClass = ref('exist')

const storage = localStorage.getItem('session');
const router = useRouter()
const service = new PostService()
const posts = service.getPosts()

console.log(posts)

onBeforeMount(async () => {

    service.fetchAllPosts()

})

</script>

<style  scoped>
.read {
    background-color: rgb(178, 178, 192);
}

.post-user {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

}

.post-user li {
    list-style: none;
}

.post-user li img {

    border-radius: 50%;
}

.card {
    width: 100%;

    padding: 20px;

    box-shadow: -4px 10px 39px -4px rgba(0, 0, 0, 0.63);
    -webkit-box-shadow: -4px 10px 39px -4px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: -4px 10px 39px -4px rgba(0, 0, 0, 0.63);
}

.card li {
    list-style: none;
}

.post-list {
    width: 100%;
}

.post-list img {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 250px;
    max-height: 250px;

}
</style>
<template>
    <div class="post-list">
        <!-- 
        <div v-for="post in posts" :key="post.id" class="card" @click="router.push(`/post/${post.id}`)">
            <div :class="{ 'read': exist }">
                <div class="post-user">

                    <li> <img class="avatar" :src="`${post.User.imageUrl}`" width="50" height="50" /></li>
                    <li> {{ post.User.name }} {{ post.User.lastName }}</li>


                </div>
                <div class="post-list">
                    <li>
                        <h2>{{ post.title }}</h2>
                    </li>
                    <li>
                        <p>{{ post.content }}</p>
                    </li>
                    <li> <img :src="`${post.imageUrl}`" width="400" height="400" /></li>
                    <li>{{ post.createdAt }}</li>
                    <li>Read by {{ post.readBy }}</li>
                </div>
            </div>
        </div> -->
        <PostDetail :class="{ 'read': readBy }" v-for="post in posts" :key="post.id" class="card" :title="post.title"
            @click="router.push(`/post/${post.id}`)" :content="post.content" :imageUrl="post.imageUrl"
            :createdAt="post.createdAt" :user="post.User.name" :userImage="`${post.User.imageUrl}`"
            :lastName="post.User.lastName" :readby="post.readBy" />
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, computed } from 'vue';

import PostService from '../services/PostService';
import { useRouter } from 'vue-router';
import PostDetail from './PostDetail.vue';

const readBy = true

// const activeClass = ref('exist')

const storage = localStorage.getItem('session');
const router = useRouter()
const service = new PostService()
const posts = service.getPosts()


onBeforeMount(async () => {

    service.fetchAllPosts()

})

</script>

<style  >
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

li {
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

.read {
    background-color: rgb(178, 178, 192);
}
</style>
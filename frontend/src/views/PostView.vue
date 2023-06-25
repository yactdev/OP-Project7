<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted, ref, onBeforeMount, defineProps, defineEmits } from 'vue';
import PostService from '../services/PostService';
import PostDetail from '../components/PostDetail.vue';


const service = new PostService()
const posts = service.getPost()

console.log("el post" + posts)

onMounted(async () => {
    const route = useRoute()
    let elm = route.params.id
    service.readBy(elm)
    service.fetchPostById(elm)
})


</script>
<template>
    <div class="post-container">
        <div>
            <h3>{{ posts.title }}</h3>
            <p>{{ posts.content }}</p>
            <img :src="`${posts.imageUrl}`" width="400" height="400" />
            <p>{{ posts.createdAt }}</p>
            <button>comment</button>
        </div>
    </div>





    <router-link :to="{ name: 'home' }">back</router-link>
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
    display: flex;
    justify-self: left;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
}
</style>
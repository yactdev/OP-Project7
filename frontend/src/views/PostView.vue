<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { onMounted, ref, onBeforeMount, defineProps, defineEmits } from 'vue';
import PostService from '../services/PostService';
import PostDetail from '../components/PostDetail.vue';
import CreateComment from '../components/CommentComponent.vue'

const router = useRouter()
const service = new PostService()
const posts = service.getPost()
const commented = service.getComments()
const comments = ref(false)
console.log("el post" + posts)
const route = useRoute()
let elm = route.params.id

onMounted(async () => {

    service.readBy(elm)
    service.fetchPostById(elm)
    service.fetchComment(elm)
    console.log("aja post" + posts)
})

function processComment(content) {
    let elm = route.params.id
    const storage = JSON.parse(localStorage.getItem('session'));
    const body = JSON.stringify({

        "UserId": storage.userid,
        "PostId": elm,
        "content": content
    })
    service.Comment(body)
    router.push('/')
}


</script>
<template>
    <div class="post-container">
        <div>
            <h3>{{ posts.title }}</h3>
            <p>{{ posts.content }}</p>
            <img :src="`${posts.imageUrl}`" width="300" height="300" />
            <p>{{ posts.createdAt }}</p>
            <button @click="comments = !comments">comment</button>
        </div>
    </div>
    <!-- <div v-for="read in posts.readBy :key"></div>
    <div v-if="'${!posts.readBy}'">
        prueba {{ $ }}
    </div> -->
    <CreateComment v-if="comments" @sendComment="processComment" />

    <div class="comments">
        <div v-for="comment in commented" :key="comment.id" class="comment">

            <div class="user-info">
                <div class="avatar">

                    <img :src="`${comment.User.imageUrl}`" alt="Avatar" width="50" height="50">

                </div>
                <h3>{{ comment.User.name }}</h3>
            </div>

            <p>{{ comment.content }}</p>
        </div>
    </div>
    <router-link :to="{ name: 'home' }">back</router-link>
</template>

<style scoped>
template {
    display: flex;

    background-color: rgb(60, 60, 139);


}

.avatar {
    border-radius: 50%;
    width: 50px;

}

.comments {

    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;



}

.comment {
    padding: 20px;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    margin: 5px
}

.user-info {
    display: flex;
    flex-direction: row;
    gap: 10px
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
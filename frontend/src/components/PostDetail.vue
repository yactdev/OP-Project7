<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted, ref, onBeforeMount, computed } from 'vue';
import PostService from '../services/PostService';

const read = ref(true)
const props = defineProps(
    {
        title: String,
        content: String,
        imageUrl: String,
        createdAt: Date,
        user: String,
        userImage: String,
        lastname: String,
        readBy: Array
    })
// const commentClick = () => {
//     // emit('comment', message.value)
// }


//let message = ref('')
// const service = new PostService()
// const posts = service.getPost()


// onMounted(async () => {
//     const route = useRoute()
//     let elm = route.params.id

//     service.fetchPostById(elm)
//     service.readBy(elm)
//})
const exist = computed(async () => {
    if (!props.readBy) {

        read = false
    } else {


        const storage = JSON.parse(localStorage.getItem('session'))
        const id = storage.userid
        console.log("Este es el ID: " + id)
        console.log(props)
        exist = props.readBy.includes(id)
    }
})

onBeforeMount(async () => {
    exist
})
</script>

<template :title="props.title" :imageUrl="props.imageUrl">
    <div class="post-user">
        <div class="post-container">
            <div :class="{ 'read': { read } }">
                <li> <img class="avatar" :src="`${props.userImage}`" width="50" height="50" /></li>
                <li> {{ props.user }} {{ props.lastName }}</li>
                {{ props.readBy }}


            </div>
            <div>
                <h3>{{ props.title }}</h3>
                <p>{{ props.content }}</p>
                <img :src="`${props.imageUrl}`" width="400" height="400" />
                <p>{{ props.createdAt }}</p>
            </div>

        </div>
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
    align-items: center;
    margin: 20px;


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

}


.read {
    background-color: rgb(178, 178, 192);
}
</style>

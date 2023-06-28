<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted, ref, onBeforeMount, computed, reactive } from 'vue';
import PostService from '../services/PostService';

const props = defineProps(
    {
        title: String,
        content: String,
        imageUrl: String,
        createdAt: String,
        user: String,
        userImage: String,
        lastName: String,
        readby: Array
    })
const commentClick = () => {
    // emit('comment', message.value)
}



const storage = JSON.parse(localStorage.getItem('session'))
const id = storage.userid
const readBy = ref()
console.log("este es el     " + props.readby)
console.log(readBy)
readBy.value = props.readby.includes(id)

onMounted(async () => {

}
)

</script>

<template >
    <div :class="{ 'read': !readBy }">
        <div class="post-user">
            <div>
                <div>
                    <li> <img class="avatar" :src="`${props.userImage}`" width="50" height="50" /></li>
                    <li> {{ props.user }} {{ props.lastName }}</li>



                </div>
                <div>
                    <h3>{{ props.title }}</h3>
                    <p>{{ props.content }}</p>
                    <img :src="`${props.imageUrl}`" width="400" height="400" />
                    <p>{{ props.createdAt }}</p>

                </div>

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

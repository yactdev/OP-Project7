<template>
    <div class="commemt">

        <textarea v-model="comment" name="comment" id="" cols="30" rows="10" placeholder="Leave your comment"></textarea>
        <button @click="handleSend">send</button>

        <h1>sdfsdf{{ comment }}</h1>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const emit = defineEmits(["sendComment"])
const comment = ref('')

const handleSend = () => {

    emit("sendComment", comment.value)
}

// const body =
// {
//     "content": comment.value,
//     "Userid": storage.userid,
//     "PostId": post.id,
// };
// console.log(body)
</script>

<style  scoped></style>
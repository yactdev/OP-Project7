<template>
    <div v-for="comment in posts.Comments" :key="comment.id" class="comment">
        <div>

            <img :src="`${comment.imageUrl}`" alt="Avatar" width="100" height="100">

        </div>
        <p>este {{ comment.content }}</p>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
const emit = defineEmits('comment')
const props = defineProps({ 'title', 'content', })


const commentClick = () => {
    emit('comment', message.value)
}


let message = ref('')
</script>

<style  scoped></style>
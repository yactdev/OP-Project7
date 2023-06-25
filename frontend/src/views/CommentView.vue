<template>
    <div>
        <li>Comment</li>
        <li><input type="text" v-model="comment"></li>
    </div>
    <button type="submit"></button>
</template>

<script setup>
import CommentComponent from '../components/CommentComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const comment = ref('')
const storage = JSON.parse(localStorage.getItem("session"))
const data = {

    UserId: storage.userid,
    comment: comment.value,
    PostId: elm


}

onMounted(async () => {
    const route = useRoute()
    let elm = route.params.id
    service.readBy(elm)
    service.fetchPostById(elm)
})

</script>

<style lang="scss" scoped></style>
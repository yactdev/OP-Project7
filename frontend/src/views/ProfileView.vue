<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onBeforeMount } from 'vue';
import UserService from '../services/UserService';

import ProfileComponet from '../components/ProfilelComponet.vue'

const router = useRouter()
const service = new UserService()
const user = service.getUser()





onBeforeMount(async () => {

    const storage = JSON.parse(localStorage.getItem("session"))
    service.fetchUserById(storage.userid)
})


</script>
<template>
    <ProfileComponet />
</template>
<style scoped>
img {

    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
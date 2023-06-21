<template>
    <CreatePostComponnet />
    <router-link :to="{ name: 'home' }">back</router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import CreatePostComponnet from '../components/CreatePostComponnet.vue';
</script>

<style scoped></style>
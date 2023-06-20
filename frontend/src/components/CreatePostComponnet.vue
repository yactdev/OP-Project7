<template>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nombre :</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="lastname">last name:</label>
                <input type="" id="lastname" v-model="lastname" required>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped></style>
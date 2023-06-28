<script setup>


import ProfileComponet from '../components/ProfilelComponet.vue'




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


.container img {
    width: 350px;

}

.container {
    display: block;
    max-width: 380px;
    height: 80vh;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.container h2 {
    text-align: center;
}

.container label {
    display: block;
    margin-bottom: 5px;
}

.container input[type="email"],
.container input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.container button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}

.container button:hover {
    background-color: #45a049;
}

.container .register-link {
    text-align: center;
}

span {
    color: red
}
</style>
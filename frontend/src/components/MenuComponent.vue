<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router"

const router = useRouter()

let logged = false
function logout() {

    localStorage.removeItem("session")
    router.push('signin')
}

const storage = JSON.parse(localStorage.getItem('session'))
async function check() {

    if (storage.userid) {

        logged = !logged

    }
}


</script>

<template >
    <div @change="check" class="container">
        <img class="logo" src="../assets/img/icon-left-font.svg" alt="logo" width="200" height="60">
        <nav>
            <RouterLink active-class="active" to="/" class="menu"> Home </RouterLink>
            <RouterLink v-if="logged" active-class="active" to="/signin" class="menu"> Sign In </RouterLink>

            <RouterLink v-if="!logged" active-class="active" to="/post" class="menu"> Post </RouterLink>
            <RouterLink v-if="!logged" active-class="active" to="/profile" class="menu"> Profile </RouterLink>
            <button v-if="!logged" @click="logout">Logout</button>

        </nav>
    </div>
</template>
<style>
.menu {
    color: red;
    padding: 10px;
    border-radius: 2px;
}

.active {
    font-weight: bold;
    background-color: red;
    color: white;
}

nav {
    float: right;


}

.logo {
    object-fit: cover;
    overflow: hidden;
}

.linked {
    display: flex;
    background-color: rgb(255, 255, 255);
    color: rgb(3, 3, 3);

    text-decoration: none;

    padding: 10px;
    margin: 5px;

}

linked:hover {
    background-color: rgb(230, 9, 9);
    color: rgb(243, 243, 243);
    text-decoration: none;

}

nav {

    display: flex;

}

.container {


    width: 100%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    height: 70px;
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

}
</style>
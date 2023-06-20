<script setup>
import { RouterView, RouterLink } from "vue-router"
import { ref } from "vue"

</script>

<template>
  <div class="container">
    <img class="logo" src="./assets/img/icon-left-font.svg" alt="logo" width="200" height="60">
    <nav>
      <RouterLink active-class="active" to="/" class="menu"> Home </RouterLink>
      <RouterLink active-class="active" to="/signin" class="menu"> Sign In </RouterLink>
      <RouterLink active-class="active" to="/signup" class="menu"> Sign up </RouterLink>
      <RouterLink active-class="active" to="/post" class="menu"> Post </RouterLink>
      <RouterLink active-class="active" to="/profile" class="menu"> Profile </RouterLink>

    </nav>
  </div>

  <RouterView />
  <!-- <UserProfileCard /> -->
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
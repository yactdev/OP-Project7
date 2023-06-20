<script setup>
import PostCardComponent from '../components/PostCardComponent.vue';
</script>


<template>
  <PostCardComponent />
</template>

    
<style scoped>
template {
  text-decoration: none;
  display: flex;
  justify-content: center;
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
  width: 80%;
  align-items: center;
  margin: 20px;
  align-content: center;

}

h3 {
  display: flex;
  justify-content: center;
}

img {
  display: flex;
  align-content: flex-start;
  object-fit: cover;
  overflow: hidden;

}
</style>
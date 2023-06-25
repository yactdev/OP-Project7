<template>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">
                    <title></title>
                </label>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="title" required>
            </div>
            <div>
                <label for="content">content</label>
                <textarea id="content" v-model="content" required></textarea>
            </div>

            <img id="imagePreview" width="100" height="100">
            <div>
                <label for="image">Avatar:</label>
                <input id="ImageUrlfile" type="file" name="file" accept="image/*" @change="handleImg">
            </div>
            <button @click="createPost">Create Post</button>
        </form>
    </div>
</template>

<script setup>
import PostService from '../services/PostService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('')
const content = ref('')
const file = ref('')
const storage = JSON.parse(localStorage.getItem('session'));
const service = new PostService()
const router = useRouter()
const createPost = async () => {

    try {

        const formData = new FormData()
        formData.append('image', file.value)
        formData.append('userid', storage.userid)
        formData.append('title', title.value)
        formData.append('content', content.value)


        console.log("este es el formulario" + formData)

        service.newPost(formData).then(() => {

            router.push("/")

        })

    }
    catch (error) {
        console.log(file.value)
        console.log(error)
    }


}



function handleImg() {
    const selectedFile = ImageUrlfile.files
    const ImageUrlObject = URL.createObjectURL(selectedFile[0])
    imagePreview.src = ImageUrlObject
    file.value = selectedFile[0]
}
</script>



<style scoped>
#imagePreview {

    height: 100;
    width: 100;
    border-radius: 50%;
}
</style>
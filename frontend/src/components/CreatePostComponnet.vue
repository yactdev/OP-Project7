<template>
    <div class="container">
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
                <textarea id="content" v-model="Content" required></textarea>
            </div>

            <img id="imagePreview" width="100" height="100">
            <div>
                <label for="image">Avatar:</label>
                <input id="ImageUrlfile" type="file" name="file" accept="image/*" @change="handleImg">
                <span>{{ message }}</span>
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
const message = ref('')
const createPost = async () => {

    try {

        const formData = new FormData()
        formData.append('image', file.value)
        formData.append('userid', storage.userid)
        formData.append('title', title.value)
        formData.append('content', content.value)


        if (file.value) {

            service.newPost(formData).then(() => {

                router.push("/")
            })
        } else {
            message.value = "Please select an image"
        }



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


.container img {
    width: 220px;

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

img {

    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
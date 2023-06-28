<script>
import axios from 'axios';
import { useRouter } from 'vue-router';


export default {

    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            password: '',
            file: null,
            bio: ''
        };
    },
    methods: {
        handleFileUpload(event) {

            this.file = event.target.files[0];
            const selectedFile = ImageUrlfile.files
            const ImageUrlObject = URL.createObjectURL(event.target.files[0])
            imagePreview.src = ImageUrlObject
        },
        submitForm() {
            const formData = new FormData()
            formData.append('image', this.file)
            formData.append('name', this.name)
            formData.append('lastName', this.lastname)
            formData.append('email', this.email)
            formData.append('password', this.password)
            formData.append('bio', this.bio)


            console.log(formData)

            const headers = { headers: { 'Content-Type': 'multipart/form-data' } }
            axios.post('http://localhost:3033/api/users/signup', formData, headers)

                .then(() => {
                    const router = useRouter()
                    console.log(formData)
                    this.$router.push('/')
                })
                .catch((error) => {
                    // res.status(500).json({
                    //     error: error,
                    // });
                });;
            // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
            // y manejar la imagen del avatar
            console.log('Datos enviados:');

        }
    }
};








</script>


<template>
    <div class="container">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name :</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="lastname">Last Name :</label>
                <input type="text" id="lastname" v-model="lastname" required>
            </div>
            <div>
                <label for="email">Email :</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password :</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div> <img id="imagePreview"></div>


            <div>
                <label for="image">Avatar :</label>
                <input id="ImageUrlfile" type="file" name="file" accept="image/*" @change="handleFileUpload">
            </div>
            <div>
                <label for="bio">Bio:</label>
                <textarea name="" id="bio" v-model="bio" cols="30" rows="10"></textarea>
            </div>
            <button type="submit">Sign in</button>
        </form>
    </div>
</template>


<style scoped>
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
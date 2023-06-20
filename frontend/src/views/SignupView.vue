<script>
import axios from 'axios';

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
            console.log(event)
            this.file = event.target.files[0];
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

                .then(() => { console.log(formData) })
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
    <h1>Signup Example</h1>


    <div>
        <h1>Registro de usuario</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nombre :</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="lastname">last name:</label>
                <input type="text" id="lastname" v-model="lastname" required>
            </div>
            <div>
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <label for="image">Avatar:</label>
                <input type="file" name="file" accept="image/*" @change="handleFileUpload">
            </div>
            <div>
                <label for="bio">Bio:</label>
                <input type="text" id="bio" v-model="bio">
            </div>
            <button type="submit">Sign in</button>
        </form>
    </div>
</template>


<style scoped></style>
<template>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">
                    <title></title>
                </label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="lastname">content</label>
                <input type="" id="lastname" v-model="lastname" required>
            </div>
            <img id="imagePreview" width="100" height="100">
            <div>
                <label for="image">Avatar:</label>
                <input id="ImageUrlfile" type="file" name="file" accept="image/*" @change="handleImg">
            </div>
            <button>Create Post</button>
        </form>
    </div>
</template>

<script setup>
function handleImg() {
    const selectedFile = ImageUrlfile.files
    const ImageUrlObject = URL.createObjectURL(selectedFile[0])
    imagePreview.src = ImageUrlObject
}
</script>



<style scoped>
#imagePreview {

    height: 100;
    width: 100;
    border-radius: 50%;
}
</style>
import axios from 'axios';
import { ref } from 'vue';

class PostService {
  #posts;
  #post;
  #commented;
  #urb;

  constructor() {
    this.#posts = ref();
    this.#post = ref([]);
    this.#commented = ref([]);
    this.#urb = ref();
  }

  getPosts() {
    return this.#posts;
  }
  getPost() {
    return this.#post;
  }
  getComments() {
    return this.#commented;
  }
  getUrb() {
    return this.#urb;
  }
  async fetchAllPosts() {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      await axios
        .get('http://localhost:3033/api/post', headers)

        .then((response) => {
          localStorage.setItem('data', JSON.stringify(response.data));
          this.#posts.value = response.data;
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async fetchPostById(id) {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };

      await axios
        .get(`http://localhost:3033/api/post/${id}`, headers)

        .then((response) => {
          this.#post.value = response.data;
        });
    } catch (error) {
      console.log('API Error ');
    }
  }
  async readBy(id) {
    try {
      const storage = JSON.parse(localStorage.getItem('session'));

      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      const body = { userId: storage.userid };

      await axios
        .post(`http://localhost:3033/api/post/readby/${id}`, body, headers)

        .then(() => {
          console.log('User added');
        });
    } catch (error) {
      console.log('API Error ' + error);
    }
  }

  async newPost(body) {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${storage.token} `,
        },
      };
      await axios
        .post(`http://localhost:3033/api/post`, body, headers)

        .then(() => {
          console.log('The post has been created');
        });
    } catch (error) {
      console.log(error);
    }
  }
  async Comment(body) {
    try {
      const storage = JSON.parse(localStorage.getItem('session'));

      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };

      await axios
        .post(`http://localhost:3033/api/comment/`, body, headers)

        .then(() => {
          console.log('commentadded');
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async fetchComment(id) {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios

      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };

      await axios
        .get(`http://localhost:3033/api/comment/${id}`, headers)

        .then((response) => {
          this.#commented.value = response.data;
        });
    } catch (error) {
      console.log('API Error ');
    }
  }

  async urb(id) {
    try {
      const storage = await JSON.parse(localStorage.getItem('session'));
      // Simple GET request using axios
      const headers = {
        headers: {
          Accept: 'aplication/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${storage.token} `,
        },
      };

      await axios
        .get(`http://localhost:3033/api/post/urb/${id}`, headers)

        .then((response) => {
          this.#urb.value = response.data;
        });
    } catch (error) {
      console.log('API Error ');
    }
  }
}

export default PostService;

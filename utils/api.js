const axios = require('axios');

const api = {
    async getUser(userResponse) {
        try { let response = await axios
            .get(`https:api.github.com/users/${userResponse.username}`);
            return response.data;
        }
    }
}
import axios from "axios";

export default {
    getArticles: function() {
        return axios.get("/api/articles");
    },
    getArticle: function(id) {
        return axios.get(`/api/books/${(id)}`);
    }
};
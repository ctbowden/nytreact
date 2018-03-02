import axios from "axios";

export default {
  searchArticles: data => {
    return axios.post("/api/articles", {
      query: data.query,
      startYear: data.startYear,
      endYear: data.endYear
    });
  },
  saveArticle: data => {
    return axios.get("/api/articles/save", data);
  }, 
  getSavedArticles: () => {
    return axios.get("/api/articles/saved");
  },
  deleteArticle: id => {
    return axios.delete("/api/articles/"+id);
  }
};

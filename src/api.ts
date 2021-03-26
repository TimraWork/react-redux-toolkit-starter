import axios from "axios";

const instance = axios.create({
  baseURL: "https://timra.ru/timra/wp-json/wp/v2",
});

export const getPostsRequest = () => {
  return instance.get("/posts?_embed&per_page=10&page=1");
};

import { baseApi } from "../api";

export const postsApi = {
  getPosts: `${baseApi}/posts`,
  getPostById: (id: number) => `${baseApi}/posts/${id}`,
};

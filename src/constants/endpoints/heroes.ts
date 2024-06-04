import { baseApi } from "../api";

export const heroesApi = {
  getHeroes: `${baseApi}/heroes`,
  getHeroById: (id: number) => `${baseApi}/heroes/${id}`,
};

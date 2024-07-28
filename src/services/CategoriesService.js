import HttpClient from "./utils/HttpClient";

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  async listCategories() {
    return this.httpClient.get(`/categories`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoriesService();

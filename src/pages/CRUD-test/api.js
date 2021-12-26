import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://61c38a779cfb8f0017a3ebfb.mockapi.io/my-users",
});

export default class api {
  static getItems = async () => {
    const { data } = await baseUrl.get("/");
    return data;
  };

  static deleteItem = async (id) => {
    return await baseUrl.delete("/" + id);
  };

  static addItem = async (item) => {
    const post = await baseUrl.post("/", item);
    return post;
  };

  static editItem = async (item) => {
    await baseUrl.put(`/${item.id}`, item);
  };

  static async getIds() {
    return await this.getItems().map((item) => item.id);
  }

  static async getItemById(id) {
    return await this.getItems().find((item) => item.id === id);
  }
}

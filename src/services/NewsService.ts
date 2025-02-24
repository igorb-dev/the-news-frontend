import axios from "axios";

const API_URL = "https://the-news-backend.onrender.com/news/";

class NewsService {
  public static async GetNewsById(id: string, token: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL + id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar news open:", error);
      throw error;
    }
  }

  public static async GetAllNews(token: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar news open:", error);
      throw error;
    }
  }
}

export default NewsService;

import axios from "axios";

const API_URL = "https://the-news-backend.onrender.com/message";

class NewsService {
  public static async GetMessage(token: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar streak:", error);
      throw error;
    }
  }
}

export default NewsService;

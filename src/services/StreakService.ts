import axios from "axios";

const API_URL = "https://the-news-backend.onrender.com/streaks/";

class StreakService {
  public static async GetStreaksById(id: string, token: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL + id}`, {
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

  public static async GetAllStreaks(token: string): Promise<any> {
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

export default StreakService;

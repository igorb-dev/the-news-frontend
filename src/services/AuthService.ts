import axios from "axios";

const API_URL = "https://the-news-backend.onrender.com/auth/";

class AuthService {
  public static async PostLogin(email: string): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}login`, { email });
      return response.data;
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }
}

export default AuthService;

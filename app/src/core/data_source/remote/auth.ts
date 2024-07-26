import axios from "axios";

export const authRemote = {
  login: async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      return data;
    } catch (error) {
      console.log(error.response?.data);
    }
  },
  signUp: async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    try {
      const { data } = await axios.post("http://localhost:8080/auth/register", {
        email,
        password,
        name,
      });

      return data;
    } catch (error) {
      console.log(error.response?.data);
    }
  },
};

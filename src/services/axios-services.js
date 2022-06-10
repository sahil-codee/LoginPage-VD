import env from "react-dotenv";
import axios from "axios";

// const url="https://reqres.in/api/login";
const url = env.REACT_APP_URL

async function loginService(username, password) {
  try {
    const response = await axios({
      url: url,
      method: "POST",
      data: {
        email: username,
        password: password,
      },
    });
    return response;
  } catch (err) {
      throw err;
  }
}

export default loginService;

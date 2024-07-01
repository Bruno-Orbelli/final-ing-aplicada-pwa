import axios from "axios";

export const getToken = async () => {
    if (sessionStorage.getItem('token')) {
      return sessionStorage.getItem('token') as string;
    } else {
      axios.post('http://localhost:8080/api/authenticate', {
        username: 'admin',
        password: 'admin',
      }).then((response) => {
        if (response.status !== 200) {
          return '';
        }
        sessionStorage.setItem('token', response.data.id_token);
        return response.data.id_token as string;
      });
    }
    return '';
  }
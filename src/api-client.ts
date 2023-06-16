import axios from "axios";

import { API_SERVER_URL } from './public-config';

export const fetchAdvisors = async () => {
  const response = await axios.get(`${API_SERVER_URL}/advisors`);

  return response.data.advisors;
};

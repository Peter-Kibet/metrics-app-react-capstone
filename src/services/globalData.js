// services/globalData.js
import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

const fetchGlobalData = async () => {
  try {
    const response = await axios.get(`${API_URL}/global`);
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw error;
  }
};

export default fetchGlobalData;

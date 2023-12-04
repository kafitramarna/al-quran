import axios from "axios";

export const getAyat = async (nomor) => {
    try {
      const response = await axios.get(`https://quran-api.santrikoding.com/api/surah/${nomor}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
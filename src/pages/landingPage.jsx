import React, { useEffect, useState } from "react";
import Card from "../Components/Elements/Card";
import { getQuran } from "../services/surah.sevices";

const LandingPage = () => {
  const [dataSurah, setDataSurah] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getQuran();
        setDataSurah(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-wrap">
      {dataSurah.map((item) => (
        <Card
          key={item.nomor}
          namaSurah={item.nama}
          namaLatin={item.nama_latin}
          deskripsi={item.deskripsi}
          nomor={item.nomor}
        />
      ))}
    </div>
  );
};

export default LandingPage;

import { useParams } from "react-router-dom"
import CardsAyat from "../Components/Elements/CardsAyat";
import { getAyat } from "../services/ayat.services";
import { useEffect, useState } from "react";
const Surah = () => {
    const { nomor } = useParams();
    const [ayat, setAyat] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const ayatData = await getAyat(nomor);
              setAyat(ayatData.ayat);
            } catch (error) {
              console.error(error);
            }
          };
      fetchData();
    }, [nomor]);
    return (
      <div>
        {ayat.map((item) => (
            <CardsAyat ayat={item.ar} key={item.id} terjemahan={item.idn} nomor={item.nomor}/>
        ))}
      </div>
    );
  };
  
  export default Surah;
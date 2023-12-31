import { Link } from "react-router-dom";
const Card = (props) => {
    const { namaSurah, namaLatin, deskripsi,nomor } = props
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {nomor} . {namaSurah} - {namaLatin}
        </h5>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {deskripsi}
        </p> */}
        <Link to={`/${nomor}`}>
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Baca Sekarang
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

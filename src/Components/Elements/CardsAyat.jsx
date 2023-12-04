import { Link } from "react-router-dom";
const CardAyat = (props) => {
    const {ayat, terjemahan, nomor} = props
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 justify-end"
    >
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right">
          {ayat} ({nomor})
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
          {terjemahan}
        </p>
      </div>
    </div>
  );
};

export default CardAyat;

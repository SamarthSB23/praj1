import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <button className="text-xl text-white bg-sky-600 hover:bg-sky-700 font-semibold py-3 px-14 rounded-2xl">
        Connect to a wallet
      </button>
    </div>
  );
};

export default Home;

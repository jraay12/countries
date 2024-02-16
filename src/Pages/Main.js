import Header from "../Components/Header";

export default function Main() {
  return (
    <div className=" min-h-screen bg-VeryLightGray ">
      <Header />
      <section className="flex justify-between items-center px-10 mt-10 ">
        <input
          type="text"
          placeholder="search for a country"
          className="shadow-2xl  px-6 py-2 active:outline-none focus:outline-none rounded-sm bg-white"
        />
        <div className="relative border-2 border-black">
          <button className="shadow-2xl hover:block bg-white py-2 px-4 text-sm">
            Filter by Region
          </button>
          <div className="w-full px-10 h-max  border-2 border-black absolute ">
            <ul className="w-full ">
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

import Header from "../Components/Header";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { QueryCountry } from "../Api/axios";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const { data } = QueryCountry();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    setShowDropdown(false);
  }, []);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className=" min-h-screen bg-VeryLightGray  select-none">
      <Header />
      <section className="flex flex-col table:flex-row justify-start items-start gap-10 table:gap-0 table:justify-between table:items-center px-10 mt-10 ">
        <input
          type="text"
          placeholder="search for a country"
          className="shadow-2xl  px-6 py-2 active:outline-none focus:outline-none rounded-sm bg-white"
        />
        <div className="relative inline-block ">
          <span
            className=" border shadow-2xl drop-shadow-2xl px-2 py-2 hover:cursor-pointer"
            onClick={handleDropdown}
          >
            Filter by Region
          </span>
          {showDropdown && (
            <div className="w-full h-max border absolute top-full mt-3">
              <ul className="w-full bg-white text-sm px-4 py-4">
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="flex gap-20 justify-evenly max-w-full flex-wrap px-10 py-10">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <Card
              key={index + 1}
              image={item.flags.png}
              country={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
              click={() => navigate(`/details/${item.name.common}`)}
            />
          ))}
      </section>
    </div>
  );
}

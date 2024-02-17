import sample from "../Sampledata/data";

export default function Card({
  image,
  country,
  capital,
  population,
  region,
  key,
}) {
  return (
    <div
      className="max-w-56 min-w-56 min-h-72 max-h-72 bg-white drop-shadow-lg"
      key={key}
    >
      <section className="flex flex-col w-full ">
        <img src={image} className="object-cover max-h-28 w-full " />
        <div className="px-4 pt-2">
          <h1 className="font-bold ">{country}</h1>
          <p className="text-xs font-medium pt-4">
            Population:{" "}
            <span className="font-normal">{population.toLocaleString()}</span>
          </p>
          <p className="text-xs font-medium pt-4">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="text-xs font-medium pt-4">
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

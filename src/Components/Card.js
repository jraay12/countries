import sample from "../Sampledata/data";

export default function Card({ props }) {
  return (
    <div className="max-w-56 min-h-72 max-h-72 bg-white ">
      <section className="flex flex-col w-full ">
        <img src={props.image} className="border border-black" />
        <div className="px-4 pt-2">
          <h1 className="font-bold ">{props.country}</h1>
          <p className="text-xs font-medium pt-4">
            Population: <span className="font-normal">{props.population}</span>
          </p>
          <p className="text-xs font-medium pt-4">
            Region: <span className="font-normal">{props.region}</span>
          </p>
          <p className="text-xs font-medium pt-4">
            Capital: <span className="font-normal">{props.capital}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function CountryDetails() {
  let { name } = useParams();

  console.log(name);

  return <section className="bg-black h-screen w-screen"></section>;
}

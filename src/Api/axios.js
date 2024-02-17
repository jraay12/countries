import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const baseurl = "https://restcountries.com/v3.1/all";

const countries = async () => {
  const data = await axios.get(`${baseurl}`);
  return data.data;
};

export const QueryCountry = () => {
  return useQuery({ queryKey: ["countries"], queryFn: countries });
};

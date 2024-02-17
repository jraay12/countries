import Main from "./Pages/Main";
import CountryDetails from "./Components/CountryDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, Navigate } from "react-router-dom";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />}></Route>
        <Route path="/countries" element={<Main />}>
          <Route path="details" element={<CountryDetails />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

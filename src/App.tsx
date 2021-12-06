import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyDetails } from "./components/CompanyDetails";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/companyDetails/:stockSymbol"
          element={<CompanyDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

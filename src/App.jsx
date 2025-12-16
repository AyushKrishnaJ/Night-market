import { Routes, Route } from "react-router-dom";
import SellerDashboard  from './components/SellerDashboard.jsx'
import SellerDetails from "./components/SellerDetails.jsx";


function App(){
  return(
    <Routes>
      {/* <Route path="/" element={<SellerDashboard/>}/> sdb is temperorily set as the main page */}
      <Route path="/" element={<SellerDetails/>}/>
    </Routes>
  );
}

export default App;
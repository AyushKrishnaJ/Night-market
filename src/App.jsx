import { Routes, Route } from "react-router-dom";
import SellerDashboard  from './SellerDashboard.jsx'


function App(){
  return(
    <Routes>
      <Route path="/" element={<SellerDashboard/>}/> {/* sdb is temperorily set as the main page*/}
      {/* Add other pages here */}
    </Routes>
  );
}

export default App;
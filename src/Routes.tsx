import { BrowserRouter, Routes, Route } from "react-router-dom"
import SobreNos from "./pagas/sobreNos"
import Header from "./components/header"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/BullyingMap-Site" element={<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  ) 
}

export default AppRoutes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNos from "@/features/sobre-nos/pages";
import Header from "@/shared/components/header";


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

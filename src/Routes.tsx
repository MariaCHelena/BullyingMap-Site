import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNos from "@/features/sobre-nos/pages";
import Header from "@/shared/components/header";
import NossaEquipe from "./features/nossa-equipe/pages";
import EditalPage from "./features/edital/pages";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/BullyingMap-Site" element={<SobreNos/>}/>
        <Route path="/BullyingMap-Site/nossaequipe" element={<NossaEquipe/>}/>
        <Route path="/BullyingMap-Site/edital/cotacao-publica-precos-No-001/2024" element={<EditalPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

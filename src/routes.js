import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Despesas from "./pages/despesas"
import FormularioDespesas from "./pages/formularioDespesas"
import FormularioReceitas from "./pages/formularioReceitas"
import Principal from "./pages/principal"
import Receitas from "./pages/receitas"
import Resumo from "./pages/resumo"

const AppRouter= ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/receitas" element={<Receitas/>}/>
        <Route path="/receitas/:id" element={<FormularioReceitas/>}/>
        <Route path="/despesas" element={<Despesas/>}/>
        <Route path="/resumo" element={<Resumo/>}/>
        <Route path="/despesas/:id" element={<FormularioDespesas/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
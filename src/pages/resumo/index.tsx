import { TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import BarraLateral from "../../components/barraLateral"
import TabelaResumos from "../../components/tabelaResumos"
import { IResumo } from "../../interfaces/IResumo"


const Resumo = ()=>{
  const [data,setData] = useState(new Date())
  const [resumo,setResumo] = useState<IResumo |undefined>()
  useEffect(()=>{
    let mes = data.getMonth() + 1;
    axios.get(`http://localhost:8080/resumo/${data.getFullYear()}/${mes}`)
    .then(resposta => setResumo(resposta.data))
  },[data])
  
  return(
    <div>
        <BarraLateral/>
        <div className="ml-72 mt-8 w-4/6">
          <h1 className="font-bold text-4xl mb-8">Resumo do mes</h1>
          <p>Aqui fica seu resumo do mes</p>
          
          <TextField id="outlined-basic" type='date' variant="outlined" value={data} sx={{mt:8}} onChange={(evento=>setData(new Date(evento.target.value)))} />
          <TabelaResumos resumo={resumo}/>
        </div>
    </div>
  )
}

export default Resumo
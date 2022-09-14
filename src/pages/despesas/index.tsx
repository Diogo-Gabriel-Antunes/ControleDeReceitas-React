import { TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import BarraLateral from "../../components/barraLateral"

import TabelaDespesas from "../../components/tabeladespesas"
import IDespesas from "../../interfaces/IDespesas"



const Despesas = ()=>{
  const [Despesas,setDespesas] = useState<IDespesas[] |undefined>()
  const [data,setData] = useState(new Date());

  useEffect(()=>{
    let mes = data.getMonth() + 1;
    axios.get(`http://localhost:8080/despesas/${data.getFullYear()}/${mes}`)
    .then(resposta=> setDespesas(resposta.data.despesas))
  },[data])

  const excluir = (despesaAhSerExcluido:IDespesas)=>{
    axios.delete(`http://localhost:8080/despesas/${despesaAhSerExcluido.id}`)
    .then(()=>{
      const listaDespesas:IDespesas[] | undefined = Despesas?.filter(despesa=> despesa.id !== despesaAhSerExcluido.id)
      if(listaDespesas){
        setDespesas([...listaDespesas])
      }
    })
  }
  return(
    <div>
      <div>
        <BarraLateral/>
      </div>
      <div className="ml-72 mt-8 w-4/6">
        <h1 className="font-bold text-4xl">Despesas</h1>
        <p className="mt-8">Aqui esta todas as Despesas</p>
        
        <TextField id="outlined-basic" type='date' variant="outlined" value={data} sx={{mt:8}} onChange={evento=>setData(new Date(evento.target.value))}  />
      </div>
      <TabelaDespesas Despesas={Despesas} excluir={excluir} />
    </div>
  )
}

export default Despesas
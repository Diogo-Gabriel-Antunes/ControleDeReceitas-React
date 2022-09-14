import { TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import BarraLateral from "../../components/barraLateral"
import TabelaReceita from "../../components/tabelaReceita"
import IReceitas from "../../interfaces/IReceitas"

function correcaoDoMes(mes:number){
  return mes-1;
}

const Receitas = ()=>{
  const [receitas,setReceitas] = useState<IReceitas[]|undefined >()
  const [data,setData] = useState(new Date());


  

  useEffect(()=>{
    let mes = data.getMonth() + 1;
    axios.get(`http://localhost:8080/receitas/${data.getFullYear()}/${mes}`)
    .then(resposta=> setReceitas(resposta.data.receitas))
  },[data])

  const excluir = (receitaAhSerExcluido:IReceitas)=>{
    axios.delete(`http://localhost:8080/receitas/${receitaAhSerExcluido.id}`)
    .then(()=>{
      const listaReceitas:IReceitas[] | undefined = receitas?.filter(receitas=> receitas.id !== receitaAhSerExcluido.id)
      if(listaReceitas){
        setReceitas([...listaReceitas])
      }
    })
  }
  return(
    <div>
      <div>
        <BarraLateral/>
      </div>
      <div className="ml-72 mt-8 w-4/6">
        <h1 className="font-bold text-4xl">Receitas</h1>
        <p className="mt-8">Aqui esta todas as receitas</p>
        
        <TextField id="outlined-basic" type='date' variant="outlined" value={data} sx={{mt:8}} onChange={evento=>setData(new Date(evento.target.value))} />
      </div>
      <TabelaReceita Receitas={receitas} excluir={excluir}/>
    </div>
  )
}

export default Receitas
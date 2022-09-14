import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BarraLateral from "../../components/barraLateral"




const FormularioReceitas = () => {

  const parametros = useParams();

  

  const [descricao,setDescricao] = useState('')
  const [valor,setValor] = useState('')
  const [data,setData] = useState('')
  
  
  useEffect(() => {
    axios.get(`http://localhost:8080/receitas/${parametros.id}`)
      .then(function (resposta) {
        setDescricao(resposta.data.receita.descricao)
        setValor(resposta.data.receita.valor)
        setData(resposta.data.receita.data)
        

      }) 
  },[parametros.id])

  const atualizarReceitas =(evento:React.FormEvent<HTMLFormElement>)=>{
    evento.preventDefault()
    
      axios.put(`http://localhost:8080/receitas/${parametros.id}`,{
        descricao:descricao,
        valor:valor,
        data:data,
       
      })
    
  }

  return (
    <div>
      <BarraLateral />
      <div className="ml-72 mt-8 w-4/6">
        <h1 className="font-bold text-4xl">Atualizar Receita</h1>
        <div className="mt-16">
          <form onSubmit={evento=> atualizarReceitas(evento)}>
            <label htmlFor="descricao" className="block ">Descrição</label>
            <input type="text" value={descricao} id="descricao" className="mt-4" onChange={evento=>setDescricao(evento.target.value)} />
            <label htmlFor="descricao" className="block mt-2">valor</label>
            <input type="text" value={valor} id="descricao" className="mt-2" onChange={evento=>setValor(evento.target.value)} />
            <label htmlFor="descricao" className="block mt-2">data</label>
            <input type="date" value={data} id="descricao" className="mt-2 " onChange={evento=>setData(evento.target.value)} />           
            <button className="bg-azul rounded-full p-1 ml-4">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioReceitas
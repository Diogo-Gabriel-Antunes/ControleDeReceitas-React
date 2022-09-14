import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BarraLateral from "../../components/barraLateral"
import IDespesas from "../../interfaces/IDespesas"

enum Categorias {
  alimentacao = 1,
  Saude = 2,
  Moradia = 3,
  Transporte = 4,
  Educação = 5,
  Lazer = 6,
  Imprevistos = 7,
  Outras = 8
}

const FormularioDespesas = () => {

  const parametros = useParams();

  

  const [descricao,setDescricao] = useState('')
  const [valor,setValor] = useState('')
  const [data,setData] = useState('')
  const [categoria,setCategoria] = useState('')
  
  useEffect(() => {
    axios.get(`http://localhost:8080/despesas/${parametros.id}`)
      .then(function (resposta) {
        setDescricao(resposta.data.despesa.descricao)
        setValor(resposta.data.despesa.valor)
        setData(resposta.data.despesa.data)
        setCategoria(resposta.data.despesa.categoria_id)

      }) 
  },[])

  const atualizarDespesa =(evento:React.FormEvent<HTMLFormElement>)=>{
    evento.preventDefault()
    
      axios.put(`http://localhost:8080/despesas/${parametros.id}`,{
        descricao:descricao,
        valor:valor,
        data:data,
        categoria_id:categoria
      })
    
  }

  return (
    <div>
      <BarraLateral />
      <div className="ml-72 mt-8 w-4/6">
        <h1 className="font-bold text-4xl">Atualizar Despesa</h1>
        <div className="mt-16">
          <form onSubmit={evento=> atualizarDespesa(evento)}>
            <label htmlFor="descricao" className="block ">Descrição</label>
            <input type="text" value={descricao} id="descricao" className="mt-4" onChange={evento=>setDescricao(evento.target.value)} />
            <label htmlFor="descricao" className="block mt-2">valor</label>
            <input type="text" value={valor} id="descricao" className="mt-2" onChange={evento=>setValor(evento.target.value)} />
            <label htmlFor="descricao" className="block mt-2">data</label>
            <input type="date" value={data} id="descricao" className="mt-2 " onChange={evento=>setData(evento.target.value)} />
            <label htmlFor="descricao" className="block mt-2">Categoria</label>
            <select name="categoria" id="" className="w-48 mt-2" value={categoria} onChange={evento=>setCategoria(evento.target.value)}>
              <option value="1" >Alimentação</option>
              <option value="2" >Saude</option>
              <option value="3" >Moradia</option>
              <option value="4" >Transporte</option>
              <option value="5" >Educação</option>
              <option value="6" >Lazer</option>
              <option value="7" >Imprevistos</option>
              <option value="8" >Outras</option>
            </select>
            <button className="bg-azul rounded-full p-1 ml-4">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioDespesas
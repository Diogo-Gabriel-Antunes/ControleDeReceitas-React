import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material"
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



  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8080/despesas/${parametros.id}`)
      .then(function (resposta) {
        setDescricao(resposta.data.despesa.descricao)
        setValor(resposta.data.despesa.valor)
        setData(resposta.data.despesa.data)
        setCategoria(resposta.data.despesa.categoria_id)

      })
  }, [])

  const atualizarDespesa = (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evento.preventDefault()

    axios.put(`http://localhost:8080/despesas/${parametros.id}`, {
      descricao: descricao,
      valor: valor,
      data: data,
      categoria_id: categoria
    })

  }

  return (
    <div>
      <BarraLateral />
      <div className="ml-72 mt-8 w-4/6">
        <h1 className="font-bold text-4xl">Atualizar Despesa</h1>
        <div className="mt-16">
          <form >
            <div className="mt-4">
              <TextField id="outlined-basic" label="Descrição" variant="outlined" value={descricao} onChange={evento => setDescricao(evento.target.value)} />

            </div>
            <div className="mt-4">

              <TextField id="outlined-basic" label="Valor" variant="outlined" value={valor} onChange={evento => setValor(evento.target.value)} />
            </div>
            <div className="mt-4">
              <TextField id="outlined-basic" label="Data" variant="outlined" value={data} onChange={evento => setData(evento.target.value)} />

            </div>
            <div className="mt-4">

              <InputLabel>Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={categoria}
                onChange={evento => setCategoria(evento.target.value)}
              >
                <MenuItem value={1}>Alimentação</MenuItem>
                <MenuItem value={2}>Saude</MenuItem>
                <MenuItem value={3}>Moradia</MenuItem>
                <MenuItem value={4}>Transporte</MenuItem>
                <MenuItem value={5}>Educação</MenuItem>
                <MenuItem value={6}>Lazer</MenuItem>
                <MenuItem value={7}>Imprevistos</MenuItem>
                <MenuItem value={8}>Outras</MenuItem>

              </Select>
            </div>

            <Button variant="outlined" sx={{ mt: 4 }} onClick={evento => atualizarDespesa(evento)}>Atualizar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioDespesas
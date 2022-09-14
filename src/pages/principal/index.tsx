import BarraLateral from "../../components/barraLateral"
import './principal.css'
import '../../output.css'
import Formulario from "../../components/formulario"
import { useState } from "react"
import axios from "axios"
import { Button, InputLabel, MenuItem, Select } from "@mui/material"


const Principal = () => {
  const [descricaoReceita, setDescricaoReceita] = useState('');
  const [dataReceita, setDataReceita] = useState('');
  const [valorReceita, setValorReceita] = useState('');

  const [descricaoDespesa, setDescricaoDespesa] = useState('');
  const [dataDespesa, setDataDespesa] = useState('');
  const [valorDespesa, setValorDespesa] = useState('');
  const [categoria, setCategoria] = useState(1)

  function criarReceita(evento: React.MouseEvent<HTMLButtonElement> | MouseEvent) {
    evento.preventDefault();

    axios.post('http://localhost:8080/receitas', {
      descricao: descricaoReceita,
      valor: valorReceita,
      data: dataReceita
    })
  }
  function criarDespesa(evento: React.MouseEvent<HTMLButtonElement> | MouseEvent) {
    evento.preventDefault();

    axios.post('http://localhost:8080/despesas', {
      descricao: descricaoDespesa,
      valor: valorDespesa,
      data: dataDespesa,
      categoria_id: categoria,
    })
  }

  return (
    <div>
      <BarraLateral />
      <div className="ml-72 mt-8 w-4/6 ">
        <div>
          <h3 className="font-bold text-4xl">Controle de receitas</h3>
          <p className="mt-8 text-base">Aqui voce pode cadastrar quanto dinheiro entra e sai da sua conta para ter um controle</p>
        </div>
        <div className="mt-16 border rounded-md p-8">
          <h3 className="font-bold">Cadastro de receita</h3>
          <Formulario setDescricao={setDescricaoReceita} setData={setDataReceita} setValor={setValorReceita} descricao={descricaoReceita} data={dataReceita} valor={valorReceita} />
          
          <Button variant="contained"  onClick={evento => criarReceita(evento)}>Enviar</Button>
        </div>
        <div className="p-8 border rounded-md" >
          <h3 className="font-bold">Cadastro de despesas</h3>
          <form action="">
            <Formulario setDescricao={setDescricaoDespesa} setData={setDataDespesa} setValor={setValorDespesa} descricao={descricaoDespesa} data={dataDespesa} valor={valorDespesa} />
            <InputLabel>Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={categoria}
              onChange={evento => setCategoria(Number(evento.target.value))}
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
            
            
            <Button variant="contained" sx={{ml:4}} onClick={evento => criarDespesa(evento)}>Enviar</Button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Principal;
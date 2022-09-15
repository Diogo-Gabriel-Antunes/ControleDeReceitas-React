import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import IDespesas from "../../interfaces/IDespesas"


interface Props {
  Despesas: IDespesas[] | undefined,
  excluir:(despesaAhSerExcluido: IDespesas) => void,
 
}
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

function categoria(id:number) {
  switch (id) {
    case Categorias.alimentacao:
      return <TableCell align ="right">Alimentação</TableCell>;
    case Categorias.Saude:
      return <TableCell align ="right">Saude</TableCell>;
    case Categorias.Moradia:
      return <TableCell align ="right">Moradia</TableCell>
    case Categorias.Transporte:
      return <TableCell align ="right">Transporte</TableCell>
    case Categorias.Educação:
      return <TableCell align ="right">Educação</TableCell>
    case Categorias.Lazer:
      return <TableCell align ="right">Lazer</TableCell>
    case Categorias.Imprevistos:
      return <TableCell align ="right">Imprevistos</TableCell>
    case Categorias.Outras:
      return <TableCell align ="right">Outras</TableCell>

  }
}

const TabelaDespesas = (props: Props) => {

  
  return (
    <div className="ml-72 mt-16 w-3/4">

      <TableContainer>
        <Table>
          <TableRow>
            <TableCell align ="right">Id</TableCell>
            <TableCell align ="right">Descrição</TableCell>
            <TableCell align ="right">Valor</TableCell>
            <TableCell align ="right">Data</TableCell>
            <TableCell align ="right">Categoria</TableCell>
            <TableCell align ="right">Editar</TableCell>
            <TableCell align ="right">Deletar</TableCell>
          </TableRow>
          <TableBody>
          {props.Despesas && props.Despesas.map(item => (
            <TableRow key={item.id}>
              <TableCell align ="right">{item.id}</TableCell>
              <TableCell align ="right">{item.descricao}</TableCell>
              <TableCell align ="right">{item.valor}</TableCell>
              <TableCell align ="right">{item.data}</TableCell>
              {categoria(item.categoria_id)}
              <TableCell align="right"><Button><Link to={`${item.id}`}>editar</Link></Button></TableCell>
              <TableCell align="right"><Button onClick={()=>props.excluir(item)}>Deletar</Button></TableCell>
              
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TabelaDespesas
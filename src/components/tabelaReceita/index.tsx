import { TableContainer, Table, TableRow, TableCell, TableBody } from "@mui/material"
import { Link } from "react-router-dom"
import IReceitas from "../../interfaces/IReceitas"

interface Props {
  Receitas: IReceitas[] | undefined
  excluir:(receitaAhSerExcluido: IReceitas) => void
}

const TabelaReceita = (props: Props) => {
  return (
    <div className="ml-72 mt-16 w-3/4">
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell align ="right">Id</TableCell>
            <TableCell align ="right">Descrição</TableCell>
            <TableCell align ="right">Valor</TableCell>
            <TableCell align ="right">Data</TableCell>
            
          </TableRow>
          <TableBody>
          {props.Receitas && props.Receitas.map(item => (
            <TableRow key={item.id}>
              <TableCell align ="right">{item.id}</TableCell>
              <TableCell align ="right">{item.descricao}</TableCell>
              <TableCell align ="right">{item.valor}</TableCell>
              <TableCell align ="right">{item.data}</TableCell>
              
              
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TabelaReceita
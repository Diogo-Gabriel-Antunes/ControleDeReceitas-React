import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import { IResumo } from "../../interfaces/IResumo"
interface Props {
  resumo: IResumo | undefined
}

const TabelaResumos = ({ resumo }: Props) => {
  return (
    <div>
      <TableContainer className="border mt-16">
        <Table>
          <TableRow >
            <TableCell align="right">Despesa do mes</TableCell>
            <TableCell align="right">Receita do mes</TableCell>
            <TableCell align="right">Saldo final do mes</TableCell>
            <TableCell align="right">Gasto por categoria</TableCell>
          </TableRow>
          <TableBody>
            <TableCell align="right">{`${resumo?.despesasDoMes}`}</TableCell>
            <TableCell align="right">{`${resumo?.receitasDoMes}`}</TableCell>
            <TableCell align="right">{`${resumo?.saldoFinalDoMes}`}</TableCell>
            <TableCell align="right">
              <ul>
                {resumo?.listaCategorias.map((item)=>(
                  <>
                    <li>{`${item.categoria}  : ${item.valor}`}</li>
                  </>
                ))}
              </ul>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TabelaResumos
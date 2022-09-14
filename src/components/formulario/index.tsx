import { TextField } from "@mui/material";
import { SetStateAction } from "react";


interface Props{
  setDescricao: React.Dispatch<SetStateAction<string>>;
   setData: React.Dispatch<SetStateAction<string>>; 
   setValor: React.Dispatch<SetStateAction<string>>; 
   descricao: string; 
   data: string; 
   valor: string;
}



const Formulario = ({descricao,data,valor,setDescricao,setData,setValor}:Props) => {
  return (
    <div>
      <div className="mt-8 ">
        <form action="" className="grid  grid-cols-3 grid-rows-2">

          <div>
          <TextField id="outlined-basic" label="Descrição" variant="outlined" value={descricao} onChange={evento=>setDescricao(evento.target.value)}  />
          </div>
          <div>
            <TextField id="outlined-basic" type='date' variant="outlined" value={data} onChange={evento=>setData(evento.target.value)}  />
          </div>
          <div>
            <TextField id="outlined-basic" label="Valor" variant="outlined" value={valor} onChange={evento=>setValor(evento.target.value)}  />
          </div>
          
        </form>
      </div> 
    </div>


  )
}

export default Formulario
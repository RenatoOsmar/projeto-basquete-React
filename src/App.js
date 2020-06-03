import React from 'react';
import BasquetePlacar from './Components/BasquetePlacar';

const conteudos = {
  Informacoes:{
    localDoJogo:'Chicago Estadium/EUA',
    data:'31/05/2020',
    horario:'21:30',
  },
  timeCasa:{
    nome:'Chicago Bulls',
  };
timeVisitante:{
  nome:'Losangeles lakeres',
};

//comentario
export default class App extends React.Component {
  renderoosmar(){
    return(
            <BasquetePlacar  Informacoes = {conteudos.Informacoes}
                       timeCasa = {conteudos.timeCasa} 
                       timeVisitante = {conteudos.timeVisitante}/>
    )}
};



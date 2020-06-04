import React from 'react';
import Time  from './Time';
import Partida from './Partida';
import './App.css';


export default class BasquetePlacar extends React.Component {
    constructor(){
        super();
            this.state = {
                 cesta_Casa:0,
                 cesta_Visitante:0,
        };
    }
    marcarCestaCasa() {
        this.setState({
            cesta_Casa:this.state.cesta_Casa + 2,
        });
    }
    marcarCestaVisitante() {
        this.setState({
            cesta_Visitante:this.state.cesta_Visitante +2,
        });
    };
    constructor(){
        super();
            this.state = {
                cesta_3_casa:0,
                cesta_3_Visitante:0,
            };
        }
    marcarCesta_3_casa() {
        this.setState({
            cesta_3_casa:this.state.cesta_3_casa + 3,
        });
    }
    marcarCesta_3_visitante() {
        this.setState({
            cesta_3_Visitante:this.state.cesta_3_Visitante + 3,
        });
    }

    render(){
        return(
            
                <div className = 'tudo'>
                    <div>
                        <div className = 'timeCasa'>
                             <h2>Casa</h2>
                                 <Time nome = {this.props.timeCasa.nome}
                                      cestas = {this.state.cesta_Casa}
                                      marcarCesta = {this.marcarCestaCasa.bind(this)}
                                      cesta_3 = {this.marcarCesta_3_casa.bind(this)} />
                        </div>

                        <div className = 'informacoes'>
                                 <Partida localDoJogo = {this.props.Informacoes.localDoJogo} 
                                          data = {this.props.Informacoes.data}
                                          horario = {this.props.Informacoes.horario}/>
                        </div>

                        <div className = 'timeVisitante'>
                            <h2>Visitante</h2>
                                 <Time nome = {this.props.timeVisitante.nome}
                                       cestas = {this.state.cesta_Visitante}
                                       marcarCesta = {this.marcarCestaVisitante.bind(this)}
                                       cesta_3 = {this.marcarCesta_3_visitante.bind(this) }/>
                         </div>
                    </div>
              </div>
        );
    }
}
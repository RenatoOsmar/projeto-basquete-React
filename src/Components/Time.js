import React from 'react';
import BotaoCesta from './BotaoCesta';
import BotaoCesta_3 from './BotaoCesta_3';

export default class Time extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.cestas}</h2>
                <BotaoCesta marcarCesta = {this.props.marcarCesta} />
               < BotaoCesta_3 cesta_3 = {this.props.cesta_3} />
            </div>
        );
    }
}
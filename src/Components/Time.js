import React from 'react';
import BotaoCesta from './BotaoCesta';

export default class Time extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.cestas}</h2>
                <BotaoCesta marcarCesta = {this.props.marcarCesta} />
            </div>
        );
    }
}
import React from 'react';

export default class BotaoCesta extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.marcarCesta();
    }
    render() {
        return(
            <button onClick = {this.handleClick.bind(this)}>Cesta 2 Pontos</button>
            
        );
    }
}
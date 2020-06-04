import React from 'react';

export default class BotaoCesta_3 extends React.Component {
    cestaClick(e){
        e.preventDefault();
        this.props.cesta_3();
    }
    render() {
        return(
            <button onClick = {this.cestaClick.bind(this)}>Cesta 3 pontos</button>
        );
    }
}
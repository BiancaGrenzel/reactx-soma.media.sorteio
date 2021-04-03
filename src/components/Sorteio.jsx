import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props=>{

    const{min, max} = props

    const Sorteio = parseInt(Math.random() * (max-min)) + min

    return(
        <Card title='Sorteio' purple>
            <div>
                <span>Resultado: </span>
                <strong>{Sorteio}</strong>
            </div>
        </Card>
    )
}

function mapStateToProps(state){

    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)
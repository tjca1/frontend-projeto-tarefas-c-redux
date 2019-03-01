import React from 'react'
import axios from 'axios'
import Cabecalho from '../template/cabecalho'
import Form from './formulario'
import Lista from './lista'
import {connect} from 'react-redux'



const url = 'http://localhost:3003/api/todos'

class DashBoard extends React.Component{

  

    constructor(props){
        super(props)
        this.state = {  lista: [] }
    
    }

    


    
    render(){
        return (
            
            <div>
                <Cabecalho name='Tarefas' small='Cadastro'/>
                <Form />
                <Lista name='Tarefas' small='Cadastro'/>

            </div>
        
        )
    }

}

function mapaEstadoCmp(state){
    return{
        state: state
    }
}

export default connect (mapaEstadoCmp)(DashBoard)
import React from 'react'
import Butao from '../template/iButao'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { 
    removePesquisa,
    setDone,
    setPending,
    getDescription
 } from '../../src/main/actionsReact';


const PesquisaLista =  props =>{
    const {
        setDone,
        setPending,
        removePesquisa,
        description,
        getDescription
     } = props
    const lista = props.lista || []
    const renderRows = () =>{
        return lista.map(tarefa =>(
            <tr key={tarefa._id}>
                <td className={tarefa.done ? 'classDone' : ''} >{tarefa.description}</td>
                <td className='tableDefaultTd' ><Butao style='success' icon='check'   onClick={() => setDone(tarefa)} hide={tarefa.done}  /></td>
                <td className='tableDefaultTd' ><Butao style='warning' icon='undo'    onClick={() => setPending(tarefa)} hide={!tarefa.done}/></td>
                <td className='tableDefaultTd' ><Butao style='danger' icon='trash-o'  onClick={() => removePesquisa(tarefa)} hide={!tarefa.done}/></td>
                
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tablePesquisaTh'>Ação</th>

                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>

    )

}


/*
function mapaEstadoCmp(state){
    return{
        description: state.description
    }
}
*/

const mapaEstadoCmp = state =>({
    lista:state.tarefas.lista
})

const mapaDespacha = despacha => bindActionCreators({ 
    removePesquisa,
    setDone,
    setPending,
    getDescription
},despacha)


export default connect (mapaEstadoCmp, mapaDespacha)(PesquisaLista)
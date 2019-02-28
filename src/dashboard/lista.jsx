import React from 'react'
import Butao from '../template/iButao'

export default props =>{
    const lista = props.lista || []
    const renderRows = () =>{
        return lista.map(tarefa =>(
            <tr key={tarefa._id}>
                <td className={tarefa.done ? 'classDone' : ''} >{tarefa.description}</td>
                <td className='tableDefaultTd' ><Butao style='success' icon='check'   onClick={() => props.handleDone(tarefa)} hide={tarefa.done}  /></td>
                <td className='tableDefaultTd' ><Butao style='warning' icon='undo'    onClick={() => props.handlePending(tarefa)} hide={!tarefa.done}/></td>
                <td className='tableDefaultTd' ><Butao style='danger' icon='trash-o'  onClick={() => props.handleRemove(tarefa)} hide={!tarefa.done}/></td>
                
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
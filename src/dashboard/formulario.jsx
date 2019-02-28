import React from 'react'
import Grid from '../template/grid'
import Butao from '../template/iButao'


export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handlePesquisar() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleLimpar()
        }
    }

    return (
        <div role='pesquisaForm' className='pesquisaForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione Tarefa'
                    onChange={props.handleChange}
                    value={props.description}
                    onKeyUp={keyHandler}
                    /> 
            
            </Grid>
            <br></br>
            <Grid cols='12 3 2'>
                <Butao  style='primary' icon='plus' onClick={props.handleAdd}/>
                <Butao  style='info' icon='search' onClick={props.handlePesquisar}/>
                <Butao style='default' icon='close' onClick={props.handleLimpar}></Butao>
            </Grid>      


        </div>
    )
}
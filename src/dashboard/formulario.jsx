import React from 'react'
import Grid from '../template/grid'
import Butao from '../template/iButao'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  changeDescription,
           findStartLista, 
           adicionaPesquisa,
           limpaPesquisa,
           removePesquisa,
           atualizaPesquisa,
           setDone,
           setPending,
           pesquisaTarefa
        } from '../../src/main/actionsReact';



    class FormPesquisa extends React.Component{
            constructor(props){
                super(props)
                this.keyHandler = this.keyHandler.bind(this)

            }

        componentWillMount(){
            this.props.findStartLista()

        }

        keyHandler(e){
            const {
                limpaPesquisa,
                findStartLista, 
                adicionaPesquisa,
                description
             } = this.props

            if (e.key === 'Enter') {
                e.shiftKey ? findStartLista() : adicionaPesquisa(description)
            } else if (e.key === 'Escape') {
                limpaPesquisa()
            }
        }
        
        render(){
            const {
                changeDescription,
                pesquisaTarefa, 
                adicionaPesquisa,
                description,
                limpaPesquisa
             } = this.props


            return (
                <div role='pesquisaForm' className='pesquisaForm'>
                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control'
                            placeholder='Adicione Tarefa'
                            onChange={this.props.changeDescription}
                            value={this.props.description}
                            onKeyUp={this.keyHandler}
                            /> 
                    
                    </Grid>
                    <br></br>
                    <Grid cols='12 3 2'>
                        <Butao  style='primary' icon='plus' onClick={()=>adicionaPesquisa(description)}/>
                        <Butao  style='info' icon='search' onClick={()=>pesquisaTarefa(description)}/>
                        <Butao style='default' icon='close' onClick={()=>limpaPesquisa()}></Butao>
                    </Grid>     
        
        
                </div>
            )
        }
    }



    /*
    function mapaEstadoCmp(state){
        return{
            description: state.description
        }
    }
    */

    const mapaEstadoCmp = state =>({
        description:state.tarefas.description
 
    })

    const mapaDespacha = despacha => bindActionCreators({   changeDescription,
                                                            findStartLista, 
                                                            adicionaPesquisa,
                                                            limpaPesquisa,
                                                            removePesquisa,
                                                            atualizaPesquisa,
                                                            setDone,
                                                            setPending,
                                                            pesquisaTarefa
                                                        },despacha)

    export default connect (mapaEstadoCmp, mapaDespacha)(FormPesquisa)
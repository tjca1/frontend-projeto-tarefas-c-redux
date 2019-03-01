import {SELECIONA_LISTA_PESQUISA,
    STATUS_INICIAL_LISTA_PESQUISA,
    PROCURA_TAREFA,
    ADD_PESQUISA,      
    DELETE_PESQUISA,   
    ATUALIZA_PESQUISA,
    CLEAN_PESQUISA,
    DONE_PESQUISA,  
    PEDING_PESQUISA,    
} from './types'

import axios from 'axios'

const url = 'http://localhost:3003/api/todos'

export const changeDescription = (event) =>({
    type:STATUS_INICIAL_LISTA_PESQUISA,
    payload: event.target.value

})

//////////////////////////////////////////////////////////
export const findStartLista = (d) =>{
    var url_ = null;
    if(d){
        url_ = `${url}?sort=-createdAt&description__regex=/${description}/`
    }else{
        url_ =   `${url}?sort=-createdAt`
    }
    
   //await
    const  response  =  axios.get(url_)
    return {
        type:SELECIONA_LISTA_PESQUISA,
        payload:response
    }

}

/////////////////////////////////////////////////////////
export const adicionaPesquisa = (description) => {
    //await
     return despachaThunk => { 
         axios.post(url, {description})
         .then(response => despachaThunk({
                type:ADD_PESQUISA,
                payload:response
         })).then(
                () => despachaThunk(
                    findStartLista() // atualiza o grid após add a tarefa !
                )//fim 2o then
            )//fim 1o then
          

    }
}

/////////////////////////////////////////////////////////
export const pesquisaTarefa = (description) =>{
    ////`&description__regex=/${description}/`

     const search =  `?sort=-createdAt&description__regex=/${description}/`
     return despachaThunk => { 
         axios.get(`${url}${search}`)
         .then(response => despachaThunk({
                type:PROCURA_TAREFA,
                payload:response
         }))
          

    }
}

export const limpaPesquisa = () =>{
    ////`&description__regex=/${description}/`
     return despachaThunk => { 
         axios.get(`${url}?sort=-createdAt`)
         .then(response => despachaThunk({
                type:CLEAN_PESQUISA,
                payload:response
         }))
          

    }
}



 export const removePesquisa = (tarefa) => {
    //await
    
     return despachaThunk => { 
        axios.delete(`${url}/${tarefa._id}`)
         .then(response => despachaThunk({
                type:DELETE_PESQUISA,
                payload:response
         })).then(
            () => despachaThunk(
                findStartLista() // atualiza o grid após add a tarefa !
            )//fim 2o then
        )//fim 1o then
    }
    
   
}

 export const atualizaPesquisa = () =>{
    
     const  response  =  axios.post(url)
     return {
         type:ADD_PESQUISA,
         payload:response
     }
 
 }



/////////////////////////////////////////////////////////
export const setDone = (tarefa) => {
    //await
     return despachaThunk => { 
        axios.put(`${url}/${tarefa._id}`, { ...tarefa, done: true })
         .then(response => despachaThunk({
                type:DONE_PESQUISA,
                payload:response
         })).then(
            () => despachaThunk(
                findStartLista() // atualiza o grid após add a tarefa !
            )//fim 2o then
        )//fim 1o then
    }
}

export const setPending = (tarefa) => {
    //await
     return despachaThunk => { 
        axios.put(`${url}/${tarefa._id}`, { ...tarefa, done: false })
         .then(response => despachaThunk({
                type:PEDING_PESQUISA,
                payload:response
         })).then(
            () => despachaThunk(
                findStartLista() // atualiza o grid após add a tarefa !
            )//fim 2o then
        )//fim 1o then
    }
}

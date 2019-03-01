import {SELECIONA_LISTA_PESQUISA,
                 STATUS_INICIAL_LISTA_PESQUISA,
                 PROCURA_TAREFA,
                 ADD_PESQUISA,      
                 DELETE_PESQUISA,   
                 ATUALIZA_PESQUISA,
                 CLEAN_PESQUISA,
                 DONE_PESQUISA,  
                 PEDING_PESQUISA,
                 GET_DESCRIPTION       
      } from '../actionsReact/types'
const {getSetDescription} = require('../actionsReact/pesquisaActions')



const STATUS_INICIAL = {
    description:'',
    lista:[
        ]

}

export default(state = STATUS_INICIAL, action ) => {
    switch (action.type) {
        case STATUS_INICIAL_LISTA_PESQUISA:
          return { ...state, description: action.payload};
        case SELECIONA_LISTA_PESQUISA:
          return { ...state, lista: action.payload.data};
       case PROCURA_TAREFA:
          return { ...state, lista: action.payload.data};
       case ADD_PESQUISA:
          return { ...state, description: ''};
       case DELETE_PESQUISA:
          return { };
       case ATUALIZA_PESQUISA:
          return { ...state, lista: action.payload};
       case CLEAN_PESQUISA:
          return { ...state, lista: action.payload.data , description: '' };
       case DONE_PESQUISA:
          return {};
       case PEDING_PESQUISA:
          return { };
       case GET_DESCRIPTION:{
          return { ...state,  description: action.payload };
       }
          
      default:
        return state;
       
      }

}


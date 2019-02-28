import React from 'react'
import IfTest from '../ultils/ultilCmp'

export default props => (

        <IfTest test={!props.hide}>
                <button className={'btn btn-' + props.style} 
                        onClick={props.onClick}>
                        <i className={ 'fa fa-'+props.icon}></i>
                </button>
        </IfTest>
        )
     
    

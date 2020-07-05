import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc//Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (//need to be () not {}
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{ //inline style should be an obj
                transform: props.show? 'translateY(0)' : 'translateY(-100VH)',
                opacity: props.show? '1': '0'
            }}>
            {props.children}
        </div>
    </Aux>
);


export default modal;
import React from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css';

/*
cannot return multiple root element in JSX code
sol 1: use array and add key
sol 2: use higher order component
sol 3: use <div> to wrap
*/
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)


export default layout;
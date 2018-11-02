import React from 'react'
import Aux from '../../hoc/aux'

const Modal = props=> (<Aux>
            <div className={classes.Modal} style={{
                transform:props.show ? 'translateY(0)' :'translateY(-100vh)',
                opacity:props.show ? '1':'0'
            }}>
                {props.children}
</div>
</Aux>)

export default Modal;
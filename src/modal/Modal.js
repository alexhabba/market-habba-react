import React from 'react';

import classes from './modal.module.css';

const Modal = (props) => {
    return (
        <div className={props.active ? classes.modal_active : classes.modal} onClick={() => props.setActive(false)}>
            <div className={classes.modal_content} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>

    )
}

export default Modal;
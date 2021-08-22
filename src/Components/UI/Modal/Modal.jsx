import React from 'react';
import Classes from './Modal.module.scss'

const Modal = ({children, modal, setActive}) => {
    const rootClasses = [Classes.Modal]
    if (modal) {
        rootClasses.push(Classes.Active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setActive(false)}>
            <div className={Classes.Content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
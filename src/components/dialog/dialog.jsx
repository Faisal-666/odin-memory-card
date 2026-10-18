import style from './style.module.css';
import { useRef, useEffect } from 'react';

const Dialog = ({ onReset, win }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (win) dialogRef.current.showModal();
    }, [win]);

    return (
        <dialog className={style.dialog} ref={dialogRef}>
            <h2>You Win!!!</h2>
            <div className={style.win}>
                <img
                    src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHk0YzNoenB1ano3cXgwYXo2ZThlcHk4NTlvbXJxcWZrN3c5YWpyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VkpfO6W4D7yB7vSjXy/giphy.gif' 
                    alt='cat'
                    className={style.cat} 
                />
            </div>
            <button
                type='button'
                className={style.dialogBtn}
                onClick={() => onReset(dialogRef)}
            >Reset</button>
        </dialog>
    );
};

export default Dialog;
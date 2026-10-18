import style from './style.module.css';

const Card = ({ data, handleClick }) => {
    const { id, url, title } = data;

    return (
        <div className={style.card} onClick={() => handleClick(id)}>
            <img
                className={style.imgs}
                src={url}
                alt={title}
            />
        </div>
    );
};

export default Card;
import classes from "./card.module.css";
import "./buttonBasket.css";

const Card = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.card_name}>
                <span>{props.cardName}</span>
            </div>
            <div className={classes.card_img}>
                <img src={props.src} alt={props.alt}/>
            </div>
            <div className={classes.card_description}>
                <h4>{props.description}</h4>
            </div>
            <div className={classes.card_price}>
                <div><span>2999 Р</span></div>
                <button className="custom-btn btn-12"><span>Добавить</span><span>В корзину</span></button>
            </div>
        </div>


    )
}

export default Card;
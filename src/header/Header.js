import classes from "./header.module.css";
import Modal from "../modal/Modal";
import {useState} from "react";
import Form from "../form/FormLogin";
import {useDispatch, useSelector} from "react-redux";

function Header() {
    const dispatch = useDispatch()
    const isManager = useSelector(state => state.root.isManager)
    const isShowManagerPanel = useSelector(state => state.root.isShowManagerPanel)
    const [modalActive, setModalActive] = useState(true)

    function showPageAdmin() {
        dispatch({type: "SHOW_ADMIN_PANEL"})
    }

    return (
        <div className={classes.header}>
            <div className={classes.left_header}>
                        тут ссылки которых пока нет
            </div>

            <div className={classes.right_header}>
                <div>
                    {isManager ? <button onClick={showPageAdmin}>Панель администратора</button> : <div/>}
                </div>
                {isShowManagerPanel ? <div/> :
                    <div className={classes.basket}>
                        <img src={require('../img/basket.svg').default} alt='logo basket'/>
                        <h5>Корзина</h5>
                        <p>3</p>
                    </div>
                }
                <div className={classes.user}>
                    <img src={require('../img/user.svg').default} alt='logo user' onClick={() => setModalActive(true)}/>
                    <h5>Войти</h5>
                </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <Form/>
            </Modal>
        </div>
    )
}

export default Header
import classes from "./managerPanel.module.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const ManagerPanel = (props) => {
    const dispatch = useDispatch()
    const newImageProductList = useSelector(state => state.product.product.newImageProductList)

    const handleChange = (el) => {
        dispatch({type: "ADD_FOTO", payload: el.target.files[0]})
    }

    const sendProduct = () => {
        const formData = new FormData();
        newImageProductList.forEach(f => formData.append("images", f));

        // debugger;
        formData.append("productName", "фигня какая-то")
        axios.post("http://localhost:8089/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error))
        //todo отправка файлов на сервер
        console.log(newImageProductList.length)
    }

    return (
        <div className={classes.manager_panel}>
            {/*<select name="category" id="pet-select">*/}
            {/*    <option selected>Все категории</option>*/}
            {/*    <option value="dog">Dog</option>*/}
            {/*    <option value="cat">Cat</option>*/}
            {/*    <option value="hamster" >Hamster</option>*/}
            {/*    <option value="parrot">Parrot</option>*/}
            {/*    <option value="spider">Spider</option>*/}
            {/*    <option value="goldfish">Goldfish</option>*/}
            {/*</select>*/}

            <div>
                <input type="file" onChange={handleChange} accept="image/*, .png,.jpg,.gif,.web"/>
            </div>
            <div>
                <button onClick={sendProduct}>Отправить</button>
            </div>
            {newImageProductList.map(f => <img style={{border: '2px solid green', height: 200, width: 200}}
                                               src={URL.createObjectURL(f)} alt=""/>)}

        </div>
    )
}

export default ManagerPanel
import classes from "./managerPanel.module.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const ManagerPanel = (props) => {
    const dispatch = useDispatch()
    const newImageProductList = useSelector(state => state.product.product.newImageProductList)
    const handleChange = (el) => {


        dispatch({type: "ADD_FOTO", payload: el.target.files[0]})
// newImageProductList.push(el.target.files[0])
        console.log(el.target.files.length)
        console.log(el.target.files[0].name)
        // FileList f = new FileList();
        // let map = newImageProductList
        //     .map(f => <img src={URL.createObjectURL(f)} alt=""/>);
        // <img src={newImageProductList.length > 0 ? URL.createObjectURL(newImageProductList[0]) : "#"} alt=""/>

    }

    const sendProduct = () => {
        const formData = new FormData();
        newImageProductList.forEach(f => formData.append("images", f));

        // formData.append("image", newImageProductList[0])
        // debugger;
        formData.append("productName", "фигня какая-то")
        axios.post("http://localhost:8089/upload", formData, {
            headers: {
                // "Content-Type": "multipart/form-data"
                // "content-type": "image/png"
                // "content-type": "application/x-www-form-urlencoded"
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

            {/*<form method="post" encType="multipart/form-data">*/}
            <div>
                <input type="file" onChange={handleChange} accept="image/*, .png,.jpg,.gif,.web"/>
            </div>
            <div>
                <button onClick={sendProduct}>Отправить</button>
            </div>
            {/*</form>*/}
            {/*<img src={newImageProductList.length > 0 ? URL.createObjectURL(newImageProductList[0]) : "#"} alt=""/>*/}
            {/*<div>{newImageProductList[0].name}</div>*/}
            {newImageProductList.map(f => <img style={{border: '2px solid green', height: 200, width: 200}} src={URL.createObjectURL(f)} alt=""/>)}

        </div>
    )
}

export default ManagerPanel
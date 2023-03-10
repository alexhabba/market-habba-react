import './App.css';
import Header from "./header/Header";
import Products from "./product/Products";
import {useDispatch, useSelector} from "react-redux";
import ManagerPanel from "./manager/managerPanel";

function App() {
    const dispatch = useDispatch()
    const cach = useSelector(state => state.root.cach)
    const isShowManagerPanel = useSelector(state => state.root.isShowManagerPanel)
    // const cach = useSelector(state => state.cach.cach)
    console.log(useSelector(state => state));

    function increment() {
        dispatch({type:"ADD", payload: 2 })
    }

    return (
        <div className="App">

            <Header/>
            {isShowManagerPanel ? <div/> : <div style={{border: '2px solid red', height: 200}}>блок с рекламой</div>}
            <div>{cach}</div>
            <div><button onClick={increment}>click</button></div>
            {isShowManagerPanel ? <ManagerPanel/> : <Products />}
            {isShowManagerPanel ? <div/> : <div style={{border: '2px solid red', height: 200}}>вы смотрели</div>}
        </div>
    );
}

export default App;

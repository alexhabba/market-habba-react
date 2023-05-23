import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

function Form(props) {
    const user = useSelector(state => state.user.user)
    const [emailValue, setEmailValue] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("E-mail не может быть пустым");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
    const [repeatPasswordValue, setRepeatPasswordValue] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [isAuthentication, setIsAuthentication] = useState(true);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const blurHandler = e => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
            default:
        }
    }

    const setEmail = input => {
        setEmailValue(input.target.value)
        // var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        //
        // if (!regex.test(String(input.target.value).toLowerCase())) {
        //     setEmailError('Некорректный E-mail')
        // } else {
        setEmailError('')
        // }
    }
    const setRepeatPassword = input => {
        setRepeatPasswordValue(input.target.value)

        // if (input.target.value.length < 6) {
        //     setPasswordError('Пароль не должен быть менее 6 символов')
        // } else {
        // setPasswordError('')
        // }

    }
    const setPassword = input => {
        setPasswordValue(input.target.value)

        // if (input.target.value.length < 6) {
        //     setPasswordError('Пароль не должен быть менее 6 символов')
        // } else {
        setPasswordError('')
        // }

    }
    const sendFormLoginOrRegistration = () => {
        //todo реализовать проверку совпадения пароля и подтверждения его
        console.log(user)
        const data = {"email": emailValue, "password": passwordValue}
        const url = isAuthentication ? "http://localhost:8888/user/login" : "http://localhost:8888/user/registration"
        let promise = axios
            .post(url,
                JSON.stringify(data), {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
        promise
            .then(res => {
                let r = res.data.roles[0]
                console.log(r)
            })
            .catch(error => console.log(error))
    }

    function changeAuthentication() {
        setIsAuthentication(false)
    }

    function changeRegistration() {
        setIsAuthentication(true)
    }

    return (
        <div>
            <button style={{color: isAuthentication ? 'blue' : 'black'}} onClick={changeRegistration}>Вход по E-mail
            </button>
            <button style={{color: !isAuthentication ? 'blue' : 'black'}} onClick={changeAuthentication}>Регистрация
            </button>

            <h3>{isAuthentication ? "Вход по E-mail" : "Регистрация"}</h3>
            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <input name='email' type='email' onBlur={blurHandler} value={emailValue} onChange={setEmail}
                   placeholder="Электронная почта"/>

            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input name='password' onBlur={blurHandler} value={passwordValue} onChange={setPassword}
                   placeholder="Пароль"/>

            {isAuthentication ? "" :
                <input name='repeatPassword' onBlur={blurHandler} value={repeatPasswordValue}
                       onChange={setRepeatPassword}
                       placeholder="повторить пароль"/>
            }
            <button type='submit' disabled={!formValid}
                    onClick={sendFormLoginOrRegistration}>{isAuthentication ? "Войти" : "Регистрация"}</button>
        </div>
    )
}

export default Form
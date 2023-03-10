import {useEffect, useState} from "react";
import axios from "axios";

function Form(props) {
    const [emailValue, setEmailValue] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("E-mail не может быть пустым");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
    const [formValid, setFormValid] = useState(false);

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
    const setPassword = input => {
        setPasswordValue(input.target.value)

        // if (input.target.value.length < 6) {
        //     setPasswordError('Пароль не должен быть менее 6 символов')
        // } else {
        setPasswordError('')
        // }

    }

    const sendFormLoginOrRegistration = () => {
        const data = {"email": emailValue, "password": passwordValue}
        axios
            .post("http://localhost:8888/api/user/login",
                JSON.stringify(data), {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }


    return (

        <div>

            <h3>{props.title}</h3>
            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <input name='email' type='email' onBlur={blurHandler} value={emailValue} onChange={setEmail}
                   placeholder="Электронная почта"/>

            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input name='password' onBlur={blurHandler} value={passwordValue} onChange={setPassword}
                   placeholder="Пароль"/>

            <button type='submit' disabled={!formValid} onClick={sendFormLoginOrRegistration}>Регистрация</button>
        </div>
    )
}

export default Form
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context";
import { useRefreshUserData } from "./custom_hooks";

function UserForm({ isLogin }) {
    const navigate = useNavigate();
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const refreshUserData = useRefreshUserData();
    let title;
    let submitText;
    let wrongFormText;
    let wrongFormName;
    let wrongFormPath;
    let apiName;
    if (isLogin) {
        title = 'Logg inn';
        submitText = 'Logg inn';
        wrongFormText = 'Har du ikke en bruker?';
        wrongFormName = 'Registrer deg';
        wrongFormPath = 'registrer';
        apiName = 'login';
    } else {
        title = 'Registrer deg';
        submitText = 'Registrer deg';
        wrongFormText = 'Har du allerede en bruker?';
        wrongFormName = 'Logg inn';
        wrongFormPath = 'logginn';
        apiName = 'signup';
    }
    return (
        <form id="user_form" onSubmit={(e) => {
            e.preventDefault();
            fetch(`/api/${apiName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usernameInput,
                    password: passwordInput,
                }),
            }).then((res) => {
                if (res.status === 200) {
                    refreshUserData();
                    navigate('/');
                }
            });
        }}>
            <div className ='form'>
                 <h2>
                    {title}
                </h2>
                <label htmlFor="username">
                 Brukernavn:
                </label>
                <input type="text" id="username" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
                <label htmlFor="password">
                    Passord:
                </label>
                <input type="password" id="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
                <button className="logginn" type="submit">
                    {submitText}
             </button>
            </div>
        </form>
    )
}

export default function Login({ isLogin }) {
    return (
        <>
            {isLogin && (<UserForm isLogin={true} />)}
            {!isLogin && (<UserForm isLogin={false} />)}
        </>
    );
}
import { useContext } from "react"
import MyButton from "../components/UI/Button/MyButton"
import MyInput from "../components/UI/input/MyInput"
import { AuthContext } from "../context"

const Login =()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login =(event)=>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        console.log(isAuth);

    }
    return(
            <div>
                <h1>Страница авторизации</h1>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="Введите логин"></MyInput>
                    <MyInput type="password" placeholder="Введите пароль"></MyInput>
                    <MyButton>Войти</MyButton>
                </form>
            </div>
    )
}

export default Login;
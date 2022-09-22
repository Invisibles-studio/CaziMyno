import React, {useState} from "react";
import '../css/auth.css'
import Header from "../Tools/Header";
import {useNavigate} from "react-router-dom";
import FirebaseApi from "../Tools/firebaseApi";
import {Constants} from "../Tools/constants";
import {Alert, Slide, Snackbar} from "@mui/material";

export default function Auth(){

    const [topBlockButtonsMargin, setTopBlockButtonsMargin] = useState(78)
    const [actionButtonName, setActionButtonName] = useState('LOG IN')
    const [title, setTitle] = useState('LOG IN')
    const [isLoginBlock, setIsLoginBlock] = useState(true)
    const [isOpenErrorBlock, setIsOpenErrorBlock] = useState(false)

    const navigation = useNavigate()

    const ToRegister = () => {
        document.querySelector('.main-row-auth').classList.add('topMargin')
        document.querySelector('.login-button').classList.add('topMarginButtons')
        setTopBlockButtonsMargin(225)
        setIsLoginBlock(false)
        setTitle('Registration')
        setActionButtonName('Register')
    }

    const ToLogin = () => {
        document.querySelector('.main-row-auth').classList.remove('topMargin')
        document.querySelector('.login-button').classList.remove('topMarginButtons')
        setTopBlockButtonsMargin(78)
        setIsLoginBlock(true)
        setTitle('LOG IN')
        setActionButtonName('LOG IN')
    }

    console.log(localStorage.getItem('userId'))

    setTimeout(() => {
        if (localStorage.getItem('userId') !== null){
            navigation('/CaziMyno/profile')
        }
    }, 100)


    const Login = () => {
        if (actionButtonName === 'LOG IN'){

            let phoneNumber = document.getElementById('login-phone-number').value
            let password = document.getElementById('login-password').value

            firebaseApi.login(phoneNumber, password, (user) => {
                if (user === null){
                    localStorage.setItem('userId', null)
                    setIsOpenErrorBlock(true)
                    setTimeout(()=> setIsOpenErrorBlock(false), 2000)
                }
                else{
                    localStorage.setItem('userId', user.ID)
                    navigation('/CaziMyno/profile')
                }
            })
        }

    }

    let firebaseApi = new FirebaseApi()


    return(
        <div className={"MainBackground"}>
            <img src={require('../images/background.png')} className={'screen-background'}/>
            <div style={{position: 'absolute', left: 0, top: 0}}>
                <Header/>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <p className={'Login'}>{title}</p>
                </div>
                <div className={'main-row-auth'}>
                    {
                        isLoginBlock &&
                        <div className={'login-block'} id={'login-register-block'}>
                            <p className={'input-title'}>Phone number</p>
                            <input id={"login-phone-number"} className={'input-login'} placeholder={'Phone number'}/>
                            <p className={'input-title'} style={{marginTop: 32}}>Password</p>
                            <input id={"login-password"}  className={'input-login'} placeholder={'*****'} type={'password'} style={{marginBottom: 40}}/>
                        </div>
                    }
                    {
                        !isLoginBlock &&
                        <div className={'login-block'} id={'login-register-block'}>
                            <p className={'input-title'}>Username</p>
                            <input className={'input-login'} placeholder={'Login'}/>
                            <p className={'input-title'}>Email</p>
                            <input className={'input-login'} placeholder={'Email'}/>
                            <p className={'input-title'} style={{marginTop: 32}}>Password</p>
                            <input className={'input-login'} placeholder={'*****'} type={'password'} style={{marginBottom: 40}}/>
                        </div>
                    }
                    <div className={'buttons-block'}>
                        <input type={'submit'} value={actionButtonName} className={'login-button'} onClick={Login}/>
                        <input type={'submit'} value={'COME BACK'} className={'comeback-button'} style={{marginTop: 28}} onClick={() => navigation('/CaziMyno/')}/>
                        {
                            isLoginBlock &&
                            <span className={'white-additional-text'}>Don't have an account yet? <span style={{
                                color: '#FFDE2E', margin: 0, userSelect: 'none', cursor: 'pointer'
                            }} onClick={() => ToRegister()}>Register</span></span>
                        }
                        {
                            !isLoginBlock &&
                            <span className={'white-additional-text'}>Already have an account? <span style={{
                                color: '#FFDE2E', margin: 0, userSelect: 'none', cursor: 'pointer'
                            }} onClick={() => ToLogin()}>Log In</span></span>
                        }
                    </div>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
                open={isOpenErrorBlock}
                onClose={()=>{}}
                key={"top center"}
            >
                <Alert severity="error">Incorrect data!</Alert>
            </Snackbar>
        </div>
    )
}
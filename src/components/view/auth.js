import React, {useState} from "react";
import '../css/auth.css'
import Header from "../Tools/Header";
import '../css/fonts.css'
import {useNavigate} from "react-router-dom";

export default function Auth(){

    const [topBlockMargin, setTopBlockMargin] = useState(161)
    const [topBlockButtonsMargin, setTopBlockButtonsMargin] = useState(78)
    const [actionButtonName, setActionButtonName] = useState('LOG IN')
    const [title, setTitle] = useState('LOG IN')
    const [isLoginBlock, setIsLoginBlock] = useState(true)

    const navigation = useNavigate()

    const ToRegister = () => {
        setTopBlockMargin(14)
        setTopBlockButtonsMargin(225)
        setIsLoginBlock(false)
        setTitle('Registration')
        setActionButtonName('Register')
    }

    const ToLogin = () => {
        setTopBlockMargin(161)
        setTopBlockButtonsMargin(78)
        setIsLoginBlock(true)
        setTitle('LOG IN')
        setActionButtonName('LOG IN')
    }

    return(
        <div className={"MainBackground"}>
            <img src={require('../images/background.png')} style={{width: '100%', height: '100%'}}/>
            <div style={{position: 'absolute', left: 0, top: 0}}>
                <Header/>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <p className={'Login'}>{title}</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: topBlockMargin}}>
                    {
                        isLoginBlock &&
                        <div className={'login-block'} id={'login-register-block'}>
                            <p className={'input-title'}>Username or E-Mail</p>
                            <input className={'input-login'} placeholder={'Login'}/>
                            <p className={'input-title'} style={{marginTop: 32}}>Password</p>
                            <input className={'input-login'} placeholder={'*****'} type={'password'} style={{marginBottom: 40}}/>
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
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 64, alignItems: 'center'}}>
                        <input type={'submit'} value={actionButtonName} className={'login-button'} style={{marginTop: topBlockButtonsMargin}} onClick={() => navigation('/CaziMyno/profile')}/>
                        <input type={'submit'} value={'COME BACK'} className={'comeback-button'} style={{marginTop: 28}} onClick={() => navigation('/CaziMyno/')}/>
                        {
                            isLoginBlock &&
                            <span style={{
                                fontFamily: 'Exo', fontSize: 24, color: 'white', marginTop: 29,
                                userSelect: 'none'
                            }}>Don't have an account yet? <span style={{
                                color: '#FFDE2E', margin: 0, userSelect: 'none', cursor: 'pointer'
                            }} onClick={() => ToRegister()}>Register</span></span>
                        }
                        {
                            !isLoginBlock &&
                            <span style={{
                                fontFamily: 'Exo', fontSize: 24, color: 'white', marginTop: 29,
                                userSelect: 'none'
                            }}>Already have an account? <span style={{
                                color: '#FFDE2E', margin: 0, userSelect: 'none', cursor: 'pointer'
                            }} onClick={() => ToLogin()}>Log In</span></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
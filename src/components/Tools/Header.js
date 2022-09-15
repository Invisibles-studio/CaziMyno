import React from "react";
import '../css/fonts.css';
import '../css/header.css';
import {useNavigate} from "react-router-dom";

export default function Header({auth = false}){

    const style = {
        background: {
            width: '100vw',
            height: 120,
            borderBottom: '3px solid #2D2D2D',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        avatar: {

        }
    }

    const navigation = useNavigate()

    return(
        <div className={'header-background'}>
            <img src={require('../images/cazimynologo.png')} className={'cazi-myno-logo'}/>
            <div className={'cazi-myno-logo-text'}>
                <p style={{
                fontFamily: 'Exo', fontWeight: '600', fontSize: 32, margin: 0, color: '#FFDE2E', userSelect: 'none'
            }}>CAZI</p>
                <p style={{
                    fontFamily: 'Exo', fontWeight: '600', fontSize: 32, margin: 0, color: '#8625A0', marginLeft: 4, userSelect: 'none'
                }}>MYNO</p>
            </div>
            <div className={'avatar-block'} onClick={() => navigation(auth ? '/CaziMyno/profile' : '/CaziMyno/auth')}>
                <div style={style.avatar} className={'avatar-photo'} >
                    <img src={require('../images/avatar.png')} style={{width: '100%', height: '100%'}}/>
                </div>
                <p className={'avatar-text'}>{auth ? "My profile" : 'Authorization'}</p>
            </div>
        </div>
    )
}
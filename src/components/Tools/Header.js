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
            width: 66,
            height: 66,
            borderRadius: 130,
            background: '#DDDDDD'
        }
    }

    const navigation = useNavigate()

    return(
        <div style={style.background}>
            <img src={require('../images/cazimynologo.png')} style={{
                width: 94, height: 91, marginLeft: 167
            }}/>
            <div style={{flexDirection: 'row', display: 'flex'}}>
                <p style={{
                fontFamily: 'Exo', fontWeight: '600', fontSize: 32, margin: 0, color: '#FFDE2E', userSelect: 'none'
            }}>CAZI</p>
                <p style={{
                    fontFamily: 'Exo', fontWeight: '600', fontSize: 32, margin: 0, color: '#8625A0', marginLeft: 4, userSelect: 'none'
                }}>MYNO</p>
            </div>
            <div style={{
                flexDirection: 'column', display: 'flex', width: 88, alignItems: 'center', cursor: "pointer",
                marginRight: 167
            }} onClick={() => navigation(auth ? '/profile' : '/auth')}>
                <div style={style.avatar} >
                    <img src={require('../images/avatar.png')} style={{width: '100%', height: '100%'}}/>
                </div>
                <p style={{
                    fontFamily: 'Exo', fontWeight: '500', color: 'white', margin: 0, marginTop: 6,
                    userSelect: 'none',
                }}>{auth ? "My profile" : 'Authorization'}</p>
            </div>
        </div>
    )
}
import React from "react";
import Header from "../Tools/Header";
import '../css/fonts.css'
import '../css/profile.css'
import {useNavigate} from "react-router-dom";

export default function Profile(){

    const navigation = useNavigate()

    let windowWidth = window.innerWidth

    let mobile = windowWidth >= 200 && windowWidth <= 800

    return(
        <div className={"MainBackground"}>
            <img src={require('../images/background.png')} className={'screen-background'}/>
            <div style={{position: 'absolute', left: 0, top: 0}} className={'big-background'}>
                <Header auth={true}/>
                { !mobile && <div className={'row'} style={{justifyContent: 'center', marginTop: 61}}>
                    <div className={'column'} style={{justifyContent: 'center'}}>
                        <div className={'row'}>
                            <img src={require('../images/gameHistoryIcon.png')} className={'icons'}/>
                            <div className={'button-history'} onClick={() => navigation('/CaziMyno/game-history')}>
                                <span className={'button-text'}>GAME HISTORY</span>
                            </div>
                        </div>
                        <div className={'row'} style={{marginTop: 36}}>
                            <img src={require('../images/balanceHistoryIcon.png')} className={'icons'}/>
                            <div className={'button-history green-button'} onClick={() => navigation('/CaziMyno/balance-history')}>
                                <span className={'button-text'}>BALANCE HISTORY</span>
                            </div>
                        </div>
                    </div>
                    <div className={'column'} style={{marginLeft: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <img src={require('../images/avatar.png')} className={'big-avatar'}/>
                        <span className={'nickname'}>ANOIBY</span>
                        <div className={'button-history'} style={{marginTop: 35}} onClick={() => navigation('/CaziMyno/')}>
                            <span className={'button-text'}>EXIT</span>
                        </div>
                    </div>
                    <div className={'column'} style={{justifyContent: 'center', marginLeft: 100}}>
                        <div className={'row'}>
                            <div className={'button-history green-button'}>
                                <span className={'button-text'}>1999</span>
                            </div>
                            <img src={require('../images/addMoneyIcon.png')} className={'add-money'}/>
                        </div>
                        <div className={'button-history yellow-button'} style={{marginTop: 36}}>
                            <span className={'button-text'}>Withdraw</span>
                        </div>
                    </div>
                </div>}
                { mobile &&
                    <div className={'column'}>
                        <div className={'column'} style={{justifyContent: 'center', alignItems: 'center'}}>
                            <img src={require('../images/avatar.png')} className={'big-avatar'}/>
                            <span className={'nickname'}>ANOIBY</span>
                        </div>
                        <div className={'column'} style={{alignItems: 'center', marginTop: 25}}>
                            <div className={'row'}>
                                <div className={'button-history green-button'}>
                                    <span className={'button-text'}>1999</span>
                                </div>
                                <img src={require('../images/addMoneyIcon.png')} className={'add-money'}/>
                            </div>
                            <div className={'button-history yellow-button'} style={{marginTop: 25}}>
                                <span className={'button-text'}>Withdraw</span>
                            </div>
                        </div>
                        <div className={'column'} style={{justifyContent: 'center', marginTop: 25, alignItems: 'center'}}>
                            <div className={'row'}>
                                <div className={'button-history'} onClick={() => navigation('/CaziMyno/game-history')}>
                                    <span className={'button-text'}>GAME HISTORY</span>
                                </div>
                            </div>
                            <div className={'row'} style={{marginTop: 25}}>
                                <div className={'button-history green-button'} onClick={() => navigation('/CaziMyno/balance-history')}>
                                    <span className={'button-text'}>BALANCE HISTORY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}
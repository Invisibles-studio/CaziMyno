import React, {useState} from "react";
import '../css/fonts.css'
import '../css/history.css'
import Header from "../Tools/Header";
import FirebaseApi from "../Tools/firebaseApi";
import {useNavigate} from "react-router-dom";

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

export default function History({game = true}){

    const [dataGames, setDataGames] = useState([])

    let firebaseApi = new FirebaseApi()

    const navigation = useNavigate()

    setTimeout(() => {
        if (localStorage.getItem('userId') === null){
            navigation('/CaziMyno')
        }

        if (dataGames.length === 0){
            firebaseApi.getLastGames(localStorage.getItem('userId'), (list) => {
                setDataGames(list)
            })
        }
    }, 100)



    let data2 = [
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        },
        {
            type: 'Replenishment',
            money: 99,
            card: 'MasterCard',
        }
    ]

    return(
        <div className={"MainBackground"}>
            <img src={require('../images/background.png')} className={'screen-background'}/>
            <div style={{position: 'absolute', left: 0, top: 0}} className={'big-background'}>
                <Header auth={true}/>
                <div className={'row'} style={{justifyContent: 'center', marginTop: 72}}>
                    <div className={'column'} style={{alignItems: 'center'}}>
                        <span className={'title'}>{game ? 'GAME HISTORY' : 'HISTORY OF BALANCE'}</span>
                        <span className={'title-additional'}>Last 10</span>
                    </div>
                </div>
                <div className={'row'} style={{justifyContent: 'center', marginTop: 50}}>
                    <div className={'grid'}>
                        {
                            game && dataGames.map((item2, index2) =>
                                                <div className={'game-object'} key={index2}>
                                                    <span className={`game-object-type ${item2.result !== 'WON' ? 'game-object-type-lose': ''}`}>{item2.result.toUpperCase()}</span>
                                                    <div className={'row'} style={{alignItems: 'center'}}>
                                                        <span className={'game-object-money'}>{item2.result !== 'WON' ? '-'+item2.reward : '+'+item2.reward }</span>
                                                        <img src={require('../images/moneyIcon.png')} style={{width: 14, height: 20, marginLeft: 3}}/>
                                                    </div>
                                                    <span className={'game-object-money'}>{item2.mode}</span>
                                                    <span className={'game-object-money'} style={{fontSize: 15}}>{item2.level}</span>
                                                    <span className={'game-object-money'} style={{fontSize: 15}}>{item2.type}</span>

                                                </div>
                                            )

                        }
                        {
                            !game && data2.map((item2, index2) =>
                                                <div className={'game-object'} key={index2}>
                                                    <span className={`game-object-type`} style={{fontSize: 20}}>{item2.type.toUpperCase()}</span>
                                                    <div className={'row'} style={{alignItems: 'center', marginTop: 18}}>
                                                        <span className={'game-object-money'}>{item2.type !== 'Replenishment' ? '-'+item2.money : '+'+item2.money }</span>
                                                        <img src={require('../images/moneyIcon.png')} style={{width: 14, height: 20, marginLeft: 3}}/>
                                                    </div>
                                                    <span className={'game-object-money'} style={{marginTop: 16}}>{item2.card}</span>
                                                </div>
                                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

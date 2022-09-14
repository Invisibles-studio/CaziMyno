import React from "react";
import '../css/fonts.css'
import '../css/history.css'
import Header from "../Tools/Header";

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

export default function History({game = true}){

    let data = [
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'lose',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'lose',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        },
        {
            type: 'won',
            money: 100,
            gameType: 'bazaar',
            gameMode: 'StarMode',
            gameLevel: 'BasicLevel'
        }
    ]

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

    data = sliceIntoChunks(data, 5)
    data2 = sliceIntoChunks(data2, 5)

    return(
        <div className={"MainBackground"}>
            <img src={require('../images/background.png')} style={{width: '100%', height: '100%'}}/>
            <div style={{position: 'absolute', left: 0, top: 0}}>
                <Header auth={true}/>
                <div className={'row'} style={{justifyContent: 'center', marginTop: 72}}>
                    <div className={'column'} style={{alignItems: 'center'}}>
                        <span className={'title'}>{game ? 'GAME HISTORY' : 'HISTORY OF BALANCE'}</span>
                        <span className={'title-additional'}>Last 10</span>
                    </div>
                </div>
                <div className={'row'} style={{justifyContent: 'center', marginTop: 50}}>
                    <div className={'column'}>
                        {
                            game && data.map((item, index) => {
                                return (
                                    <div className={'row'}>
                                        {
                                            item.map((item2, index2) =>
                                                <div className={'game-object'} key={index2}>
                                                    <span className={`game-object-type ${item2.type !== 'won' ? 'game-object-type-lose': ''}`}>{item2.type.toUpperCase()}</span>
                                                    <div className={'row'} style={{alignItems: 'center'}}>
                                                        <span className={'game-object-money'}>{item2.type !== 'won' ? '-'+item2.money : '+'+item2.money }</span>
                                                        <img src={require('../images/moneyIcon.png')} style={{width: 14, height: 20, marginLeft: 3}}/>
                                                    </div>
                                                    <span className={'game-object-money'}>{item2.gameMode}</span>
                                                    <span className={'game-object-money'} style={{fontSize: 15}}>{item2.gameLevel}</span>
                                                    <span className={'game-object-money'} style={{fontSize: 15}}>{item2.gameType}</span>

                                                </div>
                                            )
                                        }
                                    </div>
                                    )

                            })
                        }
                        {
                            !game && data2.map((item, index) => {
                                return (
                                    <div className={'row'}>
                                        {
                                            item.map((item2, index2) =>
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
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

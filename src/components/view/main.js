import React from "react";
import Header from "../Tools/Header";
import '../css/main.css'
import {useNavigate} from "react-router-dom";

export default function Main(){

    const navigation = useNavigate()

    setTimeout(() => {
        if (localStorage.getItem('userId') !== null){
            navigation('/CaziMyno/profile')
        }
    }, 100)

    return(
        <div className={'MainBackground'}>
            <img src={require('../images/background.png')} className={'screen-background'}/>
            <div style={{position: 'absolute', left: 0, top: 0}}>
                <Header/>
                <div className={'aboutTheGame-row'}>
                    <p className={'aboutTheGame'}>ABOUT THE GAME</p>
                </div>
                <div className={'main-row'}>
                    <div className={'rulesBlock'}>
                        <p className={'rulesText'}>
                                You need to play dominoes to win money.
                                You can get free bonuses and play with them,
                                or replenish your balance. The better you play,
                                the more likely you are to win money. You can
                                replenish the balance through your personal
                                account
                            </p>
                    </div>
                    <div className={'how-to-play-block'}>
                        <p className={'howToPlay'}>
                            HOW TO PLAY?
                        </p>
                        <iframe
                                src="https://www.youtube.com/embed/jNQXAC9IVRw"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={'youtubeVideo'}>

                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import Header from "../Tools/Header";
import '../css/main.css'
import '../css/fonts.css'

export default function Main(){

    return(
        <div className={'MainBackground'}>
            <img src={require('../images/background.png')} style={{width: '100%', height: '100%'}}/>
            <div style={{position: 'absolute', left: 0, top: 0}}>
                <Header/>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <p className={'aboutTheGame'}>ABOUT THE GAME</p>
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'row', marginTop: 123, justifyContent: 'space-between',
                }}>
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
                    <div style={{display: 'flex', flexDirection: 'column', width: 375, alignItems: 'center', marginRight: 137}}>
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
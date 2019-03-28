import React from 'react'
import { gameWidth } from '../utils/constants'
// import StartGame from './StartGame'
import CurrentScore from './CurrentScore'
import Hazard from './Hazard'
import Vehicle from './Vehicle'
import { signIn } from 'auth0-web'
import Leaderboard from './Leaderboard'
import StartScreenMusic from './StartScreenMusic'
import LevelMusic from './LevelMusic'

const Canvas = (props) => {
    const gameHeight = gameWidth
    const viewBox = [window.innerWidth / - 2, 100 - gameHeight, window.innerWidth, gameHeight]

    return (
        <svg
            id="driver"
            // perserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >

            { ! props.gamestate.started &&
                <g>
                    <StartScreenMusic />
                    <Leaderboard currentPlayer={props.gamestate.currentPlayer} authenticate={signIn} leaderboard={props.gamestate.players} />
                    {/* <StartGame onClick={() => props.startGame()} /> */}
                </g>
            }
            
            { props.gamestate.hazards.map(hazard => ( <Hazard key={hazard.id} position={hazard.position} /> )) }

            <Vehicle />

            { props.gamestate.started &&
                <g>
                    <LevelMusic />
                    <CurrentScore score={props.gamestate.score} />
                </g>
            }


        </svg>
    )
}

export default Canvas
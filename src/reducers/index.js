import moveHazards from './moveHazards'
import countdown from './countdown';

const initialGameState = {
    started: false,
    hazards: [],
    lastHazardCreatedAt: new Date(),
    score: 0,
    currentPlayer: null,
    players: null,
    justScored: false,
    time: 60000,
}

const initialState = {
    speedX: 0,
    x: -25,
    y: 0,
    gamestate: initialGameState,
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case 'MOVE_VEHICLERIGHT':
            return {
                ...state,
                speedX: state.speedX + 1,
                x: state.x + state.speedX
            }

        case 'MOVE_VEHICLELEFT':
            return {
                ...state,
                speedX: state.speedX - 1,
                x: state.x + state.speedX
            }

        case 'RATE':
            return {
                ...state,
                x: state.speedX + state.x,
                speedX: state.speedX
            }

        case 'START_GAME': 
            return {
                ...state,
                gamestate: {
                    ...initialGameState,
                    started: true,
                }
            }




        case 'COUNTDOWN':
            return countdown(state)

        case 'MOVE_HAZARDS': 
            return moveHazards(state)




        case 'LEADERBOARD_LOADED':
            return {
              ...state,
              gamestate: {
                ...initialGameState,
                players: action.players,
              }
            }

        case 'LOGGED_IN':
            return {
              ...state,
              gamestate: {
                ...initialGameState,
                currentPlayer: action.player,
              }
            }

        default:
            return state
    }
}

export default reducer
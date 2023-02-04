import { DAT_CUOC, PLAY_GAME } from "../Types/ProjectGameDiceTypes";

const stateDefault = {
    taiXiu: true,
    diceArray: [{ ma: 1, hinhAnh: "./imgGame/1.png" },
    { ma: 1, hinhAnh: "./imgGame/1.png" },
    { ma: 1, hinhAnh: "./imgGame/1.png" },],
    win: 0,
    totalPlay: 0,
};

export const ProjectGameDiceReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_CUOC:
            state.taiXiu = action.taiXiu;
            return { ...state };
        case PLAY_GAME:
            let newDiceArray = [];
            for (let i = 0; i < 3; i++) {
                let numberRandom = Math.floor(Math.random() * 6) + 1;
                let diceRandom = {
                    numberRandom,
                    hinhAnh: `./imgGame/${numberRandom}.png`
                };
                newDiceArray.push(diceRandom);
            }
            state.diceArray = newDiceArray;
            state.totalPlay += 1;

            let totalScore = newDiceArray.reduce((total, dice, index) => {
                return total += dice.numberRandom;
            }, 0);
            if (state.taiXiu == true && totalScore > 11 || state.taiXiu == false && totalScore <= 11) {
                state.win += 1;
            }

            return { ...state };
        default:
            return { ...state };
    }
};

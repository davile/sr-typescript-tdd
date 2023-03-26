import Scoreboard from "../src/scoreboard";
import {Country} from "../src/Country";

describe('Testing Scoreboard functionality', ()=>{
    test('empty summary is returned for new scoreboard',()=>{
            const scoreboard = new Scoreboard();
            const summary = scoreboard.getSummary();
            expect(summary).toBe("")
    })

    test('when new game is started teams playing are visible in summary',()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        const summary = scoreboard.getSummary();
        expect(summary).toBe("Argentina 0 - Germany 0");
    })

    test('when new game is added initial score is set to 0 - 0',()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Argentina 0 - Germany 0');
    })

})
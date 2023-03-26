import Scoreboard from "../src/Scoreboard";
import {Country} from "../src/Country";

describe('Testing Scoreboard functionality', ()=>{
    test('empty summary is returned for new scoreboard',()=>{
            const scoreboard = new Scoreboard();
            const summary = scoreboard.getSummary();
            expect(summary).toBe("")
    })

    test('when new game is added initial score is set to 0 - 0',()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Argentina 0 - Germany 0');
    })
    
    test('when two games are started both are visible in summary',()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.startNewGame(Country.Australia, Country.Italy);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Argentina 0 - Germany 0\nAustralia 0 - Italy 0');
    })

    test('update score of active game and show it in summary', ()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.updateScore(Country.Argentina, 2, Country.Germany, 3);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Argentina 2 - Germany 3');
    })

    test('update score of two active games and show it in summary', ()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.startNewGame(Country.Australia, Country.Italy);
        scoreboard.updateScore(Country.Argentina, 2, Country.Germany, 3);
        scoreboard.updateScore(Country.Australia, 3, Country.Italy, 2);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Argentina 2 - Germany 3\nAustralia 3 - Italy 2');
    })

    test('when updating a game that is not in progress exception is throw',()=>{
        const scoreboard = new Scoreboard();
        expect(() => scoreboard.updateScore(Country.Australia, 3, Country.Italy, 2)).toThrow('Game not in progress')
    })

})
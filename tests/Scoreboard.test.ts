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
        expect(summary).toBe('Australia 0 - Italy 0\nArgentina 0 - Germany 0');
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
        expect(summary).toBe('Australia 3 - Italy 2\nArgentina 2 - Germany 3');
    })

    test('when updating a game that is not in progress exception is throw',()=>{
        const scoreboard = new Scoreboard();
        expect(() => scoreboard.updateScore(Country.Australia, 3, Country.Italy, 2)).toThrow('Game not in progress')
    })

    test("when game is finished it won't be shown in summary",()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.finishGame(Country.Argentina,Country.Germany);
        const summary = scoreboard.getSummary();
        expect(summary).toBe("")
    })

    test("when two games are in progress only first one is removed after finishing",()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.startNewGame(Country.Australia, Country.Italy);
        scoreboard.finishGame(Country.Argentina, Country.Germany);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Australia 0 - Italy 0');
    })

    test('games in summary should be sorted by sum of scores descending',()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.startNewGame(Country.Australia, Country.Italy);
        scoreboard.updateScore(Country.Argentina, 2, Country.Germany, 3);
        scoreboard.updateScore(Country.Australia, 3, Country.Italy, 3);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Australia 3 - Italy 3\nArgentina 2 - Germany 3');
    })

    test('games in summary should be sorted by sum of scores and by most recently started if equal',()=>{
        const scoreboard = new Scoreboard();
        scoreboard.startNewGame(Country.Argentina, Country.Germany);
        scoreboard.startNewGame(Country.Australia, Country.Italy);
        scoreboard.startNewGame(Country.Spain,Country.Mexico);
        scoreboard.updateScore(Country.Spain,1, Country.Mexico, 1)
        scoreboard.updateScore(Country.Argentina, 3, Country.Germany, 3);
        scoreboard.updateScore(Country.Australia, 3, Country.Italy, 3);
        const summary = scoreboard.getSummary();
        expect(summary).toBe('Australia 3 - Italy 3\nArgentina 3 - Germany 3\nSpain 1 - Mexico 1');
    })


})
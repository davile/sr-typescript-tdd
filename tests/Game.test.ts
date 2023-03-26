import { Country } from '../src/Country'
import Game from '../src/Game'

describe('testing Game object',()=>{
    test('given teams should be visible in respective properties',()=>{
        const game = new Game(Country.Argentina, Country.Australia);
        expect(game.homeTeam).toBe(Country.Argentina)
        expect(game.awayTeam).toBe(Country.Australia)
    })
    
    test('given game should translate to text',()=>{
        const game = new Game(Country.Argentina, Country.Australia);
        expect(game.toString()).toBe("Argentina 0 - Australia 0")
    })

    test('updated scores should be visible in text representation',()=>{
        const game = new Game(Country.Argentina, Country.Australia);
        game.updateScore(1,1);
        expect(game.toString()).toBe("Argentina 1 - Australia 1")
    })

    test('when updating score with negative number error is throw',()=>{
        const game = new Game(Country.Argentina, Country.Australia);
        expect(()=>game.updateScore(-1,1)).toThrow("Scores can't be negative numbers")
    })

    test('when new score is lower than old one error is throw',()=>{
        const game = new Game(Country.Argentina, Country.Australia);
        game.updateScore(1,1);
        expect(()=>game.updateScore(0,1)).toThrow("Can't update score to lower than before")
    })

})
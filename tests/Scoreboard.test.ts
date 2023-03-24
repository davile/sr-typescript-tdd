import Scoreboard from "../src/scoreboard";
describe('Testing Scoreboard functionality', ()=>{
    test('empty summary is returned for new scoreboard',()=>{
            const scoreboard = new Scoreboard();
            const summary = scoreboard.getSummary();
            expect(summary).toBe("")
    })
})
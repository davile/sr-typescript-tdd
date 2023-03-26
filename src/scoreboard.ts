import { Country } from "./Country";

export default class Scoreboard {

    private games: Array<{homeTeam: Country, awayTeam: Country}> = [];

    startNewGame(homeTeam: Country, awayTeam: Country) {
        this.games.push({homeTeam, awayTeam})
    }
    public getSummary() : string {
        if(this.games.length !== 0){
            return this.games[0].homeTeam + ' 0 - ' + this.games[0].awayTeam + ' 0'
        }
        return ""
    }
}
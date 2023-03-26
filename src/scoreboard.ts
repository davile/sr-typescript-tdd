import { Country } from "./Country";

export default class Scoreboard {

    private games: Array<{homeTeam: Country, awayTeam: Country}> = [];

    startNewGame(homeTeam: Country, awayTeam: Country) {
        this.games.push({homeTeam, awayTeam})
    }
    public getSummary() : string {
        if(this.games.length !== 0){
            let summary = ''
            this.games.forEach(game => {
                if(summary!== '') summary += '\n'
                summary += game.homeTeam + ' 0 - '+game.awayTeam + ' 0'
            });
            return summary
        }
        return ""
    }
}
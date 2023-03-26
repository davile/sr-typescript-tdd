import { Country } from "./Country";

export default class Scoreboard {
    updateScore(homeTeam: Country, homeTeamScore: number, awayTeam: Country, awayTeamScore: number) {
        this.games[0].homeTeamScore = homeTeamScore;
        this.games[0].awayTeamScore = awayTeamScore;
    }

    private games: Array<{homeTeam: Country, homeTeamScore: number, awayTeam: Country, awayTeamScore: number}> = [];

    startNewGame(homeTeam: Country, awayTeam: Country) {
        this.games.push({homeTeam, homeTeamScore: 0, awayTeam, awayTeamScore: 0})
    }
    public getSummary() : string {
        if(this.games.length !== 0){
            let summary = ''
            this.games.forEach(game => {
                if(summary!== '') summary += '\n'
                summary += game.homeTeam + ' '+ game.homeTeamScore+' - '+game.awayTeam + ' '+game.awayTeamScore
            });
            return summary
        }
        return ""
    }
}
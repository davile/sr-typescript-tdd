import { Country } from "./Country";
import Game from './Game';

export default class Scoreboard {

    private games: Array<Game> = [];
    
    public updateScore(homeTeam: Country, homeTeamScore: number, awayTeam: Country, awayTeamScore: number) {
        this.games[0].updateScore(homeTeamScore, awayTeamScore)
    }

    public startNewGame(homeTeam: Country, awayTeam: Country) {
        this.games.push(new Game(homeTeam, awayTeam))
    }

    public getSummary() : string {
        if(this.games.length !== 0){
            let summary = ''
            this.games.forEach(game => {
                if(summary!== '') summary += '\n'
                summary += game
            });
            return summary
        }
        return ""
    }
}
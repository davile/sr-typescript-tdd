import { Country } from "./Country";
import Game from './Game';

export default class Scoreboard {

    private games: Array<Game> = [];
    
    public updateScore(homeTeam: Country, homeTeamScore: number, awayTeam: Country, awayTeamScore: number) {
        const gameIndex = this.games.findIndex(game => game.homeTeam === homeTeam && game.awayTeam === awayTeam);
        if(gameIndex === -1) throw new Error('Game not in progress');
        this.games[gameIndex].updateScore(homeTeamScore, awayTeamScore)
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
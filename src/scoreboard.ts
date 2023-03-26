import { Country } from "./Country";
import Game from './Game';

export default class Scoreboard {
    private games: Array<Game> = [];
    
    public startNewGame(homeTeam: Country, awayTeam: Country) {
        this.games.push(new Game(homeTeam, awayTeam))
    }

    public updateScore(homeTeam: Country, homeTeamScore: number, awayTeam: Country, awayTeamScore: number) {
        const gameIndex = this.games.findIndex(game => game.homeTeam === homeTeam && game.awayTeam === awayTeam);
        if(gameIndex === -1) throw new Error('Game not in progress');
        this.games[gameIndex].updateScore(homeTeamScore, awayTeamScore)
    }

    public finishGame(homeTeam: Country, awayTeam: Country) {
        this.games = this.games.filter(game => game.homeTeam !== homeTeam && game.awayTeam !== awayTeam)
    }

    public getSummary() : string {
        if(this.games.length !== 0){
            let summary = ''

            let sortedGames = this.games.sort((gameA, gameB)=>{
                if(gameA > gameB)
                return -1
                else if(gameA < gameB)
                return 1
                else
                return 0
            })

            sortedGames.forEach(game => {
                if(summary!== '') summary += '\n'
                summary += game.toString()
            });
            return summary
        }
        return ""
    }
}
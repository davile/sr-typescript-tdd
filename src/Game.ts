import { Country } from "./Country"

export default class Game {
    private homeTeam: Country;
    private homeTeamScore: number;
    private awayTeam: Country;
    private awayTeamScore: number;

    constructor(homeTeam: Country, awayTeam: Country){
        this.homeTeam = homeTeam;
        this.homeTeamScore = 0;
        this.awayTeam = awayTeam;
        this.awayTeamScore = 0;
    }

    updateScore(homeTeamScore, awayTeamScore){
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
    }

    toString(){
        return this.homeTeam + ' '+ this.homeTeamScore+ ' - '+this.awayTeam+' '+this.awayTeamScore
    }

}
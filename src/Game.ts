import { Country } from "./Country"

export default class Game {
    public readonly homeTeam: Country;
    private homeTeamScore: number;
    public readonly awayTeam: Country;
    private awayTeamScore: number;

    constructor(homeTeam: Country, awayTeam: Country){
        if(homeTeam === awayTeam) throw new Error("Game can't have the same home and away team")
        this.homeTeam = homeTeam;
        this.homeTeamScore = 0;
        this.awayTeam = awayTeam;
        this.awayTeamScore = 0;
    }

    updateScore(homeTeamScore, awayTeamScore){
        if(homeTeamScore < 0 || awayTeamScore < 0) throw new Error("Scores can't be negative numbers");
        if(this.homeTeamScore > homeTeamScore || this.awayTeamScore > awayTeamScore) throw new Error("Can't update score to lower than before")
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
    }

    valueOf(): number{
        return this.homeTeamScore+this.awayTeamScore
    }

    toString(){
        return this.homeTeam + ' '+ this.homeTeamScore+ ' - '+this.awayTeam+' '+this.awayTeamScore
    }

}
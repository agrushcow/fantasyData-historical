class StatsService {
	constructor($resource, $http) {
		Object.assign(this, { $resource, $http });

        this.statsFields = {
            name:'stats',  
            orderByField: 'Team',
            reverseSort: false,
            Offense: true,
            Defense: false,
            Special: false,
            Situational: false,
            OffensiveYards: false,
            PassingYards: false,
            PassingYardsPerAttempt: false,
            PassingTouchdowns: false,
            PasserRating: false,
            CompletionPercentage: false,
            RushingYards: false,
            RushingTouchdowns: false,
            RushingYardsPerAttempt: false,
            TotalScore: false,
            OpponentPassingYards:false,
            OpponentRushingYards: false,
            OpponentFirstDowns: false,
            Sacks: false,
            QuarterbackHits: false,
            TacklesForLoss: false,
            Takeaways: false,
            FumblesForced: false,
            PassesDefended: false,
            OpponentScore: false, 
            ReturnYards: false,
            PuntReturnYards: false,
            KickReturnYards: false,
            KickReturnLong: false,
            PuntAverage: false,
            PuntNetAverage: false,
            FieldGoalAttempts: false,
            FieldGoalsMade: false   
        }

		this.teams = [{
            Team: '',
            PassingYards: 0,
            RushingYards: 0,
            Score: 0,
            Touchdowns: 0,
            TurnoverDifferential : 0,
            OpponentPassingYards: 0,
            OpponentRushingYards: 0,
            Takeways: 0,
            OffensiveYards : 0,
            OffensiveYardsPerPlay: 0,
            PassingYardsAtt: 0,
            PasserRating : 0,
            ThirdDownPercentage: 0,
            FirstDowns: 0
      }]

	this.calculateRank();
}

    getStatsFields() {
        return this.statsFields;
    }

    getAllTeams() {
        const {$http} = this;
        return $http.get("https://mysterious-falls-52077.herokuapp.com/season")
            .then(res => {
                this.teams = res.data.body;
                this.calculateRank();
                    return this.teams;
            });
    }   

    getTeam(index) {
        for (let i in this.teams) {
            if (this.teams[i].Team === index) {
                return this.teams[i];
            }
        }
    }

    /*Calculates the rank in each statistical category of a given Team against other teams*/
    calculateRank() {
        /*Offensive Yards rank*/
        this.teams.sort((a, b) => {return a.OffensiveYards  < b.OffensiveYards });
        for(let i in this.teams) {
            this.teams[i].OffensiveYardsRank =+ i + 1;

    	/*Passing yards rank*/
    	this.teams.sort((a, b) => {
            return b.PassingYards - a.PassingYards
        });
        	for(let i in this.teams) {
        		this.teams[i].PassingYardsRank = +i + 1;
        	}
    	/*Rushing yards rank*/
    	this.teams.sort((a, b) => {
            return b.RushingYards - a.RushingYards
        });
        	for(let i in this.teams) {
        		this.teams[i].RushingYardsRank = +i + 1;
        	}
    	/*Total scoring rank*/
    	this.teams.sort((a, b) => {return a.Score < b.Score});
    	for(let i in this.teams) {
    		this.teams[i].ScoreRank =+ i + 1;
    	}
    	/*Total TD's rank*/
    	this.teams.sort((a, b) => {return a.Touchdowns < b.Touchdowns});
    	for(let i in this.teams) {
    		this.teams[i].TouchdownsRank =+ i + 1;
    	}
    	/*Turnover differential rank*/
    	this.teams.sort((a, b) => {return a.TurnoverDifferential  < b.TurnoverDifferential });
    	for(let i in this.teams) {
    		this.teams[i].TurnoverDifferentialRank =+ i + 1;
    	}
    	/*Passing yards allowed rank*/
    	this.teams.sort((a, b) => {return a.OpponentPassingYards > b.OpponentPassingYards});
    	for(let i in this.teams) {
    		this.teams[i].OpponentPassingYardsRank =+ i + 1;
    	}
    	/*Rushing yards allowed rank*/
    	this.teams.sort((a, b) => {return a.OpponentRushingYards > b.OpponentRushingYards});
    	for(let i in this.teams) {
    		this.teams[i].OpponentRushingYardsRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.Takeaways < b.Takeaways});
    	for(let i in this.teams) {
    		this.teams[i].TakeawaysRank =+ i + 1;
    	}

    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.OffensiveYardsPerPlay < b.OffensiveYardsPerPlay});
    	for(let i in this.teams) {
    		this.teams[i].OffensiveYardsPerPlay =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.PassingYardsAtt < b.PassingYardsAtt});
    	for(let i in this.teams) {
    		this.teams[i].PassingYardsAttRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.PasserRating  < b.PasserRating });
    	for(let i in this.teams) {
    		this.teams[i].PasserRatingRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.ThirdDownPercentage < b.ThirdDownPercentage});
    	for(let i in this.teams) {
    		this.teams[i].ThirdDownPercentageRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.FirstDowns < b.FirstDowns});
    	for(let i in this.teams) {
    		this.teams[i].FirstDownsRank =+ i + 1;
    	}
    }
}

export default StatsService;
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
            OffensiveYards: 0,
            PassingYards: 0,
            PassingYardsPerAttempt: 0,
            PassingTouchdowns: 0,
            PasserRating: 0,
            CompletionPercentage: 0,
            RushingYards: 0,
            RushingTouchdowns: 0,
            RushingYardsPerAttempt: 0,
            TotalScore: 0,
            OpponentPassingYards: 0,
            OpponentRushingYards: 0,
            OpponentFirstDowns: 0,
            Sacks: 0,
            QuarterbackHits: 0,
            TacklesForLoss: 0,
            Takeaways: 0,
            FumblesForced: 0,
            PassesDefended: 0,
            OpponentScore: 0,
            ReturnYards: 0,
            PuntReturnYards: 0,
            KickReturnYards: 0,
            KickReturnLong: 0,
            PuntAverage: 0,
            PuntNetAverage: 0,
            FieldGoalAttempts: 0,
            FieldGoalsMade: 0,
            RedZoneAttempts: 0,
            RedZonePercentage: 0,
            ThirdDownAttempts: 0,
            ThirdDownPercentage: 0,
            FourthDownAttempts: 0,
            FourthDownPercentage: 0,
            GoalToGoAttempts: 0,
            GoalToGoPercentage: 0,
            TurnoverDifferential: 0
      }]

	this.calculateRank();
}

    getStatsFields() {
        return this.statsFields;
    }

    getAllTeams(year) {
        const {$http} = this;
        return $http.get("https://mysterious-falls-52077.herokuapp.com/season/" + year )
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

        /*-----Offensive Stats------*/

        /*Offensive Yards rank*/
        this.teams.sort((a, b) => {return a.OffensiveYards  < b.OffensiveYards });
            for(let i in this.teams) {
                this.teams[i].OffensiveYardsRank =+ i + 1;
            }

    	/*Passing yards rank*/
    	this.teams.sort((a, b) => {return b.PassingYards - a.PassingYards});
        	for(let i in this.teams) {
        		this.teams[i].PassingYardsRank = +i + 1;
        	}

        /*Passing yards per attempt rank*/
        this.teams.sort((a, b) => {return b.PassingYardsPerAttempt - a.PassingYardsPerAttempt});
            for(let i in this.teams) {
                this.teams[i].PassingYardsPerAttemptRank = +i + 1;
            }

        /*PassingTouchdowns rank*/
        this.teams.sort((a, b) => {return b.PassingTouchdowns - a.PassingTouchdowns});
            for(let i in this.teams) {
                this.teams[i].PassingTouchdownsRank = +i + 1;
            }

        /*PasserRating rank*/
        this.teams.sort((a, b) => {return a.PasserRating  < b.PasserRating });
        for(let i in this.teams) {
            this.teams[i].PasserRatingRank =+ i + 1;
        }

        /*CompletionPercentage rank*/
        this.teams.sort((a, b) => {return a.CompletionPercentage  < b.CompletionPercentage });
            for(let i in this.teams) {
                this.teams[i].CompletionPercentageRank =+ i + 1;
            }

    	/*Rushing yards rank*/
    	this.teams.sort((a, b) => {return b.RushingYards - a.RushingYards});
        	for(let i in this.teams) {
        		this.teams[i].RushingYardsRank = +i + 1;
        	}

        /*RushingTouchdowns rank*/
        this.teams.sort((a, b) => {return b.RushingTouchdowns - a.RushingTouchdowns});
            for(let i in this.teams) {
                this.teams[i].RushingTouchdownsRank = +i + 1;
            }

        /*RushingYardsPerAttempt rank*/
        this.teams.sort((a, b) => {
            return b.RushingYardsPerAttempt - a.RushingYardsPerAttempt});
            for(let i in this.teams) {
                this.teams[i].RushingYardsPerAttemptRank = +i + 1;
            }

    	/*Total scoring rank*/
    	this.teams.sort((a, b) => {return a.TotalScore < b.TotalScore});
        	for(let i in this.teams) {
        		this.teams[i].TotalScoreRank =+ i + 1;
        	}

        /*-----Defensive Stats------*/

    	/*OpponentPassingYards rank*/
    	this.teams.sort((a, b) => {return a.OpponentPassingYards < b.OpponentPassingYards});
        	for(let i in this.teams) {
        		this.teams[i].OpponentPassingYardsRank =+ i + 1;
        	}

    	/*OpponentRushingYards rank*/
    	this.teams.sort((a, b) => {return a.OpponentRushingYards  < b.OpponentRushingYards });
        	for(let i in this.teams) {
        		this.teams[i].OpponentRushingYardsRank =+ i + 1;
        	}

    	/*OpponentFirstDowns rank*/
    	this.teams.sort((a, b) => {return a.OpponentFirstDowns > b.OpponentFirstDowns});
        	for(let i in this.teams) {
        		this.teams[i].OpponentFirstDownsRank =+ i + 1;
        	}

    	/*Sacks rank*/
    	this.teams.sort((a, b) => {return a.Sacks > b.Sacks});
        	for(let i in this.teams) {
        		this.teams[i].SacksRank =+ i + 1;
        	}

    	/*QuarterbackHits rank*/
    	this.teams.sort((a, b) => {return a.QuarterbackHits < b.QuarterbackHits});
        	for(let i in this.teams) {
        		this.teams[i].QuarterbackHitsRank =+ i + 1;
        	}

    	/*TacklesForLoss rank*/
    	this.teams.sort((a, b) => {return a.TacklesForLoss < b.TacklesForLoss});
        	for(let i in this.teams) {
        		this.teams[i].TacklesForLossRank =+ i + 1;
        	}

    	/*Takeaways rank*/
    	this.teams.sort((a, b) => {return a.Takeaways < b.Takeaways});    
        	for(let i in this.teams) {
        		this.teams[i].TakeawaysRank =+ i + 1;
        	}

    	/*FumblesForced rank*/
    	this.teams.sort((a, b) => {return a.FumblesForced < b.FumblesForced});
        	for(let i in this.teams) {
        		this.teams[i].FumblesForcedRank =+ i + 1;
        	}

    	/*PassesDefended rank*/
    	this.teams.sort((a, b) => {return a.PassesDefended < b.PassesDefended});
        	for(let i in this.teams) {
        		this.teams[i].PassesDefendedRank =+ i + 1;
        	}

        /*OpponentScore rank*/
        this.teams.sort((a, b) => {return a.OpponentScore < b.OpponentScore});
            for(let i in this.teams) {
                this.teams[i].OpponentScoreRank =+ i + 1;
            }

        /*-----Special Teams Stats------*/

        /*ReturnYards rank*/
        this.teams.sort((a, b) => {return a.ReturnYards < b.ReturnYards});
            for(let i in this.teams) {
                this.teams[i].ReturnYardsRank =+ i + 1;
            }

        /*PuntReturnYards rank*/
        this.teams.sort((a, b) => {return a.PuntReturnYards  < b.PuntReturnYards });
            for(let i in this.teams) {
                this.teams[i].PuntReturnYardsRank =+ i + 1;
            }

        /*KickReturnYards rank*/
        this.teams.sort((a, b) => {return a.KickReturnYards > b.KickReturnYards});
            for(let i in this.teams) {
                this.teams[i].KickReturnYardsRank =+ i + 1;
            }

        /*KickReturnLong rank*/
        this.teams.sort((a, b) => {return a.KickReturnLong > b.KickReturnLong});
            for(let i in this.teams) {
                this.teams[i].KickReturnLongRank =+ i + 1;
            }

        /*PuntAverage rank*/
        this.teams.sort((a, b) => {return a.PuntAverage < b.PuntAverage});
            for(let i in this.teams) {
                this.teams[i].PuntAverageRank =+ i + 1;
            }

        /*PuntNetAverage rank*/
        this.teams.sort((a, b) => {return a.PuntNetAverage < b.PuntNetAverage});
            for(let i in this.teams) {
                this.teams[i].PuntNetAverageRank =+ i + 1;
            }

        /*FieldGoalAttempts rank*/
        this.teams.sort((a, b) => {return a.FieldGoalAttempts < b.FieldGoalAttempts});
            for(let i in this.teams) {
                this.teams[i].FieldGoalAttemptsRank =+ i + 1;
            }

        /*FieldGoalsMade rank*/
        this.teams.sort((a, b) => {return a.FieldGoalsMade < b.FieldGoalsMade});
            for(let i in this.teams) {
                this.teams[i].FieldGoalsMadeRank =+ i + 1;
            }

        /*-----Situational Stats------*/

        /*RedZoneAttempts rank*/
        this.teams.sort((a, b) => {return a.RedZoneAttempts < b.RedZoneAttempts});
            for(let i in this.teams) {
                this.teams[i].RedZoneAttemptsRank =+ i + 1;
            }

        /*RedZonePercentage rank*/
        this.teams.sort((a, b) => {return a.RedZonePercentage  < b.RedZonePercentage });
            for(let i in this.teams) {
                this.teams[i].RedZonePercentageRank =+ i + 1;
            }

        /*ThirdDownAttempts rank*/
        this.teams.sort((a, b) => {return a.ThirdDownAttempts > b.ThirdDownAttempts});
            for(let i in this.teams) {
                this.teams[i].ThirdDownAttemptsRank =+ i + 1;
            }

        /*ThirdDownPercentage rank*/
        this.teams.sort((a, b) => {return a.ThirdDownPercentage > b.ThirdDownPercentage});
            for(let i in this.teams) {
                this.teams[i].ThirdDownPercentageRank =+ i + 1;
            }

        /*FourthDownAttempts rank*/
        this.teams.sort((a, b) => {return a.FourthDownAttempts < b.FourthDownAttempts});
            for(let i in this.teams) {
                this.teams[i].FourthDownAttemptsRank =+ i + 1;
            }

        /*FourthDownPercentage rank*/
        this.teams.sort((a, b) => {return a.FourthDownPercentage < b.FourthDownPercentage});
            for(let i in this.teams) {
                this.teams[i].FourthDownPercentageRank =+ i + 1;
            }

        /*GoalToGoAttempts rank*/
        this.teams.sort((a, b) => {return a.GoalToGoAttempts < b.GoalToGoAttempts});
            for(let i in this.teams) {
                this.teams[i].GoalToGoAttemptsRank =+ i + 1;
            }

        /*GoalToGoPercentage rank*/
        this.teams.sort((a, b) => {return a.GoalToGoPercentage < b.GoalToGoPercentage});
            for(let i in this.teams) {
                this.teams[i].GoalToGoPercentageRank =+ i + 1;
            }

        /*TurnoverDifferential rank*/
        this.teams.sort((a, b) => {return a.TurnoverDifferential < b.TurnoverDifferential});
            for(let i in this.teams) {
                this.teams[i].TurnoverDifferentialRank =+ i + 1;
            }
    }
}

export default StatsService;
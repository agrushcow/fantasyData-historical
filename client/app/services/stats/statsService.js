class StatsService {
	constructor($resource, $http) {
		Object.assign(this, { $resource, $http });

        this.statsFields = {
            name:'stats',  
            orderByField: 'Team',
            reverseSort: false,
            PassingYards: true,
            RushingYards: true,
            Score: true,
            Touchdowns: true,
            TurnoverDifferential : true,
            OffensiveYards : false,
            OffensiveYardsPerPlay: false,
            PassingYardsAtt: false,
            PasserRating : false,
            ThirdDownPercentage: false,
            FirstDowns: false,
            Penalties: false        
        }

		this.teams = [{
            Team: '',
            PassingYards: 0,
            RushingYards: 0,
            Score: 0,
            Touchdowns: 0,
            TurnoverDifferential : 0,
            opponentPassingYards: 0,
            opponentRushingYards: 0,
            takeways: 0,
            OffensiveYards : 0,
            OffensiveYardsPerPlay: 0,
            PassingYardsAtt: 0,
            PasserRating : 0,
            ThirdDownPercentage: 0,
            FirstDowns: 0,
            Penalties: 0
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
        		this.teams[i].rushYdsRank = +i + 1;
        	}
    	/*Total scoring rank*/
    	this.teams.sort((a, b) => {return a.Score < b.Score});
    	for(let i in this.teams) {
    		this.teams[i].scoreRank =+ i + 1;
    	}
    	/*Total TD's rank*/
    	this.teams.sort((a, b) => {return a.Touchdowns < b.Touchdowns});
    	for(let i in this.teams) {
    		this.teams[i].tdsRank =+ i + 1;
    	}
    	/*Turnover differential rank*/
    	this.teams.sort((a, b) => {return a.TurnoverDifferential  < b.TurnoverDifferential });
    	for(let i in this.teams) {
    		this.teams[i].toDiffRank =+ i + 1;
    	}
    	/*Passing yards allowed rank*/
    	this.teams.sort((a, b) => {return a.opponentPassingYards > b.opponentPassingYards});
    	for(let i in this.teams) {
    		this.teams[i].opponentPassingYardsRank =+ i + 1;
    	}
    	/*Rushing yards allowed rank*/
    	this.teams.sort((a, b) => {return a.opponentRushingYards > b.opponentRushingYards});
    	for(let i in this.teams) {
    		this.teams[i].opponentRushingYardsRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.takeaways < b.takeaways});
    	for(let i in this.teams) {
    		this.teams[i].takeawaysRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.OffensiveYards  < b.OffensiveYards });
    	for(let i in this.teams) {
    		this.teams[i].offYdsRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.OffensiveYardsPerPlay < b.OffensiveYardsPerPlay});
    	for(let i in this.teams) {
    		this.teams[i].offYdsPlayRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.PassingYardsAtt < b.PassingYardsAtt});
    	for(let i in this.teams) {
    		this.teams[i].PassingYardsAttRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.PasserRating  < b.PasserRating });
    	for(let i in this.teams) {
    		this.teams[i].passRtgRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.ThirdDownPercentage < b.ThirdDownPercentage});
    	for(let i in this.teams) {
    		this.teams[i].thirdDownPercRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.FirstDowns < b.FirstDowns});
    	for(let i in this.teams) {
    		this.teams[i].firstDownsRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.Penalties > b.Penalties});
    	for(let i in this.teams) {
    		this.teams[i].penaltiesRank =+ i + 1;
    	}
    }
}

export default StatsService;
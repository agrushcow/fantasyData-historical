class StatsService {
	constructor($resource, $http) {
		Object.assign(this, { $resource, $http });

        this.statsFields = {
            name:'stats',  
            orderByField: 'team',
            reverseSort: false,
            PassingYards: true,
            RushYards: true,
            Score: true,
            Tds: true,
            toDiff: true,
            offYds: false,
            offYdsPlay: false,
            PassingYardsAtt: false,
            passRtg: false,
            passRtg: false,
            thirdDownPerc: false,
            firstDowns: false,
            penalties: false        
        }

		this.teams = [{
        team: 'ARI',
        TeamName: 'Arizona Cardinals',
        PassingYards: 3200,
        rushYds: 1200,
        score: 320,
        tds: 15,
        toDiff: 5,
        opponentPassingYards: 3100,
        opponentRushingYards: 1300,
        takeways: 25,
        offYds: 4500,
        offYdsPlay: 7,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      },{
        team: 'ATL',
        TeamName: 'Atlanta Falcons',
        PassingYards: 3100,
        rushYds: 1100,    
        score: 390,
        tds: 12,
        toDiff: -3, 
        opponentPassingYards: 3700,
        opponentRushingYards: 1200,
        takeways: 28,
        offYds: 4500,
        offYdsPlay: 8,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      },{
        team: 'BAL',
        TeamName: 'Baltimore Ravens',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CIN',
        TeamName: 'Cincinnati Bengals',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CHI',
        TeamName: 'Chicago Bears',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CAR',
        TeamName: 'Carolina Panthers',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'MIA',
        TeamName: 'Miami Dolphins',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NYJ',
        TeamName: 'New York Jets',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DET',
        TeamName: 'Detroit Lions',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DAL',
        TeamName: 'Dallas Cowboys',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DEN',
        TeamName: 'Denver Broncos',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NO',
        TeamName: 'New Orleans Saints',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'TB',
        TeamName: 'Tampa Bay Bucaneers',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'SEA',
        TeamName: 'Seattle Seahawks',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'STL',
        TeamName: 'St. Louis Rams',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NE',
        TeamName: 'New England Patriots',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'KC',
        TeamName: 'Kansas City Chiefs',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'OAK',
        TeamName: 'Oakland Raiders',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'IND',
        TeamName: 'Indianapolis Colts',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90       
      }, {
        team: 'JAX',
        TeamName: 'Jacksonville Jaguars',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'TEN',
        TeamName: 'Tennessee Titans',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'BUF',
        TeamName: 'Buffalo Bills',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'PIT',
        TeamName: 'Pittsburgh Steelers',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90   
      }, {
        team: 'CLE',
        TeamName: 'Cleveland Browns',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'HOU',
        TeamName: 'Houston Texans',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NYG',
        TeamName: 'New York Giants',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'WAS',
        TeamName: 'Washington Redskins',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90      
      }, {
        team: 'PHI',
        TeamName: 'Philadelphia Eagles',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'GB',
        TeamName: 'Green Bay Packers',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'MIN',
        TeamName: 'Minesota Vikings',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'SF',
        TeamName: 'San Francisco 49ers',
        PassingYards: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90  
      }, {
        team: 'SD',
        TeamName: 'San Diego Chargers',
        PassingYards: 3900,
        rushYds: 2500,  
        score: 650,
        tds: 32,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        PassingYardsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90              
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
            if (this.teams[i].team === index) {
                return this.teams[i];
            }
        }
    }

    /*Calculates the rank in each statistical category of a given team against other teams*/
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
            return b.rushYds - a.rushYds
        });
        	for(let i in this.teams) {
        		this.teams[i].rushYdsRank = +i + 1;
        	}
    	/*Total scoring rank*/
    	this.teams.sort((a, b) => {return a.score < b.score});
    	for(let i in this.teams) {
    		this.teams[i].scoreRank =+ i + 1;
    	}
    	/*Total TD's rank*/
    	this.teams.sort((a, b) => {return a.tds < b.tds});
    	for(let i in this.teams) {
    		this.teams[i].tdsRank =+ i + 1;
    	}
    	/*Turnover differential rank*/
    	this.teams.sort((a, b) => {return a.toDiff < b.toDiff});
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
    	this.teams.sort((a, b) => {return a.offYds < b.offYds});
    	for(let i in this.teams) {
    		this.teams[i].offYdsRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.offYdsPlay < b.offYdsPlay});
    	for(let i in this.teams) {
    		this.teams[i].offYdsPlayRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.PassingYardsAtt < b.PassingYardsAtt});
    	for(let i in this.teams) {
    		this.teams[i].PassingYardsAttRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.passRtg < b.passRtg});
    	for(let i in this.teams) {
    		this.teams[i].passRtgRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.thirdDownPerc < b.thirdDownPerc});
    	for(let i in this.teams) {
    		this.teams[i].thirdDownPercRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.firstDowns < b.firstDowns});
    	for(let i in this.teams) {
    		this.teams[i].firstDownsRank =+ i + 1;
    	}
    	/*Total takeaways rank*/
    	this.teams.sort((a, b) => {return a.penalties > b.penalties});
    	for(let i in this.teams) {
    		this.teams[i].penaltiesRank =+ i + 1;
    	}
    }
}

export default StatsService;
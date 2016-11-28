class StatsService {
	constructor($resource) {
		Object.assign(this, { $resource });

        this.statsFields = {
            name:'stats',  
            orderByField: 'team',
            reverseSort: false,
            passYds: true,
            rushYds: true,
            score: true,
            tds: true,
            toDiff: true,
            offYds: false,
            offYdsPlay: false,
            passYdsAtt: false,
            passRtg: false,
            passRtg: false,
            thirdDownPerc: false,
            firstDowns: false,
            penalties: false        
        }

		this.teams = [{
        team: 'ARI',
        teamName: 'Arizona Cardinals',
        passYds: 3200,
        rushYds: 1200,
        score: 320,
        tds: 15,
        toDiff: 5,
        opponentPassingYards: 3100,
        opponentRushingYards: 1300,
        takeways: 25,
        offYds: 4500,
        offYdsPlay: 7,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      },{
        team: 'ATL',
        teamName: 'Atlanta Falcons',
        passYds: 3100,
        rushYds: 1100,    
        score: 390,
        tds: 12,
        toDiff: -3, 
        opponentPassingYards: 3700,
        opponentRushingYards: 1200,
        takeways: 28,
        offYds: 4500,
        offYdsPlay: 8,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      },{
        team: 'BAL',
        teamName: 'Baltimore Ravens',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CIN',
        teamName: 'Cincinnati Bengals',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CHI',
        teamName: 'Chicago Bears',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CAR',
        teamName: 'Carolina Panthers',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'MIA',
        teamName: 'Miami Dolphins',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NYJ',
        teamName: 'New York Jets',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DET',
        teamName: 'Detroit Lions',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DAL',
        teamName: 'Dallas Cowboys',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DEN',
        teamName: 'Denver Broncos',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NO',
        teamName: 'New Orleans Saints',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'TB',
        teamName: 'Tampa Bay Bucaneers',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'SEA',
        teamName: 'Seattle Seahawks',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'STL',
        teamName: 'St. Louis Rams',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NE',
        teamName: 'New England Patriots',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'KC',
        teamName: 'Kansas City Chiefs',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'OAK',
        teamName: 'Oakland Raiders',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'IND',
        teamName: 'Indianapolis Colts',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90       
      }, {
        team: 'JAX',
        teamName: 'Jacksonville Jaguars',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'TEN',
        teamName: 'Tennessee Titans',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'BUF',
        teamName: 'Buffalo Bills',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'PIT',
        teamName: 'Pittsburgh Steelers',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90   
      }, {
        team: 'CLE',
        teamName: 'Cleveland Browns',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'HOU',
        teamName: 'Houston Texans',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NYG',
        teamName: 'New York Giants',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'WAS',
        teamName: 'Washington Redskins',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90      
      }, {
        team: 'PHI',
        teamName: 'Philadelphia Eagles',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'GB',
        teamName: 'Green Bay Packers',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'MIN',
        teamName: 'Minesota Vikings',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'SF',
        teamName: 'San Francisco 49ers',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90  
      }, {
        team: 'SD',
        teamName: 'San Diego Chargers',
        passYds: 3900,
        rushYds: 2500,  
        score: 650,
        tds: 32,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
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
    	return this.teams;
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
            return b.passYds - a.passYds
        });
        	for(let i in this.teams) {
        		this.teams[i].passYdsRank = +i + 1;
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
    	this.teams.sort((a, b) => {return a.passYdsAtt < b.passYdsAtt});
    	for(let i in this.teams) {
    		this.teams[i].passYdsAttRank =+ i + 1;
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
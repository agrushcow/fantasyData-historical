class TeamPageController {
  constructor(StatsService, $stateParams) {
    this.statsFields = StatsService.getStatsFields();
    StatsService.getAllTeams().then(
        (data) => {
/*            this.teams = data[this.teamIndex]; 
            console.log(this.teamIndex);*/
            this.teams = data;
            for(var i = 0; i < data.length; i++) {
                if(this.teamIndex == this.teams[i].Team) {

                    this.TeamName = this.teams[i].TeamName;
                    this.OffensiveYardsRank = this.teams[i].OffensiveYardsRank;
                    this.PassingYards = this.teams[i].PassingYardsRank;
                    this.PassingYardsPerAttempt = this.teams[i].PassingYardsPerAttemptRank;
                    this.PassingTouchdowns = this.teams[i].PassingTouchdownsRank;
                    this.PasserRating  = this.teams[i].PasserRatingRank;
                    this.CompletionPercentage = this.teams[i].CompletionPercentageRank;
                    this.RushingYards = this.teams[i].RushingYardsRank;
                    this.RushingTouchdowns = this.teams[i].RushingTouchdownsRank;
                    this.RushingYardsPerAttempt = this.teams[i].RushingYardsPerAttemptRank;
                    this.TotalScore = this.teams[i].TotalScoreRank;

                    this.TeamName = this.teams[i].TeamName;
                    this.OffensiveYardsRank = this.teams[i].OffensiveYardsRank;
                    this.PassingYards = this.teams[i].PassingYardsRank;
                    this.PassingYardsPerAttempt = this.teams[i].PassingYardsPerAttemptRank;
                    this.PassingTouchdowns = this.teams[i].PassingTouchdownsRank;
                    this.PasserRating  = this.teams[i].PasserRatingRank;
                    this.CompletionPercentage = this.teams[i].CompletionPercentageRank;
                    this.RushingYards = this.teams[i].RushingYardsRank;
                    this.RushingTouchdowns = this.teams[i].RushingTouchdownsRank;
                    this.RushingYardsPerAttempt = this.teams[i].RushingYardsPerAttemptRank;
                }
            }      
        });

    this.name = 'teamPage';
    this.teamIndex = $stateParams.index;


    //console.log(this.teamIndex);

    // this.team = StatsService.getTeam(this.teamIndex);
    // console.log(this.team);
/*    console.log(this.statsFields);
    this.offYdsRank = this.team.offYds;
    this.offYdsPlayRank = this.team.offYdsPlay;
    this.passYdsAttRank = this.team.passYdsAtt;
    this.passRtgRank = this.team.passRtg;
    this.passYdsRank = this.team.passYdsRank;
    this.rushYdsRank = this.team.rushYdsRank;
    this.scoreRank = this.team.scoreRank;
    this.tdsRank = this.team.tdsRank;
    this.thirdDownPercRank = this.team.thirdDownPerc;
    this.firstDownsRank = this.team.firstDowns;

    this.opponentPassingYardsRank = this.team.opponentPassingYards;
    this.opponentRushingYardsRank = this.team.opponentRushingYards;
    this.takewaysRank = this.team.takeways;
    this.toDiffRank = this.team.toDiff;
    this.penaltiesRank = this.team.penalties;*/
  }
}

export default TeamPageController;


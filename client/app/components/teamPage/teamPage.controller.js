class TeamPageController {
  constructor(StatsService, $stateParams) {
    this.name = 'teamPage';
    this.teamIndex = $stateParams.index;
    this.team = StatsService.getTeam(this.teamIndex);
    this.teamName = this.team.teamName;
    this.statsFields = StatsService.getStatsFields();

    console.log(this.statsFields);
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
    this.penaltiesRank = this.team.penalties;
  }
}

export default TeamPageController;


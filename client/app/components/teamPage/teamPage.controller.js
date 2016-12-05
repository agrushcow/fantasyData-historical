class TeamPageController {
  constructor(StatsService, $stateParams) {
    this.statsFields = StatsService.getStatsFields();
    StatsService.getAllTeams().then(
        (data) => {
            this.teams = data;
            console.log(this.teams);
            for(var i = 0; i < data.length; i++) {
                if(this.teamIndex == this.teams[i].Team) {

                    this.TeamName = this.teams[i].TeamName;
                    this.OffensiveYardsRank = this.teams[i].OffensiveYardsRank;
                    this.PassingYardsRank = this.teams[i].PassingYardsRank;
                    this.PassingYardsPerAttemptRank = this.teams[i].PassingYardsPerAttemptRank;
                    this.PassingTouchdownsRank = this.teams[i].PassingTouchdownsRank;
                    this.PasserRatingRank  = this.teams[i].PasserRatingRank;
                    this.CompletionPercentageRank = this.teams[i].CompletionPercentageRank;
                    this.RushingYardsRank = this.teams[i].RushingYardsRank;
                    this.RushingTouchdownsRank = this.teams[i].RushingTouchdownsRank;
                    this.RushingYardsPerAttemptRank = this.teams[i].RushingYardsPerAttemptRank;
                    this.TotalScoreRank = this.teams[i].TotalScoreRank;

                    this.OpponentPassingYardsRank = this.teams[i].OpponentPassingYardsRank;
                    this.OpponentRushingYardsRank = this.teams[i].OpponentRushingYardsRank;
                    this.OpponentFirstDownsRank = this.teams[i].OpponentFirstDownsRank;
                    this.SacksRank = this.teams[i].SacksRank;
                    this.QuarterbackHitsRank = this.teams[i].QuarterbackHitsRank;
                    this.TacklesForLossRank  = this.teams[i].TacklesForLossRank;
                    this.TakeawaysRank = this.teams[i].TakeawaysRank;
                    this.FumblesForcedRank = this.teams[i].FumblesForcedRank;
                    this.PassesDefendedRank = this.teams[i].PassesDefendedRank;
                    this.OpponentScoreRank = this.teams[i].OpponentScoreRank;

                    this.ReturnYardsRank = this.teams[i].ReturnYardsRank;
                    this.PuntReturnYardsRank = this.teams[i].PuntReturnYardsRank;
                    this.KickReturnYardsRank = this.teams[i].KickReturnYardsRank;
                    this.KickReturnLongRank  = this.teams[i].KickReturnLongRank;
                    this.PuntAverageRank = this.teams[i].PuntAverageRank;
                    this.PuntNetAverageRank = this.teams[i].PuntNetAverageRank;
                    this.FieldGoalAttemptsRank = this.teams[i].FieldGoalAttemptsRank;
                    this.FieldGoalsMadeRank = this.teams[i].FieldGoalsMadeRank;

                    this.RedZoneAttemptsRank = this.teams[i].RedZoneAttemptsRank;
                    this.RedZonePercentageRank = this.teams[i].RedZonePercentageRank;
                    this.ThirdDownAttemptsRank = this.teams[i].ThirdDownAttemptsRank;
                    this.ThirdDownPercentageRank  = this.teams[i].ThirdDownPercentageRank;
                    this.FourthDownAttemptsRank = this.teams[i].FourthDownAttemptsRank;
                    this.FourthDownPercentageRank = this.teams[i].FourthDownPercentageRank;
                    this.GoalToGoAttemptsRank = this.teams[i].GoalToGoAttemptsRank;
                    this.GoalToGoPercentageRank = this.teams[i].GoalToGoPercentageRank;
                    this.TurnoverDifferentialRank = this.teams[i].TurnoverDifferentialRank;
                }
            }      
        });

    this.name = 'teamPage';
    this.teamIndex = $stateParams.index;
  }
}

export default TeamPageController;


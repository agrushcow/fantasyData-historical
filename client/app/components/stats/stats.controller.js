class StatsController {
  constructor(StatsService, $rootScope) {
    this.statsFields = StatsService.getStatsFields();
    this.teamData = StatsService.getAllTeams();

    $rootScope.$watch('orderByField', () => {
        this.reverseSort = false;
        console.log("Field changed");
    });
    
  }
}

export default StatsController;
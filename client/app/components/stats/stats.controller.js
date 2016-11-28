class StatsController {
  constructor(StatsService, $rootScope) {
    this.statsFields = StatsService.getStatsFields();
    StatsService.getAllTeams().then(
        (data) => {
        	this.teams = data; 
        	console.log(this.teams);
        });

    $rootScope.$watch('orderByField', () => {
        this.reverseSort = false;
        console.log("Field changed");
    });
    
  }
}

export default StatsController;
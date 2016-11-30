class StatsController {
  constructor(StatsService, $rootScope, $state) {
    console.log($state.params.year);
    this.statsFields = StatsService.getStatsFields();
    StatsService.getAllTeams($state.params.year).then(
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
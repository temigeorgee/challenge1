const cost = [[1, 2, 3], [1, 2, 3], [3, 3, 1]];

function minCost(cost){

    if (cost.length < 1 || cost.length >100) {
        // Check for constraints 1 ≤ n ≤ 100
        console.log('Cost array too long');
    } else {

        
        let minArray = [];
        let minArrayIndex = [];

        
        for( i=0; i<cost.length; i++ ){

           
            let minCostI = Math.min(...cost[i]);
           
            let indexMinCostI = cost[i].indexOf(minCostI);

            
            if (minArrayIndex[0] == indexMinCostI){

                
                cost[i].splice(indexMinCostI, 1);
                let newMinCostI = Math.min(...cost[i]);
                let newIndexMinCostI = cost[i].indexOf(minCostI)

               
                minArray.push(newMinCostI);
                minArrayIndex.pop();
                minArrayIndex.push(newIndexMinCostI);

            } else {

                minArray.push(minCostI);
                minArrayIndex.pop();
                minArrayIndex.push(indexMinCostI);

            }

        }
       
        console.log('Minimum costs array : ', minArray);

       
        // a is sum, b is element of array
        var minimumCost = minArray.reduce(function(a, b){
            return a + b;
        }, 0);

        console. log('Minimum cost to build the houses : ', minimumCost); 

    }

}


minCost(cost)
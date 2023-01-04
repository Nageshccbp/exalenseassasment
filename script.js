function apartmentHunting(blocks, reqs) {
    // Write your code here.
    let count_list=[]
    //hear we are taking each block from list by using this loop
    for (let eachBlock of blocks) {
        //need to count how many possiblities so we need to keep acount on it
        let count = 0;
        //by using this loop we are picking out the keys in an building object so that we can cheack the keys that are matching with given question
        for (let key of Object.keys(eachBlock)){

            for (let item of reqs){
                if (key === item){
                    //hear we are using an condition that in each block wether it is true are false 
                    //if true we are incrimenting count by 1
                    if(eachBlock[key]===true){
                        count +=1 ;
                    }
                }
            
            }
        }
        //hear after cheacking each block possiblites we are appending the count into an list
        count_list.push(count)
    }
    //and finally we will get list of counts and in that we will take and max count number
    let max_count = Math.max(...count_list)
    //and printing the result index which is same as the block index
    console.log((count_list.indexOf(max_count))+1)
  }
  
  
  
const blocks = [
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": true,
    }
    ]
    
var reqs = ["gym", "school", "store"]
apartmentHunting(blocks,reqs)
    
exports.apartmentHunting = apartmentHunting;   

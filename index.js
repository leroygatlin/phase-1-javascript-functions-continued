// code your solution here
function saturdayFun(activity = 'roller-skate'){

    return (`This Saturday, I want to ${activity}!`)
    }
    
    console.log(saturdayFun("Pick up my son"))
    console.log(saturdayFun())
    
    function mondayWork(activity = 'go to the office'){
    
        return (`This Monday, I will ${activity}.`)
    }
    
    // console.log(mondayWork("work from home"))
    
    // function outer(statement, msg = 'You are !'){
        // const innerfunction = function (compliment = "special")}
        // return `You are ${compliment}!`;
    // };
    // return innerfunction;
    
    // }
    
    function wrapAdjective(symbol = '*'){
        return function innerfunnction(adjective = 'special'){
    
    
            return `You are ${symbol}${adjective}${symbol}!`
        }
    }
    
    console.log(wrapAdjective()());
    console.log(wrapAdjective('^')('silly'));
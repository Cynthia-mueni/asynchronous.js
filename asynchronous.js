async function logMessage(message,delay){
        await new Promise(resolve=>
             setTimeOut(resolve,delay));
        console.log(message)
    
}
logMessage("wait for few 4sec")


const users=getUser({ ids: [ '1', '2', '3', '4' ] });
async function getUser(){
    for (const id of users){
        try{
            const usersData= await usersData(id);
            console.log(usersData)
        }
        catch(error){
            console.log(`the users can't be found$[id];${error}`);
        }
    }
}
getUser()
//4

async function performTask(){
    try{
        await performTask()
        console.log("Task completed successfully");
    }
    catch{
        console.log("error occured")
    }
}

function unstableTask(taskNmae,failureProbability){
    return new Promise((resolve,reject)=>{
        const randomNumber=Math.random()
        if (randomNumber > failureProbaility){
           resolve(`Task ${taskNmae}succeeded`)
        }else{
           reject(`Task ${taskNmae}failed`)
        }  
    })
}
import {React} from 'react';

const Randomizer = () => {
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const vowels = ['a','e','i','o','u']
    const easy_l = ['g','l','m','n','p','r','s']
    const medium_l = ['b','c','d','f','h','t','j','k']
    const hard_l = ['w','q','v','x','y','z']

    let dir = [[],[],[],[]]
    let ot = []

    let tempV = structuredClone(vowels);
    let dirIndex = [0,0,0,0]
    for(let i = 0; i < 4; i++){
        dirIndex[i] = getRandomInt(5-i)
    }

    dir[0].push(tempV[dirIndex[0]])
    tempV.splice(dirIndex[0],1)
    dir[1].push(tempV[dirIndex[1]])
    tempV.splice(dirIndex[1],1)
    dir[2].push(tempV[dirIndex[2]])
    tempV.splice(dirIndex[2],1)
    dir[3].push(tempV[dirIndex[3]])

    let rand
    
    let tempE = structuredClone(easy_l);
    let tempM = structuredClone(medium_l);

    for(let i = 0; i < 8; i++){
        if(i < 4){
            rand = getRandomInt(7-i)
            ot.push(tempE[rand])
            tempE.splice(rand,1)
        }else{
            if(i < 7){
                rand = getRandomInt(8-i)
                ot.push(tempM[rand])
                tempM.splice(rand,1)
            }else{
                ot.push(hard_l[getRandomInt(6)])
            }
        }
    }
    
    shuffle(ot)
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 2; j++){
            dir[i].push(ot[(2*i)+j])
        }
    }

    return (
        <div>
            <h1 style={{fontFamily:"monospace", fontSize:"40px", margin:"auto", width:"50%", marginBottom:"20px"}}>
                {dir[0].toString()}<br />
                {dir[1].toString()}<br />
                {dir[2].toString()}<br />
                {dir[3].toString()}<br />
            </h1>
        </div>
    )
}
export default Randomizer
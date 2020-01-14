module.exports = {

    shuffleItems: (data) => {
        let shuffledData = []
        let trueOrFalse = ()=>{
            let randomNumber = Math.random()
            if (randomNumber > 0.5){
                return true
            }else{
                return false
            }
        }

        data.forEach(item=>{
            if(trueOrFalse()){
                shuffledData.unshift(item)
            }else{
                shuffledData.push(item)
            }

        })
        return shuffledData
    }
}

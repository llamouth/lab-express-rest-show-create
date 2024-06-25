const sortOrder = (arr, order) => {
    const copyOfArray = [...arr]
    if(order === "asc"){
        return copyOfArray.sort((a, b) => a.title.localeCompare(b.title))
    }else if(order === "desc"){
        return copyOfArray.sort((a, b) => b.title.localeCompare(a.title))
    }else {
        return {error: "invalid sort Method"}
    }
}

const filterMistakes = (arr, mistake) => {
    const copyOfArray = [...arr]
    if(mistake === "true"){
        return copyOfArray.filter(log => log.mistakesWereMadeToday)
    }else {
        return copyOfArray.filter(log => !log.mistakesWereMadeToday)
    }
}

const filterLastCrisis = (arr, crisis) => {
    const copyOfArray = [...arr]
    const number = crisis.slice(3)
    console.log(number)
    if(number == 5) {
       return copyOfArray.filter(log => log.daysSinceLastCrisis <= 5) 
    }else if(number == 10) {
       return copyOfArray.filter(log => log.daysSinceLastCrisis >= 10) 
    }else {
       return copyOfArray.filter(log => log.daysSinceLastCrisis >= 20) 
    }
}

module.exports = {sortOrder, filterMistakes, filterLastCrisis}
var yearCL = document.getElementById('yearCL')
var roundCL = document.getElementById('roundCL')
var teams = document.getElementById('teams')


async function getTeam (yearVal,roundVal){
    yearVal = yearCL.value
    roundVal = roundCL.value
    teams.innerHTML = ''
    if(roundVal == 'Round 16'){
        const result1 = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${yearVal}&page=10`)
        const result2 = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${yearVal}&page=11`)
        const res1 = await result1.json()
        const res2 = await result2.json()
        const data1 = res1.data
        const data2 = res2.data
        const arr = []
        data1.forEach(el => {
            if(el.round === 'R16'){
                arr.push(el.team1)
                arr.push(el.team2)
            }
        })
        data2.forEach(el => {
            arr.push(el.team1)
            arr.push(el.team2)
        })
        const resArr = [...new Set(arr)]
        resArr.sort().forEach(el => {
            let elem = document.createElement('li')
            elem.innerHTML = el
            teams.appendChild(elem)
        })
    }else if(roundVal == 'Quarter Finals'){
        const result = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${yearVal}&page=12`)
        const res = await result.json()
        const data = res.data
        const arr = []
        data.forEach(el => {
            if(el.round === 'QF'){
                arr.push(el.team1)
                arr.push(el.team2)
            }
        })
        const resArr = [...new Set(arr)]
        resArr.sort().forEach(el => {
            let elem = document.createElement('li')
            elem.innerHTML = el
            teams.appendChild(elem)
        })
    }else if(roundVal == 'Semi Finals'){
        const result = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${yearVal}&page=13`)
        const res = await result.json()
        const data = res.data
        const arr = []
        data.forEach(el => {
            if(el.round === 'SF'){
                arr.push(el.team1)
                arr.push(el.team2)
            }
        })
        const resArr = [...new Set(arr)]
        resArr.sort().forEach(el => {
            let elem = document.createElement('li')
            elem.innerHTML = el
            teams.appendChild(elem)
        })
    }else if(roundVal == 'Final'){
        const result = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${yearVal}&page=13`)
        const res = await result.json()
        const data = res.data
        const arr = []
        data.forEach(el => {
            if(el.round === 'final'){
                arr.push(el.team1)
                arr.push(el.team2)
            }
        })
        const resArr = [...new Set(arr)]
        resArr.sort().forEach(el => {
            let elem = document.createElement('li')
            elem.innerHTML = el
            teams.appendChild(elem)
        })
    }else if(roundVal == 'Winner'){
        getWinner(yearVal)
    }
}

async function getWinner(year){
    const result = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=13`)
    const res = await result.json()
    const data = res.data
    const final = data[data.length - 1]
    if(final.team1goals > final.team2goals){
        let winner = final.team1
        let elem = document.createElement('li')
        elem.style.listStyle = 'none'
        elem.innerHTML = `${year} Champions League Winner is ${winner}`
        teams.appendChild(elem)
    }else{
        let winner = final.team2
        let elem = document.createElement('li')
        elem.style.listStyle = 'none'
        elem.innerHTML = `${year} Champions League Winner is ${winner}`
        teams.appendChild(elem)
    }
}


yearCL.addEventListener('change', getTeam)
roundCL.addEventListener('change',getTeam)


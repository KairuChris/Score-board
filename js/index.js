let homeBtns = document.getElementsByClassName('home')
let homeScore = document.getElementById('home-score')
let homeReset = document.getElementsByClassName('home-reset')[0]
let homeScoreCount = 0

let leadingTeam = document.getElementById('leading')

let guestBtns = document.getElementsByClassName('guest')
let guestScore = document.getElementById('guest-score')
let guestReset = document.getElementsByClassName('guest-reset')[0]
let guestScoreCount = 0

//for the home buttons
for(let i = 0; i < homeBtns.length;i++){
    let clicked = homeBtns[i]
    clicked.addEventListener('click',function(event){
        let homeIncrement = event.target
        homeScoring(homeIncrement)

        if(homeScoreCount > guestScoreCount){
            leadingTeam.innerText = 'Home'
        }
    })
}
homeReset.addEventListener('click',()=>{
    homeScore.innerText = '00'
    homeScoreCount = 0

    if(homeScoreCount > guestScoreCount){
        leadingTeam.innerText = 'Home'
    }else if(guestScoreCount > homeScoreCount){
        leadingTeam.innerText = 'Guest'
    }else{
        leadingTeam.innerText = ''
    }
})


//for the guest buttons
for(let i = 0; i < guestBtns.length;i++){
    let clicked = guestBtns[i]
    clicked.addEventListener('click',function(event){
        let guestIncrement = event.target
        guestScoring(guestIncrement)

        if(guestScoreCount > homeScoreCount){
            leadingTeam.innerText = 'Guest'
        }
    })
}
guestReset.addEventListener('click',()=>{
    guestScore.innerText = '00'
    guestScoreCount = 0
    if(guestScoreCount > homeScoreCount){
        leadingTeam.innerText = 'Guest'
    }else if(homeScoreCount > guestScoreCount){
        leadingTeam.innerText = 'Home'
    }else{
        leadingTeam.innerText = ''
    }
})



function homeScoring(homeIncrement){
    let clicked = homeIncrement
    switch(clicked.innerText){
        case '+1':
            homeScoreCount += 1
            homeScore.innerText = homeScoreCount 
            break;
        case '+2':
            homeScoreCount += 2
            homeScore.innerText = homeScoreCount
            break;
        case '+3':
            homeScoreCount += 3
            homeScore.innerText = homeScoreCount
            break;
    }
}

function guestScoring(guestIncrement){
    let clicked = guestIncrement
    switch(clicked.innerText){
        case '+1':
            guestScoreCount += 1
            guestScore.innerText = guestScoreCount 
            break;
        case '+2':
            guestScoreCount += 2
            guestScore.innerText = guestScoreCount
            break;
        case '+3':
            guestScoreCount += 3
            guestScore.innerText = guestScoreCount
            break;
    }
}
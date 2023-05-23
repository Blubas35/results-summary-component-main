async function init() {
    const res = await fetch(`./data.json`)
    const users = await res.json()

    const userScoreWrapper = document.querySelector('.user-score-wrapper')
    const colorArr = ['red', 'yellow', 'green', 'blue']

    users.forEach((user, index) => {
        let { category, score, icon } = user

        const skillDivWrapper = document.createElement('div')
        skillDivWrapper.classList.add('skill-wrapper', `${colorArr[index % colorArr.length]}`)

        const skillIcon = document.createElement('img')
        skillIcon.classList.add('skill-icon')
        skillIcon.src = icon
        const skillTitle = document.createElement('h2')
        skillTitle.classList.add('skill-title')
        skillTitle.textContent = category

        const skillScoreWrapper = document.createElement('div')
        skillScoreWrapper.classList.add('skill-score-wrapper')
        const skillScore = document.createElement('span')
        skillScore.classList.add('skill-score')
        skillScore.textContent = score
        const skillScoreMax = document.createElement('span')
        skillScoreMax.classList.add('skill-score-max')
        skillScoreMax.textContent = ` / 100`
        skillScoreWrapper.append(skillScore, skillScoreMax)

        skillDivWrapper.append(skillIcon, skillTitle, skillScoreWrapper)
        userScoreWrapper.append(skillDivWrapper)
    })

    const submitBtn = document.createElement('button')
    submitBtn.classList.add('continue-btn')
    submitBtn.textContent = 'Continue'

    
    userScoreWrapper.append(submitBtn)
}
init()
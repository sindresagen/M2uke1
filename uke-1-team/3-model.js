const appDiv = document.getElementById("app")
const model = {
    logInPage: {
        adminUser: [
            {userName: 'team4', isPasswordProtected: true},
        ],
        adminPwd: 'Getacademy',

        normalUser: [
            {userName: '', isPasswordProtected: false},
        ],    
    },

    newPollPage: {
        polls: [{
            newQuestion: "",
            multipleChoice: false,
            answers: [],
            pollDate: [{
                dateCreated: [],
                expireDate: [],
            }]
        }],     
    },
    
    surveyPage: {
        userAnswers: [{
            answerCount: [],
            answerPercentage: [],
        }],
        endPoll: '',
    },

    pollPageOverview: {
            searchPoll: '',
            endPoll: '',
            addNewPoll: '',
            choosePreviusPoll: '',
    },
}

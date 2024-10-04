function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
})
// document.getElementById('surveyForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Calculate total score
//     let totalScore = 0;

//     // Questions 1, 4, 7, 9, and 10
//     totalScore += calculateScore('q1');
//     totalScore += calculateScore('q4');
//     totalScore += calculateScore('q7');
//     totalScore += calculateScore('q9');
//     totalScore += calculateScore('q10');

//     // Questions 2, 3, 5, 6, and 8
//     totalScore += calculateConcernScore('q2');
//     totalScore += calculateConcernScore('q3');
//     totalScore += calculateConcernScore('q5');
//     totalScore += calculateConcernScore('q6');
//     totalScore += calculateConcernScore('q8');

//     // Determine feedback
//     let feedback = '';

//     if (totalScore >= 45) {
//         feedback = "Your mental health appears to be in a concerning state. It's important to seek professional help and support.";
//     } else if (totalScore >= 30) {
//         feedback = "Your mental health is showing signs of strain. Consider seeking support and implementing self-care strategies.";
//     } else {
//         feedback = "Your mental health seems relatively stable. Keep up with healthy habits and seek support if needed.";
//     }

//     // Display result with feedback
//     const resultElement = document.getElementById('result');
//     resultElement.innerHTML = `<h2>Survey Result</h2><p>Total Score: ${totalScore}</p><p>${feedback}</p>`;
// });

// // Calculate score for questions 1, 4, 7, 9, and 10
// function calculateScore(questionId) {
//     const answer = parseInt(document.getElementById(questionId).value);
//     if (answer === 1 || answer === 2) {
//         return 1;
//     } else if (answer === 3) {
//         return 2;
//     } else if (answer === 4) {
//         return 3;
//     } else {
//         return 4;
//     }
// }

// // Calculate score for questions 2, 3, 5, 6, and 8
// function calculateConcernScore(questionId) {
//     const answer = parseInt(document.getElementById(questionId).value);
//     if (answer === 1) {
//         return 5;
//     } else if (answer === 2 || answer === 4) {
//         return 3;
//     } else {
//         return 1;
//     }
// }

// Teenager Form Submission Logic
document.getElementById('teenSurveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Calculate total score for Teenager form
    let totalScore = 0;

    totalScore += calculateScore('tq1');
    // Continue adding score calculations for each question in the Teenager form...
    totalScore += calculateConcernScore('tq2');
    // Add for the rest of the questions...

    // Determine feedback
    let feedback = '';
    if (totalScore >= 45) {
        feedback = "Your mental health appears to be in a concerning state. It's important to seek professional help and support.";
    } else if (totalScore >= 30) {
        feedback = "Your mental health is showing signs of strain. Consider seeking support and implementing self-care strategies.";
    } else {
        feedback = "Your mental health seems relatively stable. Keep up with healthy habits and seek support if needed.";
    }

    // Display result with feedback for Teenager form
    const resultElement = document.getElementById('teenResult');
    resultElement.innerHTML = `<h2>Survey Result</h2><p>Total Score: ${totalScore}</p><p>${feedback}</p>`;
});

// Adult Form Submission Logic
document.getElementById('adultSurveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Calculate total score for Adult form
    let totalScore = 0;

    totalScore += calculateScore('aq1');
    // Continue adding score calculations for each question in the Adult form...
    totalScore += calculateConcernScore('aq2');
    // Add for the rest of the questions...

    // Determine feedback
    let feedback = '';
    if (totalScore >= 45) {
        feedback = "Your mental health appears to be in a concerning state. It's important to seek professional help and support.";
    } else if (totalScore >= 30) {
        feedback = "Your mental health is showing signs of strain. Consider seeking support and implementing self-care strategies.";
    } else {
        feedback = "Your mental health seems relatively stable. Keep up with healthy habits and seek support if needed.";
    }

    // Display result with feedback for Adult form
    const resultElement = document.getElementById('adultResult');
    resultElement.innerHTML = `<h2>Survey Result</h2><p>Total Score: ${totalScore}</p><p>${feedback}</p>`;
});

// Calculate score for specific questions (adapted for each form)
function calculateScore(questionId) {
    const answer = parseInt(document.getElementById(questionId).value);
    if (answer === 1 || answer === 2) {
        return 1;
    } else if (answer === 3) {
        return 2;
    } else if (answer === 4) {
        return 3;
    } else {
        return 4;
    }
}

function calculateConcernScore(questionId) {
    const answer = parseInt(document.getElementById(questionId).value);
    if (answer === 1) {
        return 5;
    } else if (answer === 2 || answer === 4) {
        return 3;
    } else {
        return 1;
    }
}










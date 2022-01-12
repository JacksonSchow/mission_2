//what to do when the button is clicked
$("#button").click(function () {
    //calculate the weighted percentages
    let weighted_assignments = $("#assignments").val() * .55;
    let weighted_projects = $("#projects").val() * .05;
    let weighted_quizzes = $("#quizzes").val() * .1;
    let weighted_exams = $("#exams").val() * .2;
    let weighted_intex = $("#intex").val() * .1;

    //calculate the finaly percent grade
    weighted_percent = weighted_assignments + weighted_projects + weighted_quizzes + weighted_exams + weighted_intex;
    weighted_percent = (Math.round(weighted_percent * 100) / 100)
    percent_output = (weighted_percent * 100) + "%";

    //declare a letter grade variable and assign it a letter grade based on the students percent grade
    let letter_grade = ""

    if (weighted_percent >= .94) {
        letter_grade = "A"
    }
    else if (weighted_percent >= .90) {
        letter_grade = "A-"
    }
    else if (weighted_percent >= .87) {
        letter_grade = "B+"
    }
    else if (weighted_percent >= .84) {
        letter_grade = "B"
    }
    else if (weighted_percent >= .80) {
        letter_grade = "B-"
    }
    else if (weighted_percent >= .77) {
        letter_grade = "C+"
    }
    else if (weighted_percent >= .74) {
        letter_grade = "C"
    }
    else if (weighted_percent >= .70) {
        letter_grade = "C-"
    }
    else if (weighted_percent >= .67) {
        letter_grade = "D+"
    }
    else if (weighted_percent >= .64) {
        letter_grade = "D"
    }
    else if (weighted_percent >= .60) {
        letter_grade = "D-"
    }
    else {
        letter_grade = "E"
    }

    //print the output grades
    document.getElementById("percent_output").innerHTML = ("Final Weighted Percentage: " + percent_output);
    document.getElementById("grade_output").innerHTML = ("Final Letter Grade: " + letter_grade);
})
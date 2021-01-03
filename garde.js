funcation(){

let Q = parseInt(document.getElementById("Quizes").value)
let M = parseInt(document.getElementById("Midterm").value)
let F = parseInt(document.getElementById("FinalTest").value)
let O = parseInt(document.getElementById("Oral").value)


let total=Q+M+F+O

if (total<=100 && total>=90){document.getElementById("total_grades").innerText=total
document.getElementById("final_grade").innerText="A"}
else if (total>=80){document.getElementById("total_grades").innerText=total
document.getElementById("final_grade").innerText="B"}
else if (total>=70){document.getElementById("total_grades").innerText=total
document.getElementById("final_grade").innerText="C"}
else if (total>=60){document.getElementById("total_grades").innerText=total
document.getElementById("final_grade").innerText="D"}
else {document.getElementById("total_grades").innerText=total
document.getElementById("final_grade").innerText="F"}
}










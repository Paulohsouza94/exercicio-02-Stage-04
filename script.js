const students = [
  { name: "Paulo", proofNote1: 5, proofNote2: 3 },
  { name: "Andressa", proofNote1: 10, proofNote2: 8 },
  { name: "Vanessa", proofNote1: 8, proofNote2: 9 },
  { name: "Cesar", proofNote1: 2, proofNote2: 6 },
];

function calculateAverage(student) {
  return (student.proofNote1 + student.proofNote2) / 2;
}

function studentResults(student) {
  let average = calculateAverage(student);
  if (average >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é ${average}
Parabéns, ${student.name}! Você foi aprovado no concurso!`);
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é ${average}
Não foi dessa vez, ${student.name}! Tente novamente!`);
  }
}

for (student of students) {
  studentResults(student);
}

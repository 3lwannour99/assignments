import StudentCard from "./StudentCard";
function StudentList({ students }){


return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
          alertMessage={`Student: ${student.name} — Grade: ${student.grade}`}
        />
      ))}
    </div>
  );

}
export default StudentList;
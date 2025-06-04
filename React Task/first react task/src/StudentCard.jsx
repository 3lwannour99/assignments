import AlertButtom from "./AllertButtom";
function StudentCard({ name, grade, alertMessage }){
 return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <p>
        {grade >= 85 ? " Excellent Student" : " Needs Improvement"}
      </p>
      <AlertButtom message={alertMessage} />
    </div>
  );
}
export default StudentCard;
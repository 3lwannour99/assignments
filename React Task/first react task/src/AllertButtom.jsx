function AlertButtom({ message }){
 const handleClick = () => {
    alert(message);
  };

  return (
    <button onClick={handleClick}>
      Show Alert
    </button>
  );
   
}
export default AlertButtom;
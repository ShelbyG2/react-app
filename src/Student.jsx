function Student(props) {
  return (
    <div className="student">
      <h2>Students Data</h2>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
export default Student;

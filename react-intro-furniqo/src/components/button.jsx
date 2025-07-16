export default function Button() {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        alert("Are you sure?");
      }}
    ></button>
  );
}

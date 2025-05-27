export default function App() {
  return (
    <div className="container">
      <h1>Just do it.</h1>
      <Form></Form>
    </div>
  );
}

function Form() {
  return (
    <form className="add-form">
      <input
        placeholder="Add a task"
        type="text"
        required
        maxLength={128}
      ></input>
      <button>Add</button>
    </form>
  );
}

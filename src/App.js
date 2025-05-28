const todos = [
  {
    text: "Sprawdzić laborki studentom",
    date: "8.04.2025",
  },
  {
    text: "Wyjaśnić recenzenta",
    date: "8.04.2025",
  },
  {
    text: "Przypomnieć sobie czym się różni metafizyka od klasyfikatora",
    date: "8.04.2025",
  },
];

export default function App() {
  return (
    <div className="container">
      <h1>Just do it.</h1>
      <Form></Form>
      <TodoList></TodoList>
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

function TodoList() {
  return (
    <ul className="list-todo">
      {todos.map((todo) => (
        <ListItem text={todo.text} date={todo.date}></ListItem>
      ))}
    </ul>
  );
}

function ListItem({ text, date }) {
  return (
    <li class="list-item">
      <p class="item-text">{text}</p>
      <p class="item-date">Added at {date}</p>
      <button class="btn btn--delete">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
        </svg>
      </button>
    </li>
  );
}

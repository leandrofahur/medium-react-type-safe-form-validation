import "./App.css";

function App() {
  return (
    <form>
      <div className="labelForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="labelForm">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="labelForm">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default App;

// import './proxy.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> TEST </h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('parent'))
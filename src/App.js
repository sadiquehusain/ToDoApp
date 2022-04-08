import "./styles.css";
import ListItem from "./ListItem";
import react, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== " ") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: " "
        }
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <>
        <div className="todoapp">
          <header>
            <form id="to_do" onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="enter text"
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              />
              <button type="submit"> Add</button>
            </form>
          </header>
          <ListItem items={this.state.items} deleteItem={this.deleteItem} />
          {/* <h1>{newItems}</h1> */}
        </div>
      </>
    );
  }
}
export default App;

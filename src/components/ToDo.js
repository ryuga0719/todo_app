import React from 'react';
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className="form_container"　autocomplete="off">
          <div className="form_container_inner">
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
              />
            <button>
              <ArrowForwardIosRounded />
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="ToDo_ul">
        {this.props.items.map(item => (
          <li key={item.id} className="ToDo_li">{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;

import React from "react";

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };
  }
  handleChange(what) {
    console.log(this);
  }

  render() {
    return (
      <form>
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter the todo"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            className="form-control"
            id="description"
            placeholder="Enter description for the todo"
            rows="5"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

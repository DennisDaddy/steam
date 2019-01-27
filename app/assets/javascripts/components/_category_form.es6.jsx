class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category.name
          
    };

    this.handleNameChange = this.handleNameChange.bind(this);    
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  
  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          name="category[name]"
          value={this.state.name}
          onChange={this.handleNameChange}
        />  
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    );
  }
}

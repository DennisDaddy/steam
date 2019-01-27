class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.movie.title,
      content: props.movie.content      
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }

  handleChange(event) {    
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <label>Title</label>
        <input
          type="text"
          name="movie[title]"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />

        <label>Content</label>
        <input
          type="text"
          name="movie[content]"
          value={this.state.content}
          onChange={this.handleContentChange}
        />

        <label>category</label>
        <select          
          value={this.state.name}
          onChange={this.handleChange}
          options={this.state.name}
        />       

      
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

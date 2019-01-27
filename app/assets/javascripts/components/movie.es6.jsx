class Movie extends React.Component {
  render () {
    debugger;
    return (
      <div>    
      <h3 align="center">Show movies</h3><hr />
      <h3>{this.props.movie.title}</h3>.
      <p>{this.props.movie.content}</p>
      </div>
    );
  }
}



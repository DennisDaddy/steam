class Category extends React.Component {
  render () {
    return (
      <div>    
        <h3 align="center">Show category</h3><hr />
        <h3>{this.props.category.name}</h3>       
      </div>
    );
  }
}

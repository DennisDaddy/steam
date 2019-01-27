class Categories extends React.Component {
  render () {
    return (
      <div className="users">
      {this.props.categories.map(function(f){
        return(
          <h3 key={f.id}> <a href={"/categories/" + f.id }>{f.name}</a> </h3>
        )
      })}
      </div>
    );
  }
}

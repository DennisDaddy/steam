class Movies extends React.Component {
  render () {
    return (
      <div className="users">
      {this.props.movies.map(function(f){
        return(
          <h3 key={f.id}> <a href={"/movies/" + f.id }>{f.title}</a> </h3>
        )
      })}
      </div>
    );
  }
}



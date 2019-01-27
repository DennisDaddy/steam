class Users extends React.Component {
  render () {
    return (
      <div className="users">
      {this.props.users.map(function(f){
        return(
          <h3 key={f.id}> <a href={"/users/" + f.id }>{f.name}</a> </h3>
        )
      })}
      </div>
    );
  }
}



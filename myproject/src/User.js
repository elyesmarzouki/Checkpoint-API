function User ({user}){
    return(
        <div id="box">
            <div><h2 className="center">User name: {user.username}</h2></div>
            <div><h3 className="center">Name: {user.name}</h3></div>
            <div><h4 className="center">Email: {user.email}</h4></div>
            <div><h5 className="center">Address: {user.address.street}, {user.address.suite}, {user.address.city}</h5></div>
            <div><h6 className="center">Phone: {user.phone}</h6></div>
        </div>
    )
}

export default User
async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UsersPage(params){

const data = await getUser(params.id)
console.log(data)

    return(
        <div>
            <h1>User Details</h1>
            
            {/* <div>
            <img src="user.avatar" alt="" />
                <div>
                    <h3>{user.id} {user.first_name} {user.last_name}</h3>
                    <p>{user.email}</p>
                </div>

            </div> */}
            
            </div>
    )
}

export default UsersPage
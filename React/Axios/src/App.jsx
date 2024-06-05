import axios, { Axios } from 'axios'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [users,setUsers]=useState([]);
  const [name,setName]=useState("");
  const [trigger,setTrigger] = useState(false);


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers((res.data)))
  },[])

  const postUser = () =>{
    axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
    .then(res=>setUsers([...users,res.data]));
    // .then(()=>setTrigger(!trigger))
  }

  const updateUser = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{name:name} )
    .then(res=>setUsers((res.data)))
  }

  const delteUser = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
    .then(res=> setUsers(res.data))
  }





  const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newWebsite, setNewWebsite] = useState("")


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json() )
        .then((json) => setUsers(json))
    },[])

    function addUser() {
        const name = newName.trim();
        const email = newEmail.trim();
        const website = newWebsite.trim();

        if (name && email && website) {
            fetch("https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name,
                        email,
                        website
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8 "
                    }
                }
            ).then((response) => response.json() )
            .then(data => {
                setUsers([...users, data]);
                setNewName("");
                setNewEmail("");
                setNewWebsite("");

            })
        }

    }

    function onChangeHandler(id, key, value) {
        setUsers((users) => {
            return users.map(user => {
                return user.id === id ? {...user, [key]: value } : user;
            })
        })
    }

    function updateUsers(id) {
        const user = users.find((user) => user.id === id );
        fetch(`https://jsonplaceholder.typicode.com/users/10`,
                {
                    method: "PUT",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8 "
                    }
                }
            )
        .then( response => response.json())    
        // .then(data => {
        

        // })

    }

    function deleteUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
            method: "DELETE",
        })
        .then( response => response.json())    
        .then(data => {
                setUsers((users) => {
                    return users.filter(user => user.id !== id)
                })

               

        })
    }

  // axios.get('https://jsonplaceholder.typicode.com/users')
  // .then(res=>console.log(res.data))

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(Res=>Res.json())
  // .then(res=>console.log(res))


  return (
    <>
      {/* {users.map(user=>(
        <p key={user.id}>
          {user.name}
        </p>
      ))}

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={postUser}>Post</button> */}

      {users.name}

      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={updateUser}>Update</button>

    </>
  )
}

export default App

import axios from "axios";
import { useEffect, useState } from "react";
import UserHeader from "./UserComponents/UserHeader";
import UserList from "./UserComponents/UserList";

const baseUrl = "http://localhost:3003/users"

export default function UserIndex() {
    const [users, setUsers] = useState([]);
    const [edit_id, setEdit_id] = useState("");
    const [search, setSearch] = useState('');
    const [form, setForm] = useState({ name: "", email: "" });

    const editOnClick = (id) => {
        setEdit_id(id);
        const user = users.find((user) => user.id === id);
        setForm({name: user.name, email: user.email})
    }

    const deleteOnClick = (id) => {
        axios.delete(baseUrl + `/${id}`)

        const newList = users.filter((item) => item.id !== id);
 
        setUsers(newList);
    }

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                if(search){
                    const array = (res.data);
                    let filtered = array.filter((array) => (array.name.toUpperCase()).includes(search.toUpperCase()));
                    setUsers(filtered);
                }else{
                    setUsers(res.data);
                }
            }).catch((err) => {
                console.log(err);
            })
    }, [edit_id, search]);

    const renderTableData = 
        users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button onClick={() => editOnClick(user.id)}>Editar</button></td>
                    <td><button onClick={() => deleteOnClick(user.id)}>X</button></td>
                </tr>
            )
        });

    return (
        <div className="App">
            <UserHeader
                edit_id={edit_id}
                search={search}
                setUsers={setUsers}
                users={users}
                setEdit_id={setEdit_id}
                form={form}
                setForm={setForm}
                setSearch={setSearch}
            />
            <UserList 
                users={users}
                renderTableData={renderTableData}
            />
        </div>
    );
}
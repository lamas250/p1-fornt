import axios from 'axios';
import UserForm from './UserForm';
import UserSearch from './UserSearch';

const baseUrl = "http://localhost:3003/users"

const UserHeader = ({
    edit_id,
    search,
    onSearch,
    setUsers,
    users,
    setEdit_id,
    form,
    setForm,
    setSearch
}) => {
    

    const onchange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        const body = {
            name: form.name,
            email: form.email
        };
        if(!edit_id){
            axios.post(baseUrl,body)
                .then(() => {
                    console.log("Successful insert");
                    setUsers([...users, {name: body.name, email: body.email}])
                    setForm({name: "", email: ""});
                });
        }else{
            axios.put(baseUrl + `/${edit_id}/edit`,body)
                .then(() => {
                    console.log("Successful edit");
                    let usuarios = [...users];
                    let index = usuarios.findIndex((user) => user.id === edit_id);
                    let user = usuarios.find((user) => user.id === edit_id);
                    user.name = body.name;
                    user.email = body.email;
                    usuarios[index] = user;
                    setUsers(usuarios);
                });
                setEdit_id("");
                setForm({name: "", email: ""});
        }
    }

    const clearFilds = (e) => {
        setEdit_id('');
        setForm({name: '', email: ''});
    }

    return(
        <div>
            <UserForm 
                edit_id={edit_id}
                onSubmitForm={onSubmitForm}
                form={form}
                onchange={onchange}
                clearFilds={clearFilds}
            />
            <UserSearch 
                search={search}
                setSearch={setSearch}
            />
        </div>
    )
}

export default UserHeader;
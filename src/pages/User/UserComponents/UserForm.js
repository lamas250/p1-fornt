import React from 'react';

const UserForm = ({
    edit_id,
    onSubmitForm,
    form,
    onchange,
    clearFilds
}) => {


    return (
        <div>
            {!edit_id ? <h3>Create User</h3> : <h3>Edit User</h3>}
            <form onSubmit={onSubmitForm}>
                <label>Nome</label>
                <input 
                    onChange={onchange}  
                    value={form.name}
                    name={"name"} 
                />
                <label>Email</label>
                <input 
                    onChange={onchange}  
                    value={form.email}
                    name={"email"} 
                />
                <button type="submit">Send</button>
                {edit_id ? <button onClick={clearFilds}>Clear Filds</button> : ''}
            </form>
        </div>
    )
}

export default UserForm;
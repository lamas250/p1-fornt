import React from 'react';

const UserList = ({
    users,
    renderTableData
}) => {
    return (
        <table className="tabela">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {renderTableData}
            </tbody>
        </table>
    )
}
export default UserList;
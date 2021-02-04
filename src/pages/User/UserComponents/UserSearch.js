
const UserSearch = ({
    search,
    setSearch
}) => {

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <h3>Search User</h3>
            <input onChange={onSearch}  value={search}/>
        </div>
    )
}

export default UserSearch;
const SearchFilter = ({ onSearch, onFilter }) => {
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    const handleFilterChange = (event) => {
        onFilter(event.target.value);
    };

    return (
        <div className="search-filter">
            <input
                type="text"
                placeholder="Search stock items..."
                onChange={handleSearchChange}
                className="search-input"
            />
            <select onChange={handleFilterChange} className="filter-select">
                <option value="">All Categories</option>
                <option value="low-stock">Low Stock</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
            </select>
        </div>
    );
};

export default SearchFilter;
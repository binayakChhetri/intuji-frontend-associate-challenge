import { Search } from "lucide-react";
import "../styles/ui/SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <Search size={20} />
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Search here ..."
      />
    </div>
  );
};
export default SearchBar;

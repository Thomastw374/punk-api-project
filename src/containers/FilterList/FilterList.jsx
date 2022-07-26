import FilterItem from "../../components/FilterItem/FilterItem"
import "../../sass/main.scss";

const FilterList = () => {
    return (
      <div className="filter-list">
        <FilterItem label="High ABV (> 6.0%)" />
        <FilterItem label="Classic Range" />
        <FilterItem label="Acidic (ph < 4)" />
      </div>
    );
}

export default FilterList;
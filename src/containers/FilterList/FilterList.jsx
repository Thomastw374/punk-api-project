import FilterItem from "../../components/FilterItem/FilterItem"
import "../../sass/main.scss";

const FilterList = ({handleHighAbvCheck, handleClassicRangeCheck}) => {
    return (
      <div className="filter-list">
        <FilterItem label="High ABV (> 6.0%)" handleBoxCheck={handleHighAbvCheck} />
        <FilterItem label="Classic Range" handleBoxCheck={handleClassicRangeCheck}/>
        <FilterItem label="Acidic (ph < 4)" />
      </div>
    );
}

export default FilterList;
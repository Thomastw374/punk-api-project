import FilterItem from "../../components/FilterItem/FilterItem"
import "../../sass/main.scss";


const FilterList = ({handleHighAbvCheck, handleClassicRangeCheck, handlePh4Check}) => {
    return (
      <div className="filter-list">
        <h6 className="filter-list__name">Filter by:</h6>
        <FilterItem
          label="High ABV (> 6.0%)"
          handleBoxCheck={handleHighAbvCheck}
        />
        <FilterItem
          label="Classic Range"
          handleBoxCheck={handleClassicRangeCheck}
        />
        <FilterItem label="Acidic (ph < 4)" handleBoxCheck={handlePh4Check} />
      </div>
    );
}

export default FilterList;
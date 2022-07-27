 const FilterItem = ({label, handleBoxCheck}) => {
    return (
      <div className="filter-item">
        <label className="filter-item__label" htmlFor="checkbox">
          {label}
        </label>
        <input
          className="filter-item__checkbox"
          type="checkbox"
          name="checkbox"
          id=""
          onClick={handleBoxCheck}
        />
      </div>
    );

 }

 export default FilterItem;
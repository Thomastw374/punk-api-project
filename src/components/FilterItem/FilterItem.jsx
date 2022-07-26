 const FilterItem = ({label}) => {
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
        />
      </div>
    );

 }

 export default FilterItem;
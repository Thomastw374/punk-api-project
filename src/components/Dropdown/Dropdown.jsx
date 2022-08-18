import "../../sass/main.scss";


const Dropdown = (numResults) => {

    return (
      <>
        <select className="results-dropdown" name="results dropdown menu" id="">
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="304">All</option>
        </select>
      </>
    );

}

export default Dropdown;
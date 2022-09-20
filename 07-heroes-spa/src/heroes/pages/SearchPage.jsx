import { HeroCard } from '../components';

export const SearchPage = () => {
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-md-4 col-8">
          <h4>Searching</h4>
          <hr />

          <form action="">
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-md-8 col-12 offset-md">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>ABC</b>
          </div>

          <HeroCard/>
        </div>
      </div>

      
    </>
  )
}

import React from "react";

export default function Search() {
  return (
    <div>
      <form className="city-search" id="city-search-form">
        <div className="row">
          <div className="col-7">
            <input
              type="text"
              class="form-control shadow-sm"
              placeholder="Enter city name..."
              id="searched-city"
              auto
              focus="on"
              autocomplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              class="btn btn-primary shadow-sm"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

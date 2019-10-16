import React from "react";
import "./index.scss";

function FiltersGroup() {
  return (
    <div classname="container">
      <div className="row justify-content-center">
        <div
          className="btn-group"
          role="group"
          data-toggle="button"
          aria-label="filters-selector"
        >
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              Inventory
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Condition
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              Performance
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              Investment
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              Planning
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              Maintenance
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersGroup;

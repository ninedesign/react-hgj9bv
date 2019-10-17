import React from "react";
import "./index.scss";

function FiltersGroup() {
  return (
    <div className="container">
      <div className="row justify-content-center">
          <div className="btn-group btn-group-toggle flex-wrap" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                defaultChecked
              />
              Inventory
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
              />
              Condition
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />
              Performance
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />
              Investment
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />
              Planning
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />
              Maintenance
            </label>
          </div>
        </div>
      </div>
  );
}

export default FiltersGroup;

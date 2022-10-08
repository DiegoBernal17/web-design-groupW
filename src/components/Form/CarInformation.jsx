import React from "react";
import Select from "../Select";
import { MODELS, VERSIONS, STATES } from "../../constants";

const FirstPart = ({ model, version, state, distributor, handleInput }) => (
  <div className="container-lg">
    <div className="row">
      <div className="col-md-6">
        <Select
          label="MODELO"
          name="model"
          options={MODELS}
          value={model}
          onChange={handleInput}
        />
      </div>
      <div className="col-md-6">
        <Select
          label="VERSION"
          name="version"
          onChange={handleInput}
          value={version}
          options={model ? VERSIONS[model] : []}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <Select
          label="ESTADO"
          name="state"
          options={STATES}
          onChange={handleInput}
          value={state}
        />
      </div>
      <div className="col-md-6">
        <Select
          label="DISTRIBUIDOR"
          name="distributor"
          options={[]}
          onChange={handleInput}
          value={distributor}
        />
      </div>
    </div>
  </div>
);

export default FirstPart;

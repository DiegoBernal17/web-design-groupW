import React from "react";

const Checks = ({ privacyPolicy, promotions, handleInput }) => (
  <>
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="privacy-policy"
        name="privacyPolicy"
        onChange={handleInput}
        checked={privacyPolicy}
      />
      <label className="form-check-label" htmlFor="privacy-policy">
        He leìdo y acepto el <u>aviso de privacidad</u>
      </label>
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="promotions"
        name="promotions"
        onChange={handleInput}
        checked={promotions}
      />
      <label className="form-check-label" htmlFor="promotions">
        No deseo recibir promociones
      </label>
    </div>
  </>
);

export default Checks;

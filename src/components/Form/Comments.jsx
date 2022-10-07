import React from "react";
import SectionHeader from "../SectionHeader";

const Comments = ({ comments, handleInput }) => (
  <>
    <SectionHeader
      title="Comentarios"
      subtitle="NOS IMPORTAN TUS COMENTARIOS"
    />
    <div className="mb-4">
      <label htmlFor="comments" className="form-label">
        ¿DUDAS? ¿COMENTARIOS?
      </label>
      <textarea
        rows={4}
        className="form-control"
        placeholder="ESCRÍBENOS"
        id="comments"
        name="comments"
        onChange={handleInput}
        value={comments}
      />
    </div>
  </>
);

export default Comments;

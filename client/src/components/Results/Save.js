import React from "react";
import api from "../../utils/API";

const Save = props => (
  <a
    onClick={() => api.saveArticle(props)}
  >
    Save
  </a>
);

export default Save;
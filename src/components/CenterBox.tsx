import React from "react";

export default (props: any) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

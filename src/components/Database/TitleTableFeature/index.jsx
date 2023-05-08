import React from "react";
import SpanYellow from "@site/src/components/Html/SpanYellow";

export default function TitleTableFeature({ nameTable }) {
  return (
    <p>
      <em>
        Tabla: <SpanYellow>{nameTable}</SpanYellow>
      </em>
    </p>
  );
}

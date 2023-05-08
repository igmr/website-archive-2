import React from "react";
import Ul from "@site/src/components/Html/Ul";
import SpanGreen from "@site/src/components/Html/SpanGreen";
import SpanYellow from "@site/src/components/Html/SpanYellow";
import Check from "@site/src/components/Check";
import Not from "@site/src/components/Not";

export default function RelationshipFeature(props) {
  return (
    <details className="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module">
      <summary>
        <SpanYellow>{props.table}</SpanYellow>
        <SpanGreen> {props.cardinality} </SpanGreen>
        <SpanYellow>{props.foreign}</SpanYellow>
      </summary>
      <Ul>
        <li>
          {props.constraint ? <Check /> : <Not />} Restricción{" "}
          {props.constraint ? <SpanYellow>{props.constraint}</SpanYellow> : ""}
        </li>
        <li>
          <Check /> Tipo de relación{" "}
          <SpanYellow>{props.relationship}</SpanYellow>
        </li>
        <li>
          <Check /> Referencia al campo{" "}
          <SpanYellow>{props.field_id}</SpanYellow>
        </li>
        <li>
          <Check /> Relacionado con <SpanYellow>{props.foreign}</SpanYellow>
        </li>
      </Ul>
    </details>
  );
}

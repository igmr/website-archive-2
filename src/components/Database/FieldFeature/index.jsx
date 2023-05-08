import React from "react";
import Ul from "@site/src/components/Html/Ul";
import SpanGreen from "@site/src/components/Html/SpanGreen";
import Check from "@site/src/components/Check";
import Not from "@site/src/components/Not";

const TagPrimaryKey = () => {
  return (
    <li>
      <Check /> Clave primario
    </li>
  );
};

const TagForeignKey = () => {
  return (
    <li>
      <Check /> Clave foráneo
    </li>
  );
};

export default function FieldFeature(props) {
  return (
    <details className="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module">
      <summary>
        {props.isPrimaryKey && "🔑"} {props.isForeignKey && "🗝"} {props.field}{" "}
        <SpanGreen>{props.types}</SpanGreen>
      </summary>
      <Ul>
        <li>{props.isNull ? <Check /> : <Not />} Nulo</li>
        <li>{props.isUnique ? <Check /> : <Not />} Único</li>
        {props.isPrimaryKey && <TagPrimaryKey />}
        {props.isForeignKey && <TagForeignKey />}
        <li>
          {props.comments ? "📌" : ""} {props.comments}
        </li>
      </Ul>
    </details>
  );
}

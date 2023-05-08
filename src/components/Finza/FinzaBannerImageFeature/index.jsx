import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import banner_dark from "@site/static/img/finza/finza-banner-dark.png";
import banner_light from "@site/static/img/finza/finza-banner-light.png";

export default function FinzaBannerImageFeature() {
  const { colorMode } = useColorMode();
  return <img src={colorMode === "dark" ? banner_dark : banner_light} />;
}
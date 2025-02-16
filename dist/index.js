import React from "react";
import icon_01 from "./icon1.png";
import icon_02 from "./icon2.png";
import icon_03 from "./icon3.png";
import icon_04 from "./icon4.png";
import "./style.css";
function FigureBox({
  num,
  contents,
  dec
}) {
  contents = ArraySet(contents, "figcaption");
  let icon = [{
    img: icon_01,
    alt: "책 아이콘"
  }, {
    img: icon_02,
    alt: "두뇌 아이콘"
  }, {
    img: icon_03,
    alt: "시계 아이콘"
  }, {
    img: icon_04,
    alt: "위치 아이콘"
  }];
  icon = icon[num];
  return /*#__PURE__*/React.createElement("figure", {
    className: "figurebox"
  }, /*#__PURE__*/React.createElement("img", {
    src: icon.img,
    alt: icon.alt
  }), contents, dec);
}
function ArraySet(data, Tag) {
  if (Array.isArray(data)) return data.map((item, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, item));else return /*#__PURE__*/React.createElement(Tag, null, data);
}
export default FigureBox;

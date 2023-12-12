import React from "react";

const Sidenav = ({
  colors,
  materials,
  setSelectedColor,
  setSelectedMaterial,
}) => {
  return (
    <div className="p-3">
      <h3>Filter</h3>

      <div>Material</div>
      <ul>
        {materials.map((material) => {
          return (
            <li onClick={() => setSelectedMaterial(material)} key={material.id}>
              {material.name}
            </li>
          );
        })}
      </ul>

      <div className="mt-4">Color</div>
      <ul>
        <ul>
          {colors.map((color) => {
            return (
              <li onClick={() => setSelectedColor(color)} key={color.id}>
                {color.name}
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default Sidenav;

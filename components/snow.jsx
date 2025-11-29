"use client";
import React, { useEffect } from "react";
import "./snow.css"; // chứa CSS

export default function Snow() {
  useEffect(() => {
    const snowContainer = document.querySelector(".snow");

    function createSnow() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.textContent = "❄";

      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.opacity = Math.random();

      snowContainer.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    }

    const interval = setInterval(createSnow, 200);
    return () => clearInterval(interval);
  }, []);

  return <div className="snow"></div>;
}

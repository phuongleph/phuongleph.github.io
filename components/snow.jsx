"use client";
import React, { useEffect } from "react";
import "./snow.css";

export default function Snow() {
  useEffect(() => {
    const snowContainer = document.querySelector(".snow");

    function createSnow() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      // Nhiều loại ký tự tuyết
      const snowChars = ["❄", "✦", "✧", "❅", "•", "✼"];
      snowflake.textContent =
        snowChars[Math.floor(Math.random() * snowChars.length)];

      // Random vị trí, kích thước, hiệu ứng
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.opacity = Math.random() * 0.8 + 0.2;

      // Random gió (lắc trái/phải)
      const wind = Math.random() * 60 - 30; // -30px → 30px
      snowflake.style.setProperty("--wind", wind + "px");

      // Random thời gian rơi và xoay
      const fallDuration = Math.random() * 3 + 3; // 3s → 6s
      const spinDuration = Math.random() * 2 + 2; // 2s → 4s

      snowflake.style.animation = `
        fall ${fallDuration}s linear,
        spin ${spinDuration}s linear infinite
      `;

      snowContainer.appendChild(snowflake);

      // Xoá bông tuyết khi rơi xong
      setTimeout(() => snowflake.remove(), fallDuration * 1000);
    }

    const interval = setInterval(createSnow, 180);
    return () => clearInterval(interval);
  }, []);

  return <div className="snow"></div>;
}

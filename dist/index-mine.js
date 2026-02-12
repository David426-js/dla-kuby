document.addEventListener("DOMContentLoaded", () => {
  document.body.style.margin = "0";
  document.body.style.background = "#0f0f0f";
  document.body.style.fontFamily = "Arial, Helvetica, sans-serif";

  const root = document.getElementById("root") || document.body;

  root.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <div style="
        background:#1c1c1c;
        color:white;
        padding:40px;
        border-radius:20px;
        text-align:center;
        box-shadow:0 0 40px rgba(255,0,150,0.4);
        max-width:500px;
      ">
        <h1 style="margin-bottom:20px;">🎂 Wszystkiego najlepszego Oliwka 💖</h1>
        <p style="font-size:18px;">
          Jeśli to widzisz, to znaczy że:
        </p>
        <ul style="text-align:left;font-size:16px;">
          <li>✔ deploy działa</li>
          <li>✔ JS się ładuje</li>
          <li>✔ Vercel ogarnięty</li>
        </ul>
        <p style="margin-top:20px;">
          Możesz spać spokojnie 😌
        </p>
      </div>
    </div>
  `;
});

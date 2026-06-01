const navToggle = document.querySelector("[data-nav-toggle]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const canvas = document.querySelector("[data-signal-canvas]");

if (canvas) {
  const ctx = canvas.getContext("2d");
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let frame = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#191713";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255, 253, 248, 0.07)";
    ctx.lineWidth = 1;

    const stepX = Math.max(48, width / 18);
    const stepY = Math.max(42, height / 11);

    for (let x = 0; x <= width; x += stepX) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += stepY) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function trace({ color, amplitude, offset, speed, phase, widthScale }) {
    ctx.strokeStyle = color;
    ctx.lineWidth = widthScale;
    ctx.beginPath();

    for (let x = -12; x <= width + 12; x += 8) {
      const t = (x / width) * Math.PI * 4;
      const carrier = Math.sin(t + frame * speed + phase) * amplitude;
      const ripple = Math.sin(t * 2.8 - frame * speed * 0.8) * amplitude * 0.22;
      const y = height * offset + carrier + ripple;

      if (x === -12) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
  }

  function drawMarkers() {
    const markers = [
      { x: 0.19, label: "COMMAND HIGH", color: "#d98a47" },
      { x: 0.42, label: "50 ms WINDOW", color: "#138a83" },
      { x: 0.72, label: "STABLE HIGH", color: "#f1d5a0" },
    ];

    for (const marker of markers) {
      const x = width * marker.x;
      ctx.strokeStyle = marker.color;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.moveTo(x, height * 0.18);
      ctx.lineTo(x, height * 0.86);
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.fillStyle = marker.color;
      ctx.font = "700 11px ui-monospace, SFMono-Regular, Menlo, Consolas";
      ctx.fillText(marker.label, x + 8, height * 0.2);
    }
  }

  function render() {
    drawGrid();
    trace({
      color: "rgba(19, 138, 131, 0.88)",
      amplitude: height * 0.09,
      offset: 0.46,
      speed: 0.018,
      phase: 0,
      widthScale: 2,
    });
    trace({
      color: "rgba(217, 138, 71, 0.72)",
      amplitude: height * 0.06,
      offset: 0.62,
      speed: -0.012,
      phase: 1.8,
      widthScale: 1.5,
    });
    trace({
      color: "rgba(255, 253, 248, 0.36)",
      amplitude: height * 0.035,
      offset: 0.31,
      speed: 0.01,
      phase: 3.1,
      widthScale: 1,
    });
    drawMarkers();

    if (!mq.matches) {
      frame += 1;
      requestAnimationFrame(render);
    }
  }

  resize();
  render();
  window.addEventListener("resize", resize);
}


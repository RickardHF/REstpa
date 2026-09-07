export function renderCanvas(canvas: HTMLCanvasElement): void {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#1f2937";
  context.fillRect(0, 0, canvas.width, canvas.height);
}


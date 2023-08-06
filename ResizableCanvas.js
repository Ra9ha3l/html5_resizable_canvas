class ResizableCanvas {
  constructor(canvas, width = 1080, height = 720) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.context = canvas.getContext('2d');
    this.canvas.style.position = 'fixed';
    this.canvas.style.background = 'grey';

    window.addEventListener('resize', this.fitCanvasToWindow.bind(this));
    this.fitCanvasToWindow();
  }

  fitCanvasToWindow() {
    if (!this.canvas || this.canvas.width === 0 || this.canvas.height === 0) {
      return;
    }

    const targetRatio = this.width / this.height;

    if (window.innerWidth / window.innerHeight > targetRatio) {
      this.canvas.height = window.innerHeight;
      this.canvas.width = this.canvas.height * targetRatio;
      this.canvas.style.top = '0px';
      this.canvas.style.left = `${((window.innerWidth - this.canvas.width) / 2)}px`;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = this.canvas.width / targetRatio;
      this.canvas.style.top = `${((window.innerHeight - this.canvas.height) / 2)}px`;
      this.canvas.style.left = '0px';
    }

    const zoom = this.canvas.height / this.width;
    this.context.setTransform(zoom, 0, 0, zoom, 0, 0);
  }
}
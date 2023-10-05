/**
 * A class for creating a resizable canvas element.
 */
class ResizableCanvas {
  /**
   * Constructs a new ResizableCanvas instance.
   *
   * @param {HTMLCanvasElement} canvas The canvas element to resize.
   * @param {number} [width=1080] The initial width of the canvas in pixels.
   * @param {number} [height=720] The initial height of the canvas in pixels.
   */
  constructor(canvas, width = 1080, height = 720) {
    // Initialize properties
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.context = canvas.getContext('2d');

    // Apply initial styles to the canvas
    this.canvas.style.position = 'fixed';
    this.canvas.style.background = 'grey';

    // Add a resize event listener that calls fitCanvasToWindow when the window size changes
    window.addEventListener('resize', this.fitCanvasToWindow.bind(this));

    // Initial resizing of the canvas to fit the window
    this.fitCanvasToWindow();
  }

  /**
   * Resizes the canvas to fit the window, while maintaining the target aspect ratio.
   */
  fitCanvasToWindow() {
    // Check if the canvas is valid and has non-zero dimensions
    if (!this.canvas || this.canvas.width === 0 || this.canvas.height === 0) {
      return;
    }

    // Calculate the target aspect ratio
    const targetRatio = this.width / this.height;

    // Check if the window's aspect ratio is wider than the canvas's target aspect ratio
    if (window.innerWidth / window.innerHeight > targetRatio) {
      // Window is wider, so adjust canvas height to match window height
      this.canvas.height = window.innerHeight;
      this.canvas.width = this.canvas.height * targetRatio;

      // Center the canvas horizontally within the window
      this.canvas.style.top = '0px';
      this.canvas.style.left = `${((window.innerWidth - this.canvas.width) / 2)}px`;
    } else {
      // Window is taller, so adjust canvas width to match window width
      this.canvas.width = window.innerWidth;
      this.canvas.height = this.canvas.width / targetRatio;

      // Center the canvas vertically within the window
      this.canvas.style.top = `${((window.innerHeight - this.canvas.height) / 2)}px`;
      this.canvas.style.left = '0px';
    }

    // Calculate the zoom factor for the canvas context
    const zoom = this.canvas.height / this.width;

    // Apply the zoom factor to the canvas context
    this.context.setTransform(zoom, 0, 0, zoom, 0, 0);
  }
}

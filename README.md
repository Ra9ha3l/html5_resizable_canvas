https://m.youtube.com/shorts/OyI224FJvyg

# ResizableCanvas Class

The `ResizableCanvas` class is a JavaScript utility that allows you to create a canvas element that automatically adjusts its size and position to fit the window while maintaining a specified aspect ratio. This is particularly useful when you want to create responsive canvas-based applications or games that adapt to various screen sizes.

## Getting Started

To use the `ResizableCanvas` class, follow these steps:

1. Include the `ResizableCanvas` class in your project. You can either copy the class directly into your script or import it as an external module.

2. Create a new instance of `ResizableCanvas` by passing in the target canvas element and optionally specifying the initial width and height of the canvas.

```javascript
const canvasElement = document.getElementById('myCanvas');
const resizableCanvas = new ResizableCanvas(canvasElement, 1080, 720);
```

3. The `ResizableCanvas` class will automatically fit the canvas to the window size and aspect ratio upon initialization. It will also keep updating the canvas whenever the window is resized.

## Class Methods

### `constructor(canvas, width, height)`

- Initializes a new instance of `ResizableCanvas`.
- Parameters:
  - `canvas` (required): The canvas element to be resized.
  - `width` (optional): The initial width of the canvas (default: 1080).
  - `height` (optional): The initial height of the canvas (default: 720).

### `fitCanvasToWindow()`

- Dynamically adjusts the canvas size and position to fit the window while preserving the specified aspect ratio.
- This method is automatically called upon initialization and whenever the window is resized.

## How It Works

1. Upon initialization, the `ResizableCanvas` class sets up the canvas element and its 2D rendering context. It also attaches a `resize` event listener to the window and calls the `fitCanvasToWindow()` method to fit the canvas to the window size initially.

2. The `fitCanvasToWindow()` method calculates the aspect ratio of the canvas based on the specified width and height. It then compares this aspect ratio to the aspect ratio of the window.

3. If the window's aspect ratio is wider than the target aspect ratio, the canvas is resized horizontally to fit the window width, and its height is adjusted based on the target aspect ratio. The canvas is centered horizontally to account for any extra space on the sides.

4. If the window's aspect ratio is narrower than the target aspect ratio, the canvas is resized vertically to fit the window height, and its width is adjusted based on the target aspect ratio. The canvas is centered vertically to account for any extra space on the top and bottom.

5. After determining the correct size and position, the `fitCanvasToWindow()` method calculates the zoom factor based on the canvas height and the original width. It then applies this zoom factor to the 2D rendering context to maintain the original aspect ratio of the canvas content even after resizing.

## Example Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>Resizable Canvas Example</title>
</head>
<body>
  <canvas id="myCanvas"></canvas>
  <script src="resizable-canvas.js"></script>
  <script>
    const canvasElement = document.getElementById('myCanvas');
    const resizableCanvas = new ResizableCanvas(canvasElement, 1080, 720);
  </script>
</body>
</html>
```

In this example, the `ResizableCanvas` class is used to create a canvas element with an initial size of 1080x720. The canvas will automatically adjust its size and position to fit the window while maintaining the 16:9 aspect ratio.

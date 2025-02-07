# React Flow Graph Visualization

## Overview
This is an interactive graph visualization application built with React Flow that allows users to manipulate and customize graph elements with undo/redo functionality.

## Features
- **Graph Visualization**: Draggable and interconnected nodes with smooth animations.
- **Node Customization**:
  - Change node colors using a color picker.
  - Adjust font size (12px - 24px) with controls.
- **Undo/Redo Functionality**:
  - Track and revert actions like color changes, font size modifications, and node position updates.
- **State Management**: Implemented using Redux with separate reducers for graph data, node styling, and history management.

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.0)
- npm (>= 7.0) or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Available Scripts
- **Start the Development Server**
  ```sh
  npm run dev
  ```
  Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.

- **Build for Production**
  ```sh
  npm run build
  ```
  Compiles the project for production.

- **Run Tests**
  ```sh
  npm test
  ```
  Runs test cases.

## Dependencies List
- **React** – Core UI framework
- **React Flow** – Graph visualization library
- **Redux** – State management
- **TypeScript** – Strongly typed JavaScript
- **React-Redux** – Integration of Redux with React
- **Redux Toolkit** – Simplified Redux setup
- **react-color** – Color picker component

## Basic Usage Guide
1. Open the app in your browser (`http://localhost:3000`).
2. Drag nodes to reposition them.
3. Click on a node to open the customization panel.
4. Change the node color using the color picker.
5. Adjust the font size of node labels.
6. Use the **Undo** and **Redo** buttons to navigate through changes.

## Contribution
Feel free to submit issues or pull requests to improve the project!

## License
This project is licensed under the MIT License.

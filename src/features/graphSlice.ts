import { createSlice } from "@reduxjs/toolkit";

interface Node {
  id: string,
  position: { x: number, y: number},
  data: {
    label: string,
    color: string,
    fontSize: number
  },
};

interface Edge {
  id: string,
  source: string,
  target: string,
  animated: boolean
};

interface GraphState {
  nodes: Node[],
  edges: Edge[]
};

const initialState: GraphState = {
  nodes: Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
    position: { x: 300 + (i % 2 === 0 ? 100 : -100), y: i * 150 },
    data: { label: `Node ${i + 1}`, color: '#000000', fontSize: 16 }
  })),
  edges: Array.from({ length: 9 }, (_, i) => ({
    id: String(i + 1),
    source: String(i + 1),
    target: String(i + 2),
    animated: true
  }))
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    //actions
  }
});


export default graphSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colors } from "../lib/constants";

interface Node {
  id: string,
  position: { x: number, y: number},
  data: {
    label: string,
    color: string,
    oldColor: string | null,
    newColor: string | null,
    fontSize: string
  },
  type: string
};

interface Edge {
  id: string,
  source: string,
  target: string,
  animated: boolean
};

interface change {
  id: string,
  property: "color" | "fontSize",
  value: string
}

interface GraphState {
  nodes: Node[],
  edges: Edge[],
  past: change[],
  future: change[]
};

const initialState: GraphState = {
  nodes: Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
    position: { x: 300 + (i % 2 === 0 ? 100 : -100), y: i * 150 },
    data: { label: `Node ${i + 1}`, color: colors[i], oldColor: null, newColor: null, fontSize: "12" },
    type: "color"
  })),
  edges: Array.from({ length: 9 }, (_, i) => ({
    id: String(i + 1),
    source: String(i + 1),
    target: String(i + 2),
    animated: true
  })),
  past: [],
  future: []
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    changeNodeColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
      state.nodes = state.nodes.map(node =>
        node.id === action.payload.id
          ? { ...node, data: { ...node.data, color: action.payload.color } }
          : node
      );
    },
    setOldColor: (state, action: PayloadAction<{id: string, oldColor: string}>) => {
      state.nodes = state.nodes.map(node => node.id === action.payload.id ? {...node, data: {...node.data, oldColor: action.payload.oldColor}} : node);
    },
    setNewColor: (state, action: PayloadAction<{id: string, newColor: string}>) => {
      state.nodes = state.nodes.map(node => node.id === action.payload.id ? {...node, data: {...node.data, newColor: action.payload.newColor}} : node);
      //setting => past[]
      state.past.push({id: action.payload.id, property: "color", value: action.payload.newColor})
    },
    changeToPrevColor: (state, action: PayloadAction<{ id: string, oldColor: string, i: number}>) => {
      const arr = state.past.filter(item => item.id === action.payload.id);
      const index = arr.length - action.payload.i;
      const value = arr[index]?.value;
      console.log(JSON.stringify(value));
      
      
      state.nodes = state.nodes.map(node =>
        node.id === action.payload.id
          ? { ...node, data: { ...node.data, color: value} }
          : node
      );
    },
    changeToNewColor: (state, action: PayloadAction<{ id: string, newColor: string}>) => {
      state.nodes = state.nodes.map(node =>
        node.id === action.payload.id
          ? { ...node, data: { ...node.data, color: action.payload.newColor } }
          : node
      );
    },
    setFont: (state, action: PayloadAction<{id:string, font: string}>) => {
      state.nodes = state.nodes.map(item => item.id === action.payload.id ? {...item, data: {...item.data, fontSize: action.payload.font}} : item)
    },
  }
});

export const { changeNodeColor, setOldColor, setNewColor, changeToPrevColor, changeToNewColor, setFont } = graphSlice.actions;
export default graphSlice.reducer;
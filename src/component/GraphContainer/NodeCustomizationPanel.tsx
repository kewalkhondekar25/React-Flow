import { Handle, NodeProps, Position } from "reactflow";
import ColorPicker from "../ColorPicker";
import UndoRedoControls from "./UndoRedoControls";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openColor } from "../../features/colorSlice";
import { setFont } from "../../features/graphSlice";

const NodeCustomizationPanel = ({ id, data: { color, label } }: NodeProps<{ color: string, label: string }>) => {

  const { openColorPickerNodeId } = useAppSelector(state => state.color);
  const nodeColor = useAppSelector(state => state.graph.nodes.find(n => n.id === id));
  const size = nodeColor?.data.fontSize;
  const dispatch = useAppDispatch();

  const isColorPickerVisible = openColorPickerNodeId === id;

  return (
    <div style={{ position: "relative", height: "100px", width: "100px", backgroundColor: nodeColor?.data.color ?? color, display: "flex", flexDirection: "column", placeItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "2px" }}>
        <div style={{ backgroundColor: "white" }}>
          {isColorPickerVisible ? <ColorPicker id={id} oldColor={color} /> : <button onClick={() => dispatch(openColor(id))}>🖌️</button>}
        </div>
        <select onChange={(e) => dispatch(setFont({id, font: e.target.value}))}>
          {Array.from({ length: 13 }, (_, i) => {
            const fontSize = 12 + i;
            return <option key={fontSize} value={fontSize}>{fontSize}px</option>;
          })}
        </select>
      </div>
      <p style={{ fontSize: `${size}px`}}>{label}</p>
      <div >
        <UndoRedoControls id={id} />
      </div>
      <Handle type="source" position={Position.Bottom} id="source-handle" />
      <Handle type="target" position={Position.Top} id="target-handle" />
    </div>
  );
};

export default NodeCustomizationPanel;

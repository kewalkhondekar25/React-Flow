import { useCallback } from 'react';
import ReactFlow, { Node, Edge, ReactFlowProvider, Background, Controls, useNodesState, useEdgesState, Connection, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function GraphContainer() {

  const {nodes, edges} = useAppSelector(state => state.graph);
  const dispatch = useAppDispatch();

  const [nodeState, setNodeState, onNodeChange] = useNodesState(nodes);
  const [edgeState, setEdgeState, onEdgeChange] = useEdgesState(edges);

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length + 1}` }
    setEdgeState(prev => addEdge(edge, prev))
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ReactFlowProvider>
        <div style={{ width: '100vw', height: '90vh' }}>
          <ReactFlow
            nodes={nodeState}
            edges={edgeState}
            onNodesChange={onNodeChange}
            onEdgesChange={onEdgeChange}
            onConnect={onConnect}
            fitView >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default GraphContainer;

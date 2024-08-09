// CustomNode.tsx
import React from 'react';
import { Handle, Position, NodeProps } from 'react-flow-renderer';

interface CustomNodeProps extends NodeProps {
  data: {
    label: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div
      style={{
        height: 'full',
        width: 'full',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;

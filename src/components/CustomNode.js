import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="p-2 shadow-md rounded-md bg-white border-2 border-gray-300">
      <div className="flex">
        <div className="rounded-sm w-7 h-7 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2 my-auto">
          <div className="text-gray-500 text-sm">{data.label}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="invisible" />
      <Handle type="source" position={Position.Bottom} className="invisible" />
    </div>
  );
}

export default memo(CustomNode);

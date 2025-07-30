import React, { useState } from 'react';
import Sidebar from '../Builder/Sidebar'
import NodeForm from '../Builder/NodeTypes/NodeForm';
const Builder = () => {
  const [selectedNodeType, setSelectedNodeType] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onSelectNode={setSelectedNodeType} />

      <div className="flex-1 p-8">
        {selectedNodeType ? (
          <NodeForm nodeType={selectedNodeType} />
        ) : (
          <div className="text-center text-gray-600 mt-20 text-lg">
            Click a node type from the sidebar to start configuring your campaign.
          </div>
        )}
      </div>
    </div>
  );
};

export default Builder;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onSelectNode }) => {
  const navigate=useNavigate()
  return (
    <aside className="w-64 bg-white shadow-lg p-6">
      <h2 className="text-lg font-bold mb-4">Add Campaign Node</h2>

      <div
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer"
        onClick={() => onSelectNode('emailNode')}
      >
        📧 Email Node
      </div>

      <div
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 cursor-pointer"
        onClick={() => onSelectNode('delayNode')}
      >
        ⏳ Delay Node
      </div>

      <div
        className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => onSelectNode('conditionNode')}
      >
        🔍 Condition Node
      </div>
    </aside>
  );
};

export default Sidebar;

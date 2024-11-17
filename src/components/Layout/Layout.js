import React, { useState, useCallback } from 'react';
import './Layout.css';
import { CiSquarePlus } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import Dashboard from '../Dashboard/Dashboard';
import { ReactFlow, Controls, Background ,applyNodeChanges,applyEdgeChanges,MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1', // required
    position: {  x: 200, y: 25}, // required
    data: { label:(
        <div className='leadsource'>
          <CiSquarePlus /><br/>
          <strong>Add Lead Source</strong><br/>
          <small>Click to Addleads from List or CRM</small>
        </div>
      ), },
  },
  {
    id: '2', // required
    position: {  x: 200, y: 150 }, // required
    data: { label: 'Sequence Start Point' }, // required
  },
  {
    id: '3', // required
    position: {  x: 200, y: 200 }, // required
    data: { label:(
      <div className='add'>
        <CiSquarePlus /><br/>
      </div>
    ), }, // required
  },
];

const Initialedges = [{ id: '1-2', source: '1', target: '2'  ,type:"smoothstep"},
  { id: '2-3', source: '2', target: '3',type:"smoothstep"}];

export default function Layout() {

  const [node,setNode]=useState (initialNodes);
  const [edges,setEdges]=useState (Initialedges);

  const onNodesChange = useCallback(
    (changes) => setNode  ((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <>
    <Dashboard/>
        <div className='layout'>
        <ReactFlow
        nodes={node} 
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
      >
        {/* <MiniMap /> */}
              <Background />
              <Controls />
        </ReactFlow>
    </div>       
    </>
  )
}

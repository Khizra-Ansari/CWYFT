import React from 'react';
import { Link } from 'react-router-dom';
import CustomNode from '../components/Charts/CustomNodes';

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Edge,
  Node,
  addEdge,
} from 'react-flow-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faClock,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';

const nodeTypes = {
  customNode: CustomNode,
};

// Define the nodes and edges for the flow diagram
const nodes = [
  // Main Box
  {
    id: 'main-box',
    type: 'customNode',
    data: {
      label: (
        <div className="text-left bg-white">
          <h2 className="text-lg font-bold">RM-51 - Malicious Insider</h2>
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white font-bold border-4 border-white">
                $ 15m
              </div>
              <p className="mt-1 text-sm">Predicted Risk</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white font-bold border-4 border-white">
                30%
              </div>
              <p className="mt-1 text-sm">Probability</p>
            </div>
          </div>
          <hr className="my-3 border-gray-400" />
          <div className="mb-3">
            <h3 className="font-bold mb-1">Regulatory Risks</h3>
            <ul className="list-disc list-inside text-sm">
              <li>ISO27001 : A. 9.4.2</li>
              <li>SOC2 : CC6.1</li>
              <li>PCI-DSS : 8.3.2</li>
            </ul>
          </div>
          <hr className="my-3 border-gray-400" />
          <div className="mb-3">
            <h3 className="font-bold mb-1">Threats</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Sabotage</li>
              <li>Espionage</li>
              <li>IP Theft</li>
            </ul>
          </div>
          <hr className="my-3 border-gray-400" />
          <div className="mb-3">
            <h3 className="font-bold mb-1">Vulnerabilities</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Weak Authentication</li>
              <li>Unauthorized Access to Critical Assets</li>
            </ul>
          </div>
          <hr className="my-3 border-gray-400" />
          <div>
            <h3 className="font-bold mb-1">Severity</h3>
            <div className="flex items-center">
              <span className="">Critical</span>
              <div className="w-4 h-4 ml-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
    position: { x: 1, y: 50 },
    style: { width: 300, padding: 10, border: '1px solid #ddd' },
  },
  // First Set of Smaller Boxes
  {
    id: 'cyid-115',
    type: 'customNode',
    data: { label: 'CyID-115 : MFA' },
    position: { x: 400, y: 150 }, // Adjusted y position for spacing
    style: {
      width: 150,
      height: 50,
      background: '#1a76d2',
      color: 'white',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'cyid-198',
    type: 'customNode',
    data: { label: 'CyID-198 : SSO' },
    position: { x: 400, y: 250 }, // Adjusted y position for spacing
    style: {
      width: 150,
      height: 50,
      background: '#1a76d2',
      color: 'white',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'cyid-50',
    type: 'customNode',
    data: { label: 'CyID-50 : PAM' },
    position: { x: 400, y: 350 }, // Adjusted y position for spacing
    style: {
      width: 150,
      height: 50,
      background: '#1a76d2',
      color: 'white',
      border: '1px solid #ddd',
    },
  },

  // Second Set of Smaller Boxes
  {
    id: 'infra',
    type: 'customNode',
    data: { label: 'Infrastructure' },
    position: { x: 600, y: 150 }, // Adjusted y position for spacing
    style: {
      width: 150,
      height: 50,
      background: '#2c9c3d',
      color: 'white',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'cloud',
    type: 'customNode',
    data: { label: 'Cloud' },
    position: { x: 600, y: 250 }, // Adjusted y position for spacing
    style: {
      width: 150,
      height: 50,
      background: '#2c9c3d',
      color: 'white',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'version-control',
    type: 'customNode',
    data: { label: 'Version Control' },
    position: { x: 600, y: 350 }, // Adjusted y position for spacing
    style: {
      width: 150,
      height: 50,
      background: '#2c9c3d',
      color: 'white',
      border: '1px solid #ddd',
    },
  },

  // First Set of Nodes
  {
    id: 'vmware',
    type: 'customNode',
    data: { label: 'VMware' },
    position: { x: 900, y: 50 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'aws',
    type: 'customNode',
    data: { label: 'AWS' },
    position: { x: 900, y: 150 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'cisco',
    type: 'customNode',
    data: { label: 'Cisco' },
    position: { x: 900, y: 250 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'f5',
    type: 'customNode',
    data: { label: 'F5' },
    position: { x: 900, y: 350 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'salesforce',
    type: 'customNode',
    data: { label: 'Salesforce' },
    position: { x: 900, y: 450 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'azure',
    type: 'customNode',
    data: { label: 'Azure' },
    position: { x: 900, y: 550 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },

  // Second Set of Nodes
  {
    id: 'fortinet',
    type: 'customNode',
    data: { label: 'Fortinet' },
    position: { x: 900, y: 650 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'palo-alto',
    type: 'customNode',
    data: { label: 'Palo Alto' },
    position: { x: 900, y: 750 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'okta',
    type: 'customNode',
    data: { label: 'Okta' },
    position: { x: 900, y: 850 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
  {
    id: 'atlassian',
    type: 'customNode',
    data: { label: 'Atlassian' },
    position: { x: 900, y: 950 }, // Adjusted y position for spacing
    style: {
      width: 100,
      height: 50,
      background: '#e0e0e0',
      border: '1px solid #ddd',
    },
  },
];

const edges = [
  // Main Box to First Set
  {
    id: 'e-main-box-1',
    source: 'main-box',
    target: 'cyid-115',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-main-box-2',
    source: 'main-box',
    target: 'cyid-198',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-main-box-3',
    source: 'main-box',
    target: 'cyid-50',
    animated: true,
    style: { stroke: 'gray' },
  },

  // First Set to Second Set
  {
    id: 'e-1-1',
    source: 'cyid-115',
    target: 'infra',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-1-2',
    source: 'cyid-115',
    target: 'cloud',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-1-3',
    source: 'cyid-115',
    target: 'version-control',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-2-1',
    source: 'cyid-198',
    target: 'infra',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-2-2',
    source: 'cyid-198',
    target: 'cloud',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-2-3',
    source: 'cyid-198',
    target: 'version-control',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-3-1',
    source: 'cyid-50',
    target: 'infra',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-3-2',
    source: 'cyid-50',
    target: 'cloud',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-3-3',
    source: 'cyid-50',
    target: 'version-control',
    animated: true,
    style: { stroke: 'gray' },
  },

  // Second Set to Third Set
  {
    id: 'e-infra-vmware',
    source: 'infra',
    target: 'vmware',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-vmware',
    source: 'cloud',
    target: 'vmware',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-vmware',
    source: 'version-control',
    target: 'vmware',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-aws',
    source: 'infra',
    target: 'aws',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-aws',
    source: 'cloud',
    target: 'aws',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-aws',
    source: 'version-control',
    target: 'aws',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-cisco',
    source: 'infra',
    target: 'cisco',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-cisco',
    source: 'cloud',
    target: 'cisco',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-cisco',
    source: 'version-control',
    target: 'cisco',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-f5',
    source: 'infra',
    target: 'f5',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-f5',
    source: 'cloud',
    target: 'f5',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-f5',
    source: 'version-control',
    target: 'f5',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-salesforce',
    source: 'infra',
    target: 'salesforce',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-salesforce',
    source: 'cloud',
    target: 'salesforce',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-salesforce',
    source: 'version-control',
    target: 'salesforce',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-azure',
    source: 'infra',
    target: 'azure',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-azure',
    source: 'cloud',
    target: 'azure',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-azure',
    source: 'version-control',
    target: 'azure',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-fortinet',
    source: 'infra',
    target: 'fortinet',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-fortinet',
    source: 'cloud',
    target: 'fortinet',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-fortinet',
    source: 'version-control',
    target: 'fortinet',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-palo-alto',
    source: 'infra',
    target: 'palo-alto',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-palo-alto',
    source: 'cloud',
    target: 'palo-alto',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-palo-alto',
    source: 'version-control',
    target: 'palo-alto',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-okta',
    source: 'infra',
    target: 'okta',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-okta',
    source: 'cloud',
    target: 'okta',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-okta',
    source: 'version-control',
    target: 'okta',
    animated: true,
    style: { stroke: 'gray' },
  },

  {
    id: 'e-infra-atlassian',
    source: 'infra',
    target: 'atlassian',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-cloud-atlassian',
    source: 'cloud',
    target: 'atlassian',
    animated: true,
    style: { stroke: 'gray' },
  },
  {
    id: 'e-version-control-atlassian',
    source: 'version-control',
    target: 'atlassian',
    animated: true,
    style: { stroke: 'gray' },
  },
];

const RiskMap: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">Risk Map</h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between mt-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-4 w-full sm:w-auto">
          <Link
            to="/"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Risk Register
          </Link>
          <Link
            to="/Risk/Dashboard"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto"
          >
            Risk Dashboard
          </Link>
          <Link
            to="/Risk/Map"
            className="px-4 py-2 bg-black text-white dark:bg-slate-300 dark:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto"
          >
            Risk Map
          </Link>
        </div>
        <Link
          to="/new-risk"
          className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto mt-2 sm:mt-0"
        >
          New Risk
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center w-full mt-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white dark:bg-boxdark w-full h-12 sm:w-auto sm:h-auto">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="w-4 h-4 mr-2"
            />
            <span className="font-medium mr-2">Breach Risk</span>
            <span className="font-bold">USD 150M</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white dark:bg-boxdark w-full h-12 sm:w-auto sm:h-auto">
            <FontAwesomeIcon icon={faClock} className="w-6 h-4 mr-2" />
            <span className="font-medium mr-2">Probability</span>
            <span className="font-bold">67%</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white dark:bg-boxdark w-full h-12 sm:w-auto sm:h-auto">
            <FontAwesomeIcon icon={faCubes} className="w-4 h-4 mr-2" />
            <span className="font-medium mr-2">Analysed Assets</span>
            <span className="font-bold">67k</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 max-md:flex-wrap max-sm:gap-2 -mt-1">
        <select className="h-7 w-60 dark:bg-boxdark text-sm max-md:w-32 max-sm:text-[12px] font-normal rounded-md px-2 text-gray-700 cursor-pointer mt-4 outline-none">
          <option>RM-51 : Malicious Insider</option>
          <option>Category-1</option>
          <option>Category-2</option>
        </select>
        <select className="h-7 w-60 dark:bg-boxdark text-sm max-md:w-32 max-sm:text-[12px] font-normal rounded-md px-2 text-gray-700 cursor-pointer mt-4 outline-none">
          <option>Select Controls : e.g. CyID-01</option>
          <option>Owner-1</option>
          <option>Owner-2</option>
        </select>
      </div>

      <div className="mt-8" style={{ height: '600px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          style={{ width: '100%', height: '100%' }}
        >
          <MiniMap />
          {/* <Controls /> */}
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </>
  );
};

export default RiskMap;

import Layout from "@/components/Layout"
import { useCurrPathContext } from "context/currPathProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Head from "next/head";
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MarkerType } from 'reactflow';

import CustomNode from "@/components/CustomNode";
import 'reactflow/dist/style.css';
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'What makes a founder?',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Consulting exits',
    href: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'What an MBA can get you',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  { id: '1', type: 'custom', position: { x: 50, y: 300 }, data: { label: 'Engineering', emoji: '🎓' } },
  { id: '2', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Founder', emoji: '🚀' } },
  { id: '3', type: 'custom', position: { x: 240, y: 300 }, data: { label: 'Business', emoji: '🎓' } },
  { id: '4', type: 'custom', position: { x: 130, y: 180 }, data: { label: 'Consulting', emoji: '📈' }, sourcePosition: 'right' },
];
const initialEdges = [
  { id: 'e1-2', source: '2', target: '1', label: '50%' },
  { id: 'e1-4', source: '4', target: '1', label: '50%', markerStart: {
    type: MarkerType.ArrowClosed,
    width: 25,
    height: 25,
  },  },
  { id: 'e3-4', source: '4', target: '3', label: '25%' },
  { 
    id: 'e3-2', 
    source: '2', 
    target: '3', 
    label: '75%', 
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 25,
      height: 25,
    }, 
  },
];

export default function Insights() {
    const { currPathContext } = useCurrPathContext();
    const [currPath, setCurrPath] = currPathContext;
    setCurrPath('Insights')

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="h-screen">
    <Head>
        <title>Insights | CareerMatcha</title>
        <meta name="description" content="CareerMatcha+" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="Insights | CareerMatcha"/>
        <meta property="og:description" content="Career inspiration, curated for you."/>
        <meta property="og:image" content="/preview.png" />
      </Head>
    <Layout
    heading={'Insights'}
    main={
    <div className="relative isolate">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
      <div className="space-y-8">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className="overflow-hidden bg-white p-2 shadow sm:rounded-md h-[550px]"
        >
          <h3 className="p-4 font-medium leading-1 tracking-tight text-green-700">{action.title}</h3>
            <div className="w-full h-full">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                panOnDrag={false}
                zoomOnScroll={false}
                elevateEdgesOnSelect={true}
                // nodesDraggable={false}
                nodeTypes={nodeTypes}
              />
            
          </div>
          
        </div>
      ))}
    </div>
  {/* <div className="rounded-lg bg-white shadow lg:h-80 overflow-hidden">
      <div className="w-full h-96">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnDrag={false}
        zoomOnScroll={false}
        elevateEdgesOnSelect={true}
        nodesDraggable={false}
      />
    </div>
    </div> */}
    </div>}
    />
    </div>
  )
}

export async function getServerSideProps(context) {
  
    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false
        }
      }
    }

    return {
        props: {}
    }
}
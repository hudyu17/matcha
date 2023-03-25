import { MarkerType, Position } from 'reactflow';

export const nodes = [
    { id: '1', type: 'custom', position: { x: 50, y: 300 }, data: { label: 'Engineering', emoji: '🎓' }, targetPosition: 'top' },
    { id: '2', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Founder', emoji: '🚀' } },
    { id: '4', type: 'custom', position: { x: 130, y: 180 }, data: { label: 'Consulting', emoji: '📈' }, sourcePosition: 'right' },
];

export const edges = [
    { id: 'e1-2', source: '1', target: '2', label: '50%' },
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
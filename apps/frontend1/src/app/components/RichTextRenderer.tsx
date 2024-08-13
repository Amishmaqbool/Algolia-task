import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface RichTextRendererProps {
  document: any
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  return <div className="rich-text-container">{documentToReactComponents(document)}</div>;
};

export default RichTextRenderer;

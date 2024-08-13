import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Define the props for the component
interface RichTextRendererProps {
  document: any; // The Contentful JSON document
}

// Component to render rich text content
const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  return <div>{documentToReactComponents(document)}</div>;
};

export default RichTextRenderer;

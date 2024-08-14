import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface RichTextRendererProps {
  document: any;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  const renderedComponents = documentToReactComponents(document);

  return (
    <div className="rich-text-container">
      <h6>ASSESSMENT</h6>
      {renderedComponents[0]}
      <p>&#128340; Takes only 2 minutes</p>
      {renderedComponents[1]}
    </div>
  );
};

export default RichTextRenderer;

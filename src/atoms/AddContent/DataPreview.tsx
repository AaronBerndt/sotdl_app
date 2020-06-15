import React from "react";
import styled from "styled-components";

interface DataPreviewProps {
  data: any;
}

const Preview = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

function DataPreview({ data }: DataPreviewProps) {
  return (
    <>
      <Preview>{JSON.stringify(data)}</Preview>
    </>
  );
}

export default DataPreview;

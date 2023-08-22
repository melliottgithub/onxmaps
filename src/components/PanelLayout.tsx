import React, { ReactElement } from 'react';

interface Props {
  headerPanel: React.ReactNode,
  contentPanel: React.ReactNode,
  bottomPanel: React.ReactNode,
}

export default function PanelLayout(props: Props): ReactElement {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div>
          {props.headerPanel}
        </div>
        <div className="h-[calc(100%-20rem)]">
          {props.contentPanel}
        </div>
      </div>
      {props.bottomPanel}
    </>
  );
}

import React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

const Loading = () => {
  return (
    <>
      <Spinner size={SpinnerSize.large} />
    </>
  );
};

export default Loading;

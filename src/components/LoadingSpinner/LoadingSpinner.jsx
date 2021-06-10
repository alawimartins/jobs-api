import React from 'react';
import * as Styled from './loadingSpinner.styles.js'

const LoadingSpinner = () => (
  <Styled.SpinnerWrapper>
    <Styled.Spinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="6"
      />
    </Styled.Spinner>
  </Styled.SpinnerWrapper>
);

export default LoadingSpinner
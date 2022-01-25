import React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { debounce } from 'lodash';

import { useDispatch } from 'react-redux';
import { setLimit } from '../actions/index';

function Limit() {
  const dispatch = useDispatch();

  const handleLimitChange = debounce(limit => {
    dispatch(setLimit(limit));
  }, 1000);

  const handleInc = (limit) => {
    let inc = parseInt(limit);
    inc < 49 ? (inc = inc + 4) : (inc = 52);
    handleLimitChange(inc);
    return inc;
  }
  const handleDec = (limit) => {
    let dec = parseInt(limit);
    dec > 4 ? (dec = dec - 4) : (dec = 4);
    handleLimitChange(dec);
    return dec;
  }

  return <SpinButton
        style={{ width: '50px' }}
        defaultValue='4'
        label={'Limit:'}
        min={4}
        max={52}
        step={4}
        onChange={e => handleLimitChange(e.target.value)}
        onIncrement={e => handleInc(e)}
        onDecrement={e => handleDec(e)}
        incrementButtonAriaLabel={'Increase value by 4'}
        decrementButtonAriaLabel={'Decrease value by 4'}
      />;
}

export default Limit;
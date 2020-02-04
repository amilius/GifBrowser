import React, { Fragment } from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { debounce } from 'lodash';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTextSearch } from '../actions/index';

function Search() {
  const dispatch = useDispatch();

  const handleChange = debounce(txt => {
    dispatch(setTextSearch(txt));
  }, 1000);

  return (
    <Fragment>
      <SearchBox
        id='search'
        placeholder='Type to Search for GIFs'
        onSearch={newValue => handleChange(newValue)}
        onChange={e =>
          e != null ? handleChange(e.target.value) : handleChange('')
        }
      />
    </Fragment>
  );
}

export default Search;

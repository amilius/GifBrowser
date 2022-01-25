import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setTextSearch } from '../actions/index';

function Search() {
  const dispatch = useDispatch();

  const handletextChange = debounce(txt => {
    dispatch(setTextSearch(txt));
  }, 1000);

  return <SearchBox
        id='search'
        placeholder='Type to Search for GIFs'
        onSearch={newValue => handletextChange(newValue)}
        onChange={e =>
          e != null ? handletextChange(e.target.value) : handletextChange('')
        }
      />;
}

export default Search;

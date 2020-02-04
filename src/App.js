import React from 'react';
import './App.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

import Search from './components/search/Search';
import Limit from './components/search/Limit';
import FavGIFS from './components/gif/FavGIFS';
import LoadedGIFS from './components/gif/LoadedGIFS';

initializeIcons();

const stackTokens = {
  childrenGap: 10,
  padding: 10
};

function App() {
  return (
    <div className='App'>
      <div className='ms-Grid'>
        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-u-lg9 ms-lg9 block'>
            <Stack
              horizontal
              //horizontalAlign='space-between'
              tokens={stackTokens}
            >
              <Stack.Item grow>
                <Search />
              </Stack.Item>
              <Stack.Item disableShrink>
                <Limit />
              </Stack.Item>
            </Stack>
            <div className='scrollMain'>
              <LoadedGIFS />
            </div>
          </div>

          <div className='ms-Grid-col ms-u-lg3 ms-lg3 block scrollRight'>
            <FavGIFS />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

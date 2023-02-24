import React from 'react';
import ReactDOM from 'react-dom';
import AutoSizer from "react-virtualized-auto-sizer";
import List from "react-virtualized-auto-sizer";
// import 'react-virtualized-auto-sizer/styles.css'; // only needs to be imported once

// List data as an array of strings
const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',

];

function rowRenderer({key, index, style}) {
  return (
      <div key={key} style={style}>
        {list[index]}
      </div>
  );
}



export default function Test(){
  return(
      <div>
        <AutoSizer>
          {({height, width}) => (
              <List
                  height={height}
                  rowCount={list.length}
                  rowHeight={20}
                  rowRenderer={rowRenderer}
                  width={width}
              />
          )}
        </AutoSizer>
      </div>
  )
}

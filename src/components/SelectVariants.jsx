import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect} from "react";


/**
 * 选择分类组件，传递进来的数据需要包含labels
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function SelectVariants(props) {
  /**
   * 设置分类标签
   */
  const [myLabel, setLabel] = React.useState('');
  /**
   * 修改分类
   * @param event
   */
  const handleChange = (event) => {
    setLabel(event.target.value);
  };


  // useEffect(()=>{
  //   props.ref1.current = {
  //     label:myLabel
  //     }
  //   })
  console.log(myLabel)
  return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: props.minWidth }}>
          <InputLabel id="simple-select-standard-label">分类</InputLabel>
          <Select
              labelId="simple-select-standard-label"
              id="simple-select-standard"
              value={myLabel}
              onChange={handleChange}
              label="项目"
          >
            {props.labels.map((label)=>(<MenuItem key={label} value={label}>{label}</MenuItem> ))}
          </Select>
        </FormControl>
      </div>
  );
}

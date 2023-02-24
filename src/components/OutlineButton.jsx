import {Button} from "@mui/material";
import * as React from "react";

/**
 * 边框按钮
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function  OutlineButton(props){
  return(
      <Button onClick={props.onClick} variant={"outlined"} size={props.size?props.size:"large"} style={{color:'#8d6e63', border:'1px solid #8d6e63'}}>{props.children}</Button>
  )
}

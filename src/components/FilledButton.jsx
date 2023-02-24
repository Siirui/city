import {Button} from "@mui/material";
import * as React from "react";

export default function FilledButton(props) {
  return (
      <Button onClick={props.onClick} variant={"contained"} size={props.size ? props.size : "large"}
              style={{margin: '0 20px'}}>{props.children}</Button>
  )
}

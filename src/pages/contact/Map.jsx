import {InfoWindow, Marker, ScaleControl, Map} from "react-bmapgl";
import React from "react";
import {getPoi} from "../../axios";



/**
 * 地图组件封装
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MyMap(props) {
  /**
   * 按照经纬度获取位置
   * @param x
   * @param y
   */
  const getLocation=(x,y)=>{
    setLatlng({lat: x, lng: y})
    getPoi(x,y).then((data)=>{
      setLocation(data)
    })
  }
  const [latlng, setLatlng] = React.useState({lat:31.292195698179793 , lng:121.54626914810665})
  const[location, setLocation] = React.useState('')

  //在初始化的时候进行位置设置
  getPoi(latlng.lat,latlng.lng).then((data)=>{
    setLocation(data)
  })

  return (
      <div>
        {/*<div style={{height:'100%', width:'50%'}}>*/}
        <Map id={"dituContent"} onClick={(e) => {
          getLocation(e.latlng.lat,e.latlng.lng)
          console.log((e.latlng.lat),(e.latlng.lng))
        }} enableScrollWheelZoom={true} center={{lng: latlng.lng, lat: latlng.lat}} zoom="16">
          <Marker position={{lng: latlng.lng, lat: latlng.lat}}/>
          <ScaleControl/>
          <InfoWindow position={{lng: latlng.lng, lat: latlng.lat}} text={location} title="地址信息"/>
        </Map>
      </div>
  )
}

import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window';
import { FixedSizeGrid as Grid } from 'react-window';
import ImgMediaCard from "./ImgMediaCard";
const model_paths = ['models/moxing/charge/', 'models/moxing/dianziping/', 'models/moxing/flower/', 'models/moxing/gonggaolan/', 'models/moxing/grass/', 'models/moxing/greenwall/', 'models/moxing/guizi1/', 'models/moxing/guizi2/', 'models/moxing/guizi3/', 'models/moxing/guizi4/', 'models/moxing/lighwall/', 'models/moxing/streetlight/', 'models/moxing/streetlight2/', 'models/moxing/streetlight3/', 'models/moxing/streetlight4/', 'models/moxing/streeylight5/', 'models/moxing/yiliaoboz/', 'models/moxing/zhanban1/'];
const model_names = ['167', 'info+kiosk+with+55+inch+horizontal+touch+screen+panel', 'Sem+nome', '263xcl', 'grass', 'Plant+wall (1)', 'book+chest', 'Kids+toys', 'Wooden+bookcase+decor', 'cp_sport_1950_1200_500_2015_08_22', 'plant+wall+pannel', 'Antique+Lamp', 'Lamp-Flowers', 'street+lamps', 'street+lamps', 'street+lamps', 'yiliaobox', 'bulletin+board (1)']
const pic_urls = ['images\\xuanran\\3色草坪.png', 'images\\xuanran\\guizi2.png', 'images\\xuanran\\light1.png', 'images\\xuanran\\light2.png', 'images\\xuanran\\light2发光.png', 'images\\xuanran\\light3发光.png', 'images\\xuanran\\light4.png', 'images\\xuanran\\light4发光.png', 'images\\xuanran\\light5.png', 'images\\xuanran\\light5发光.png', 'images\\xuanran\\light3.png', 'images\\xuanran\\充电桩.png', 'images\\xuanran\\公告栏.png', 'images\\xuanran\\公告栏整体.png', 'images\\xuanran\\医疗箱.png', 'images\\xuanran\\展板1.png', 'images\\xuanran\\柜子1.png', 'images\\xuanran\\柜子3.png', 'images\\xuanran\\柜子4.png', 'images\\xuanran\\灯墙.png', 'images\\xuanran\\灯墙白.png', 'images\\xuanran\\电子屏.png', 'images\\xuanran\\绿化墙.png', 'images\\xuanran\\绿化花1m1m.png']

function renderRow(props) {
  const { index, style } = props;

  return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ImgMediaCard pic_url={pic_urls[index]} model_path={model_paths[index]} model_name={model_names[index]}/>
      </ListItem>
  );
}

const Cell = ({ columnIndex, rowIndex}) => (
      <ImgMediaCard pic_url={pic_urls[2*columnIndex + rowIndex]} model_path={model_paths[2*columnIndex + rowIndex]} model_name={model_names[2*columnIndex + rowIndex]}/>
);
export default function CardList() {
  return (
      <Box
          sx={{ width: '100%', height: 400, maxWidth: 800, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
            height={400}
            width={360}
            itemSize={390}
            itemCount={model_paths.length}
            overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>

        {/*<Grid*/}
        {/*    rowCount={Math.round(model_paths.length/2)}*/}
        {/*    columnWidth={400}*/}
        {/*    height={400}*/}
        {/*    columnCount={5}*/}
        {/*    rowHeight={200}*/}
        {/*    width={360}*/}
        {/*>*/}
        {/*  {Cell}*/}
        {/*</Grid>*/}
      </Box>
  );
}

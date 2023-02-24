import axios from "axios";

const baseUrl = "http://139.196.181.119:3000/"
let location="";

/**
 * 后端百度地图API，如果直接请求百度地图api产生跨域
 * @param x
 * @param y
 * @returns {Promise<string>}
 */
async function getPoi(x, y) {
  // let token = "33X0NsFGdzK75bVRULnf3zGt4Os450GW";
  let url = baseUrl +  "map/query?lat=" + x +"&lng=" + y ;
  // document.write("<meta http-equiv=\"Content-Security-Policy\" content=\"upgrade-insecure-requests\">")
  await axios.get(url).then(function (res){
    location = res.data
  }).catch((err) => {
    console.log(err)
  });
  return(location)
}

export {getPoi}

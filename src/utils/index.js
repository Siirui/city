import {GLTFExporter} from "three/examples/jsm/exporters/GLTFExporter";
import {OBJExporter} from "three/examples/jsm/exporters/OBJExporter";

/**
 * OBJ导出
 * @param input
 */
export function exportToObj(input) {

  const exporter = new OBJExporter();
  const result = exporter.parse( input );
  saveString( result, 'object.obj' );

}

/**
 * 模型下载导出接口GLTF
 * @param input
 */
export function exportGLTF( input ) {

  const gltfExporter = new GLTFExporter();

  const options = {
    trs: false,
    onlyVisible: true,
    truncateDrawRange: true,
    binary: true,
    maxTextureSize: 4096
  };
  gltfExporter.parse(
      input,
      function ( result ) {

        if ( result instanceof ArrayBuffer ) {

          saveArrayBuffer( result, 'scene.glb' );

        } else {

          const output = JSON.stringify( result, null, 2 );
          console.log( output );
          saveString( output, 'scene.gltf' );
        }

      },
      function ( error ) {
        console.log( 'An error happened during parsing', error );
      },
      options
  );

}

const link = document.createElement( 'a' );
link.style.display = 'none';
document.body.appendChild( link ); // Firefox workaround, see #6594

function save( blob, filename ) {

  link.href = URL.createObjectURL( blob );
  link.download = filename;
  link.click();
  // URL.revokeObjectURL( url ); breaks Firefox...

}

function saveString( text, filename ) {

  save( new Blob( [ text ], { type: 'text/plain' } ), filename );

}


function saveArrayBuffer( buffer, filename ) {

  save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );

}


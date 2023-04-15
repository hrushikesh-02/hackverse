export default function Sketch({ data }) {
  return (
    <div className="sketch" style={{ width: "100%", height: "100%" }}>
      <iframe
        className="p5frame"
        style={{ width: "100%", height: "100%" }}
        srcDoc={`
<!DOCTYPE html>
<html lang="en">
  <head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
  <style>
      html, body {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
      canvas {
          display: block;
      }
  </style>                      
  <meta charset="utf-8" />

  </head>
  <body>
  <script>
    let R = ${data.nft[0]};
    let r = ${data.nft[1]};
    let d = ${data.nft[2]};
  </script>
  <script src=${"/sketch.js"}></script>
  </body>
</html> `}
      ></iframe>
    </div>
  );
}

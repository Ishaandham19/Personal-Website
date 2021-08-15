import React, {useRef, useEffect} from 'react'

function AnimationBackground() {
    const canvasRef = useRef(null)

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#0000FF'
        // sierpinski's triangle code 
        const createTriangle = (pos, sidelen) => {
          ctx.beginPath();
          ctx.moveTo(...pos); // go to the left vertex
  
          // note that (0,0) in canvas is the top left, so 'up' on the vertical component would use substraction.
          ctx.lineTo(pos[0] + sidelen / 2, pos[1] - sidelen * Math.sin(Math.PI/3)); // draw line from left vertex to top vertex
          ctx.lineTo(pos[0] + sidelen, pos[1]); // draw line from top vertex to right vertex
          ctx.lineTo(...pos); // draw line from right vertex back to left vertex
          ctx.closePath();
          ctx.fill(); // fill triangle
      };
  
        const createSierpinskiTriangle = (pos, sidelen, depth) => {
          const innerTriangleSidelen = sidelen / 2; // side length of inner triangles is half the side length of the outer triangle
          const innerTrianglesPositions = [
            pos,
            [ pos[0] + innerTriangleSidelen, pos[1] ],
            [ pos[0] + innerTriangleSidelen / 2, pos[1] - Math.sin(Math.PI/3) * innerTriangleSidelen ]
          ]; // these positions are the same as what was used in the createTriangle function
          if (depth == 0) {
            innerTrianglesPositions.forEach((trianglePosition) => {
              createTriangle(trianglePosition, innerTriangleSidelen);
            });
          } else {
            innerTrianglesPositions.forEach((trianglePosition) => {
              createSierpinskiTriangle(trianglePosition, innerTriangleSidelen, depth - 1);
            });
          }
        }

        createSierpinskiTriangle([0, 1000], 1000, 5);
      }
      
      useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        //Our draw come here
        //Our draw came here
        const render = () => {
            frameCount++
            draw(ctx, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        // render()
        draw(ctx, 0)

        // return () => {
        //     window.cancelAnimationFrame(animationFrameId)
        // }
      }, [draw])
  

    return (
       <canvas className="cw" ref={canvasRef}></canvas>
    )
}

export default AnimationBackground

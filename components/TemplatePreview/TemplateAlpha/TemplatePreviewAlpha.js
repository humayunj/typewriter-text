import { useEffect, useRef } from "react";
import getLines from "../../utils/getLines";

const WIDTH = 256;
const HEIGHT = 450;

export default function TemplatePreviewAlpha({ text, author, setCanvas }) {
  let canvas = useRef(null);
  let img = useRef(null);

  useEffect(() => {
    canvas.current.width = WIDTH;
    canvas.current.height = HEIGHT;

    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "white";
  }, []);

  useEffect(() => {
    setCanvas(canvas);
  }, [canvas, setCanvas]);
  const imageLoaded = (ev) => {
    const ctx = canvas.current.getContext("2d");
    ctx.drawImage(img.current, 0, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT);

    ctx.font = "16px Tippa";
    ctx.fillStyle = "#000";

    const m = ctx.measureText(text || "");
    const PADDING = 15;
    const LINE_HEIGHT = 24;
    const x = PADDING;
    const y = HEIGHT / 2;

    const lines = getLines(ctx, text, WIDTH - PADDING * 2);

    let i = 0;
    for (const l of lines) {
      ctx.fillText(l, x, y + i++ * LINE_HEIGHT - ((lines.length - 1) * 20) / 2);
    }

    ctx.textAlign = "end";
    if (author)
      ctx.fillText(
        `—${author}`,
        WIDTH - 30,
        y + (lines.length * LINE_HEIGHT) / 2 + 30
      );
  };
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0px 0px 2px 2px #0001",
        borderRadius: "4px",
        // background:"red"
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={img}
        src={"/alpha-texture.jpg"}
        onLoad={imageLoaded}
        alt="Preview texture"
        width={`${WIDTH}px`}
        height={`${HEIGHT}px`}
        style={{ display: "none" }}
      />

      {/* 

      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: "1",
          padding: "20px",
        }}
        className="flex justify-center items-center"
      >
        <p style={textStyles}>{`${text}`}</p>
      </div> */}

      <canvas width={`${WIDTH}px`} height={`${HEIGHT}px`} ref={canvas}></canvas>
    </div>
  );
}

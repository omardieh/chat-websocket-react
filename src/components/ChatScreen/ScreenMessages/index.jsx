import React, { useEffect, useRef } from "react";
import classes from "./ScreenMessages.module.css";

function ScreenMessages({ messages }) {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return (
    <section className={classes.screen}>
      {messages.map((e, i) => (
        <div ref={divRef} className={classes.message} key={i}>
          <span className={classes.spanAuthor}>{e.author}</span>
          <span className={classes.spanDate}> {e.date} </span>
          <p className={classes.pMessage}>{e.message}</p>
        </div>
      ))}
    </section>
  );
}

export default ScreenMessages;

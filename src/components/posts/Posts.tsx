import React, { useEffect, useState } from "react";
import { getPostsAsync } from "./postsSlice";
import styles from "./Posts.module.css";
import { Fade } from "@material-ui/core";
import { useDispatch } from "react-redux";

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  return (
    <Fade in={true} timeout={1200}>
      <section className={styles.counter}>
        <h1>Посты</h1>
      </section>
    </Fade>
  );
}

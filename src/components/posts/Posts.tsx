import React, { useEffect } from "react";
import {
  getPostsThunk,
  selectPosts,
  selectIsLoading,
  IPostTransform,
} from "./postsSlice";
import styles from "./Posts.module.css";
import { Fade } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Loading/Loading";
import { useTranslation } from "react-i18next";

export function Posts() {
  const { t } = useTranslation();

  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPostsThunk());
    }
  }, []); // eslint-disable-line

  const elements = () =>
    (posts as IPostTransform[]).map(({ id, title }) => (
      <div key={id}>
        {title}
        <br />
      </div>
    ));

  return (
    <Fade in={true} timeout={1200}>
      <section className={styles.posts}>
        <h1>{t("title")}</h1>
        {isLoading && <Loading />}
        {posts && elements()}
      </section>
    </Fade>
  );
}

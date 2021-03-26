import { CircularProgress } from "@material-ui/core";
import React from "react";

export const Loading: React.FC = React.memo(() => {
  return (
    <div className="center_block">
      <CircularProgress />
    </div>
  );
});

import ENV_SERVER from "@/src/server/ENV_SERVER";
import React from "react";
import ObjectViewer from "components/ObjectViewer";

function ENV({ env }) {
  return <ObjectViewer data={env}></ObjectViewer>;
}

export const getServerSideProps = async () => {
  if (!ENV_SERVER.IS_DEV) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      env: ENV_SERVER.toObject(),
    },
  };
};

export default ENV;

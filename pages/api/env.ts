import ENV_PUBLIC from "@/src/ENV_PUBLIC";
import ENV_SERVER from "@/src/server/ENV_SERVER";
import { NextApiRequest, NextApiResponse } from "next/types";

// default handler with types
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // return res.status(200).json({ what: "dd" });
  const showEnv = ENV_SERVER.IS_DEV;
  const envs = {
    ENV_PUBLIC,
    ENV_SERVER,
  };
  console.log("ENV : ", envs);
  const retval = showEnv
    ? ENV_SERVER.toObject()
    : { message: "Check server console" };
  return res.status(200).json(retval);
}

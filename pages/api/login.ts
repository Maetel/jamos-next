import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc } from "firebase/firestore";
import firestore from "@/src/server/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const retval = await addDoc(collection(firestore, "users"), {
    name: "John Doe",
  });
  console.log({ retval });
  res.status(200).json({ name: "John Doe" });
}

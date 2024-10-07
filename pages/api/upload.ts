import { parseFormData } from "@/scripts/server/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import storage from "@/src/server/storage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const file = await parseFormData(req, "image");

  const fileRef = ref(storage, `images/${file.name}`);
  const uploadRes = await uploadBytes(fileRef, file.blob);
  console.log({ file, uploadRes });

  const url = await getDownloadURL(fileRef);
  console.log({ url });

  return res.status(200).json({ name: "John Doe", url });
}

import { getFile } from "@/lib/services/file.upload";

interface IMongoImage {
  imageId: string;
  [key: string]: any;
}

const MongoImage = async ({imageId, ...props}: IMongoImage) => {
  const file = await getFile(imageId);
  if (!file) return console.log("[MongoImage] Couldn't get the requested file")
  
  // if not an image
  if (!file.mimeType.includes("image")) return console.log("[MongoImage] The id provided isn't an image")

  // build the image src
  const imageSrc = `data:${file.mimeType};base64,${file.b64Buffer}`;
  return (
    <img src={imageSrc} {...props} />
  )
}

export default MongoImage
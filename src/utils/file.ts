import imageCompression from "browser-image-compression";

export const getBase64 = async (file: Blob): Promise<string | undefined> => {
  const reader = new FileReader();
  reader.readAsDataURL(file as Blob);

  return new Promise((reslove, reject) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reader.onload = () => reslove(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

type Options = {
  /** @default Number.POSITIVE_INFINITY */
  maxSizeMB?: number;
  /** @default undefined */
  maxWidthOrHeight?: number;
  /** @default false */
  useWebWorker?: boolean;
  /** @default 10 */
  maxIteration?: number;
  /** Default to be the exif orientation from the image file */
  exifOrientation?: number;
  /** A function takes one progress argument (progress from 0 to 100) */
  onProgress?: (progress: number) => void;
  /** Default to be the original mime type from the image file */
  fileType?: string;
  /** @default 1.0 */
  initialQuality?: number;
};

const compressImage = async (
  file: File,
  options: Options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 400,
    useWebWorker: true,
  }
) => {
  const imageFile = file;
  console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log(
      "compressedFile instanceof Blob",
      getBase64(compressedFile) instanceof Blob
    ); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    return compressedFile;
  } catch (error) {
    console.log(error);
  }
  return file;
};

export const compressImageWithBase64 = async (file: File) => {
  try {
    return await getBase64(await compressImage(file));
  } catch (ex) {
    console.log(ex);
  }
  return undefined;
};

import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FileRejection, useDropzone } from "react-dropzone";
import { useGetUser } from "./use-get-user";
import { compressImageWithBase64 } from "../../utils/file";
import { files } from "../../config/file";
import { User } from "../models/user";
import { updateUser } from "../services/user-service-command";

export const useEditUserFacade = () => {
  const { data } = useGetUser();
  const history = useHistory();
  const [file, setFile] = useState(() => data?.avatar);
  const [fileErrorMessage, setFileErrorMessage] = useState<
    string | undefined
  >();

  useEffect(() => {
    setFile(data?.avatar);
  }, [data]);

  const onDrop = useCallback(async (acceptedFiles) => {
    setFileErrorMessage(undefined);
    setFile(await compressImageWithBase64(acceptedFiles[0]));
  }, []);

  const onDropRejected = useCallback(async (rejectedFiles: FileRejection[]) => {
    const error = rejectedFiles[0].errors[0].code;
    if (error === "file-too-large") {
      setFileErrorMessage(
        `Max file size is ${files.image.maxFileSize / 1_000_000}MB`
      );
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: onDrop,
    onDropRejected,
    noDrag: true,
    multiple: false,
    maxSize: files.image.maxFileSize,
    accept: files.image.types,
  });

  const onSubmit = async (values: User) => {
    try {
      await updateUser({ ...data, ...values, avatar: file as string });
      handleCancel();
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleCancel = () => {
    history.push("/user-profile");
  };
  return {
    getInputProps,
    getRootProps,
    fileErrorMessage,
    onSubmit,
    handleCancel,
    data,
    file,
  };
};

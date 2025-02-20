"use client";

import {
  Avatar,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import { useState, useRef, useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";
import { useTranslations } from "next-intl";

export default function UploadPfP({ pfp, id, setPfp, t }) {
  const [picture, setPicture] = useState(pfp);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [ableToUpload, setAbleToUpload] = useState(false);
  const onCloseRef = useRef(null);

  const { userData, setUserData } = useContext(GlobalContext);

  const handleImageChange = (file) => {
    setFile(file);
    setPicture(URL.createObjectURL(file));
    if (!ableToUpload) setAbleToUpload(true);
  };

  const submit = async () => {
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;
      try {
        const response = await fetch("/api/pfp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ file: base64data }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Upload successful:", data.url);

          try {
            const response = await fetch(
              `https://onecs-back.onrender.com/app/artisan/edit_artisan_profile/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ pfp: data.url, id }),
              }
            );
            const result = await response.json();
            if (response.ok) {
              console.log("good", result);
              const updatedUserData = {
                ...userData,
                pfpLink: data.url,
              };
              setUserData(updatedUserData);
              document.cookie = `userData=${JSON.stringify(
                updatedUserData
              )}; path=/;`;

              setPfp(data.url);

              onCloseRef.current();
            } else {
              console.error("Error:", result);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        } else {
          console.error("Upload failed:", data.error);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setUploading(false);
      }
    };
  };

  return (
    <ModalContent>
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t("uploadPfpModal.title")}
            </ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <FileUploader
                handleChange={handleImageChange}
                name="Picture"
                types={["JPG", "PNG", "JPEG"]}
                maxSize={5}
              />
              <Avatar
                fallback
                src={picture}
                className="rounded-full h-[150px] w-[150px]"
              />
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button color="danger" variant="flat" onPress={onClose}>
                {t("uploadPfpModal.cancelButton")}
              </Button>
              <Button
                color="primary"
                onClick={submit}
                isLoading={uploading}
                isDisabled={!ableToUpload}
              >
                {t("uploadPfpModal.saveButton")}
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}

"use client";

import React from "react";
import {
  Button,
  Image,
  Input,
  Modal,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function AddPost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const t = useTranslations("/artisan.Portfolio");

  return (
    <div>
      <Button
        className="bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px]"
        onClick={onOpen}
      >
        {t("addPostButton")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="m-1 sm:m-0"
      >
        <NewPost />
      </Modal>
    </div>
  );
}

import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import { useState, useRef, useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";

function NewPost() {
  const t = useTranslations("/artisan.addPostModal");
  const [picture, setPicture] = useState(
    "https://i0.wp.com/citygem.app/wp-content/uploads/2024/08/placeholder-8.png?ssl=1"
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [ableToUpload, setAbleToUpload] = useState(false);
  const onCloseRef = useRef(null);
  const { userData } = useContext(GlobalContext);

  const handleImageChange = (file) => {
    setFile(file);
    setPicture(URL.createObjectURL(file));
    if (!ableToUpload) setAbleToUpload(true);
  };

  const submit = async () => {
    if (!file || !title || !description) {
      setError(t("errors.fillAllFields"));
      return;
    }

    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;
      try {
        const response = await fetch("/fr/artisan/api/pfp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ file: base64data }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Upload successful:", data.url);

          const postData = {
            title: title,
            picture: data.url,
            description: description,
            artisanId: userData?.idUser,
          };

          const secondResponse = await fetch(
            "https://onecs-back.onrender.com/app/artisan/profile/portfolio/add",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(postData),
            }
          );

          const result = await secondResponse.json();
          if (secondResponse.ok) {
            console.log("Post added successfully:", result);
            onCloseRef.current();
            window.location.reload();
          } else {
            console.error("Error:", result);
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
              {t("title")}
            </ModalHeader>
            <ModalBody className="flex flex-col items-center gap-2">
              <FileUploader
                handleChange={handleImageChange}
                name="Picture"
                types={["JPG", "PNG", "JPEG"]}
                maxSize={5}
              />
              <Input
                label={t("titleLabel")}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                label={t("descriptionLabel")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Image
                isZoomed
                fallback
                src={picture}
                className="rounded-xl h-[180px]"
                width={300}
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button color="danger" variant="flat" onPress={onClose}>
                {t("cancelButton")}
              </Button>
              <Button
                color="primary"
                onClick={submit}
                isLoading={uploading}
                isDisabled={!ableToUpload}
              >
                {t("saveButton")}
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}

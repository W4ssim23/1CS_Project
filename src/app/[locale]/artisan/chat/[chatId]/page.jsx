"use client";

import { useSearchParams } from "next/navigation";
import { Send } from "@/assets/svgs";
import Image from "next/image";
import { Avatar, Spinner } from "@nextui-org/react";
import BackButton from "../components/BackButton";
import { useRef, useState, useEffect, useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";

export default function Chat({ params }) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const pfp = searchParams.get("pfp");

  const { userData } = useContext(GlobalContext);
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const lastMessageId =
        messages.length > 0 ? messages[messages.length - 1].id : null;
      // console.log("Fetching messages with lastMessageId:", lastMessageId);

      const response = await fetch(
        `https://onecs-back.onrender.com/app/chat/get_conversation_messages/${userData.idUser}/${params.chatId}/?last_message_id=${lastMessageId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();
      // console.log("API response data:", data);

      // Filter out duplicate messages
      setMessages((prevMessages) => {
        const newMessages = data.messages.filter(
          (newMsg) => !prevMessages.some((msg) => msg.id === newMsg.id)
        );
        return [...prevMessages, ...newMessages];
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Initial fetch

    const interval = setInterval(fetchMessages, 1000); // Poll every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [userData.idUser, params.chatId]);

  const dummy = useRef();

  useEffect(() => {
    // console.log("Updated messages:", messages);
  }, [messages]);

  useEffect(() => {
    try {
      dummy.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error scrolling to the last message:", error);
    }
  }, [dummy.current, messages]);

  if (!userData) {
    return <SkeletonChat />;
  }

  return (
    <main className="flex flex-col items-center w-full h-full">
      <Head title={title} pfp={pfp} />
      <Msg
        messages={messages || []}
        currentUserId={userData.idUser}
        dummy={dummy}
      />
      <SendInput
        pfp={userData.pfpLink}
        dummy={dummy}
        chatId={params.chatId}
        senderName={userData.firstName}
        senderId={userData.idUser}
      />
    </main>
  );
}

// Head component
const Head = ({ title, pfp }) => {
  return (
    <div className="flex items-center gap-3 px-6 py-7 w-full shadow-sm rounded-sm">
      <BackButton />
      <Avatar fallback src={pfp} size="md" className="w-[45px] h-[45px]" />
      <p className="text-[#303972] text-[19px] font-[600] flex-1">{title}</p>
      <div className="cursor-pointer">
        <DotsIcon />
      </div>
    </div>
  );
};

// Msg component
const Msg = ({ messages, currentUserId, dummy }) => {
  return (
    <div className="flex-1 p-5 flex gap-3 w-full flex-col overflow-y-auto">
      {messages.map((data, index) => {
        if (data.receiver_name_id !== currentUserId) {
          return (
            <Sent
              key={index}
              msg={data.description}
              last={index === messages.length - 1}
            />
          );
        }
        return (
          <Received
            key={index}
            msg={data.description}
            pfp={data.pfp}
            name={data.senderName}
            last={index === messages.length - 1}
          />
        );
      })}
      <span ref={dummy}></span>
    </div>
  );
};

// Received component
const Received = ({ msg, last = false, pfp, name }) => {
  return (
    <div className="w-fit max-w-[300px] flex flex-col gap-0">
      <p className="pl-[60px] text-gray-500 text-[13px]">{name}</p>
      <div className="w-fit max-w-[300px] flex gap-2 sm:gap-4">
        <Avatar
          fallback
          src={pfp}
          size="md"
          className="min-w-[40px] min-h-[40px] mt-[4px]"
        />
        <div
          className={`bg-[#F5F5F5] w-fit max-w-[300px] p-3 self-start ${
            last ? "rounded-tl-xl rounded-r-xl" : "rounded-xl"
          } text-[#303972] text-wrap break-words`}
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {msg}
        </div>
      </div>
    </div>
  );
};

// Sent component
const Sent = ({ msg, last = false }) => {
  return (
    <div
      className={`bg-blue-700 w-fit p-3 self-end ${
        last ? "rounded-tr-xl rounded-l-xl" : "rounded-xl"
      } text-white text-wrap break-words`}
      style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
    >
      {msg}
    </div>
  );
};

// SendInput component
const SendInput = ({ pfp, dummy, chatId, senderName, senderId }) => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmitMessage = async () => {
    if (message.trim() === "") return;

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://onecs-back.onrender.com/app/chat/add_message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: message,
            sender_id: senderId,
            receiver_id: chatId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Clear the input field and scroll to the latest message
      setMessage("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error sending message: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitMessage();
    }
  };

  return (
    <div className="relative flex px-4 justify-start items-center gap-3 py-4 sm:py-2 w-[98%] h-[65px] rounded-full bg-[#F3F4FF] mt-auto mb-1 ml-2">
      <div>
        <Avatar fallback src={pfp} className="w-[48px] h-[48px]" />
      </div>
      <div className="flex-1">
        <input
          placeholder="Write your message..."
          type="text"
          id="SendMessageInput"
          className="text-left font-poppins font-[500] bg-transparent outline-none flex-1 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={handleSubmitMessage}
        disabled={submitting}
      >
        {submitting && <Spinner />}
        {!submitting && (
          <Image className="w-[25px] h-[25px]" src={Send} alt="" />
        )}
      </div>
    </div>
  );
};

// SkeletonChat component
const SkeletonChat = () => {
  return (
    <main className="flex flex-col items-center w-full h-full">
      <SkeletonHead />
      <SkeletonMsg />
      <SkeletonSendInput />
    </main>
  );
};

// Skeleton for Head component
const SkeletonHead = () => {
  return (
    <div className="flex items-center gap-3 px-6 py-7 w-full shadow-sm rounded-sm animate-pulse">
      <div className="w-[45px] h-[45px] bg-gray-200 rounded-full"></div>
      <div className="flex-1 h-[19px] bg-gray-200 rounded-md"></div>
      <div className="w-[25px] h-[25px] bg-gray-200 rounded-full"></div>
    </div>
  );
};

// Skeleton for Msg component
const SkeletonMsg = () => {
  return (
    <div className="flex-1 p-5 flex gap-3 w-full flex-col overflow-y-auto animate-pulse">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="flex gap-2 items-center">
          <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-[20px] bg-gray-200 rounded-md"></div>
        </div>
      ))}
      <span className="w-full h-[20px] bg-gray-200 rounded-md"></span>
    </div>
  );
};

// Skeleton for SendInput component
const SkeletonSendInput = () => {
  return (
    <div className="relative flex px-4 justify-start items-center gap-3 py-4 sm:py-2 w-[98%] h-[65px] rounded-full bg-gray-200 mt-auto mb-1 ml-2 animate-pulse">
      <div className="w-[48px] h-[48px] bg-gray-300 rounded-full"></div>
      <div className="flex-1 h-[20px] bg-gray-300 rounded-md"></div>
      <div className="w-[25px] h-[25px] bg-gray-300 rounded-full"></div>
    </div>
  );
};

// DotsIcon component
function DotsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="6"
      fill="none"
      viewBox="0 0 24 6"
    >
      <path
        fill="#A098AE"
        d="M12.002.36a2.641 2.641 0 10.003 5.282A2.641 2.641 0 0012 .36h.001zm-8.4 0a2.641 2.641 0 10.003 5.282A2.641 2.641 0 003.6.36h.001zm16.8 0a2.641 2.641 0 10.003 5.282A2.641 2.641 0 0020.4.36h.001z"
      ></path>
    </svg>
  );
}

import { Avatar, Button } from "@nextui-org/react";
export default function TheList({ clients }) {
  return (
    <div className="flex flex-col w-full">
      <HeadList />
      {clients.map((client, index) => (
        <ElementList
          key={index}
          client={client}
          bg={index % 2 === 0 ? "#EFF7FE" : "#FFFFFF"}
        />
      ))}
    </div>
  );
}

function HeadList() {
  const columns = [
    { value: "Nom", hidden: false },
    { value: "Client Id", hidden: true, whenHide: "lg" },
    { value: "Email", hidden: true, whenHide: "sm" },
    { value: "Telephone", hidden: true, whenHide: "sm" },
    { value: "Genre", hidden: true, whenHide: "lg" },
    { value: "Action", hidden: false },
  ];

  return (
    <div className="bg-transparent text-[#424242] font-semibold w-full p-2 py-4 flex items-center text-start sm:text-center justify-evenly">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`w-full ${
            column.hidden ? `hidden ${column.whenHide}:block` : "block"
          }`}
        >
          {column.value}
        </div>
      ))}
    </div>
  );
}

function ElementList({ client, bg }) {
  return (
    <div
      className="w-full p-2 py-4 flex items-center justify-evenly text-start sm:text-center"
      style={{ backgroundColor: bg }}
    >
      <div className="flex gap-1 w-full items-center">
        <Avatar
          src={client.avatar}
          size="small"
          alt="avatar"
          className="min-w-[40px] mr-1"
        />
        <div className="w-full">{client.name}</div>
      </div>
      <div className="w-full lg:block hidden">{client.clientId}</div>
      <div className="w-full sm:block hidden">{client.email}</div>
      <div className="w-full sm:block hidden">{client.phone}</div>
      <div className="w-full lg:block hidden">{client.genre}</div>
      <div className="w-full flex items-center justify-center">
        <Button className="bg-[#B9D7F1] text-white">Suprimer</Button>
      </div>
    </div>
  );
}

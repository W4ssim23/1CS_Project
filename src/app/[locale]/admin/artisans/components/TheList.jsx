import { Avatar, Button } from "@nextui-org/react";
export default function TheList({ artisans }) {
  return (
    <div className="flex flex-col w-full">
      <HeadList />
      {artisans.map((artisan, index) => (
        <ElementList key={index} artisan={artisan} />
      ))}
    </div>
  );
}

function HeadList() {
  const columns = [
    { value: "Nom", hidden: false },
    { value: "Artisan Id", hidden: true, whenHide: "lg" },
    { value: "Email", hidden: true, whenHide: "sm" },
    { value: "Telephone", hidden: true, whenHide: "sm" },
    { value: "Genre", hidden: true, whenHide: "lg" },
    { value: "Status", hidden: true, whenHide: "sm" },
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

function ElementList({ artisan }) {
  return (
    <div className="bg-white w-full p-2 py-4 flex items-center justify-evenly text-start sm:text-center">
      <div className="flex gap-1 w-full items-center">
        <Avatar
          src={artisan.avatar}
          size="small"
          alt="avatar"
          className="min-w-[40px] mr-1"
        />
        <div className="w-full">{artisan.name}</div>
      </div>
      <div className="w-full lg:block hidden">{artisan.artisanId}</div>
      <div className="w-full sm:block hidden">{artisan.email}</div>
      <div className="w-full sm:block hidden">{artisan.phone}</div>
      <div className="w-full lg:block hidden">{artisan.genre}</div>
      <div className="w-full sm:block hidden">{artisan.status}</div>
      <div className="w-full flex items-center justify-center">
        <Button className="bg-[#B9D7F1] text-white">Suprimer</Button>
      </div>
    </div>
  );
}

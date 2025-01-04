import OneTask from "./OneTask";

export default function Tasks({ title, color, tasks }) {
  return (
    <div className="w-full shadow-lg rounded-lg flex flex-col gap-6 p-4">
      <h3 className="text-2xl font-semibold" style={{ color }}>
        {title}
      </h3>
      <div className="w-full flex flex-col gap-4">
        {tasks.map((task, indx) => (
          <OneTask data={task} bgColor={color} key={indx} />
        ))}
      </div>
    </div>
  );
}

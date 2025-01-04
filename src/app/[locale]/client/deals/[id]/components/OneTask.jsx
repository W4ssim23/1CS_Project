export default function OneTask({ data, bgColor }) {
  const withOpacity = (hex, opacity) => {
    if (hex.startsWith("#")) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return hex;
  };

  return (
    <div
      className="w-full flex sm:flex-row flex-col gap-2 sm:gap-0 justify-between items-center p-2 rounded-lg font-normal text-base"
      style={{
        backgroundColor: withOpacity(bgColor, 0.3),
      }}
    >
      <p className="sm:w-1/3">{data.description}</p>
      <p>{data.startDate}</p>
      <p>{data.endDate}</p>
    </div>
  );
}

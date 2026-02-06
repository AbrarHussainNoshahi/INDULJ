const Pill = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-warning border-dashed px-5.75 py-3.25 h-9.25 text-[16px] font-medium">
      {children}
    </span>
  );
};

export default Pill;

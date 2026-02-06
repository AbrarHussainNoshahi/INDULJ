export default function DailyDealItem({ deal }) {
  return (
    <div className="rounded-xl w-full h-25 flex items-center justify-center px-3 gap-4">
      
      <img
        src={deal.image}
        alt={deal.title}
        className="h-16 w-16 rounded-lg object-cover"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {deal.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-danger px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-danger font-bold">
            {deal.price}
          </span>
        </div>

        <h3 className="font-semibold text-[20px] leading-tight">
          {deal.title}
        </h3>

        <p className="text-[16px] text-gray-400 truncate">
          {deal.description}
        </p>
      </div>
    </div>
  );
}

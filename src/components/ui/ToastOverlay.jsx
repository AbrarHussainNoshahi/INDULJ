export default function ToastOverlay({ show }) {

    

  if (!show) return null;

  return (
    <div
      className="
        fixed inset-0 z-40
        bg-black/40
        backdrop-blur-sm
        pointer-events-auto
      "
    />
  );
}

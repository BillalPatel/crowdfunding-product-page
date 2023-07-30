export function Button(props: any) {
  const { onClick, text, inStock } = props;
  return (
    <div onClick={onClick}>
      {inStock === false ? (
        <button
          type="button"
          className="bg-[#2F2F2F] opacity-50 text-white rounded-full px-5 py-3 max-h-12 flex self-center cursor-default"
        >
          {text}
        </button>
      ) : (
        <button
          type="button"
          className="bg-[#3cb4ac] text-white rounded-full px-5 py-3 max-h-12 flex self-center"
        >
          {text}
        </button>
      )}
    </div>
  );
}

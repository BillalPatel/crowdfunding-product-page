export function Button(props: any) {
  const { text } = props;
  return (
    <button
      type="button"
      className="bg-[#3cb4ac] text-white rounded-full px-5 py-3 max-h-12 flex self-center"
    >
      {text}
    </button>
  );
}

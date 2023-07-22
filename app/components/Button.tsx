export function Button(props: any) {
  const { text } = props;
  return (
    <button type="button" className="bg-[#3cb4ac] text-white px-10 py-3 my-7 rounded-full">
      {text}
    </button>
  );
}

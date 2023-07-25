import Image from "next/image";

export function ButtonRound(props: any) {
  const { icon } = props;
  return (
    <div className="outline-none rounded-full bg-slate-100 text-[#7a7a7a] font-semibold flex flex-row justify-between">
      <Image
        src={icon}
        alt={"Bookmark Icon"}
        height={1000}
        width={1000}
        className="h-12 w-auto z-1"
      />
      <p className="py-3 px-4 hidden md:flex lg:flex">Bookmark</p>
    </div>
  );
}

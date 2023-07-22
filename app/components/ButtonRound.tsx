import Image from "next/image";

export function ButtonRound(props: any) {
  const { icon } = props;
  return (
    <button type="button" className="">
      <Image
        src={icon}
        alt={"Bookmark Icon"}
        height={1000}
        width={1000}
        className="h-12 w-auto"
      />
    </button>
  );
}

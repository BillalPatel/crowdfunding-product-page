import { Overlay } from "./shared/Overlay";

export function MobileMenu() {
  return (
    <>
      <Overlay />
      <div className="rounded-xl bg-white w-11/12 absolute top-20 md:hidden lg:hidden">
        <ul className="border-top font-semibold">
          <li className="p-6">About</li>
          <div className="border-t"></div>
          <li className="p-6">Discover</li>
          <div className="border-t"></div>
          <li className="p-6">Get Started</li>
        </ul>
      </div>
    </>
  );
}

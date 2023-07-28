export function DividerLine() {
  return (
    <>
      <div className="mobile-divider sm:block lg:hidden border-t w-20 mx-auto"></div>
      <div className="desktop hidden lg:block lg:border-l"></div>
    </>
  );
}

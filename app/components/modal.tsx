import { ReactElement } from "react";

export function Modal({
  children,
  headerText,
}: {
  children: ReactElement;
  headerText: string;
}) {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex md:items-center md:justify-center bg-transparent-black">
      <div className="w-full h-full md:max-h-1/2 md:h-auto md:w-1/2 bg-white shadow-md md:rounded overflow-auto relative">
        {headerText && <h3 className="font-bold text-xl p-4">{headerText}</h3>}
        {children}
      </div>
    </div>
  );
}

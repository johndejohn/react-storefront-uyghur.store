import React from "react";
import { Button } from "../Button";
import ChannelSelect from "./ChannelSelect";

interface LocaleSelectDialogProps {
  onClose: () => void;
  isOpen: boolean;
}

const LocaleSelectDialog: React.FC<LocaleSelectDialogProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="min-w-screen h-screen fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-50 inset-0 z-0"></div>
      <div className="w-full  max-w-lg pb-5 relative mx-auto my-auto rounded-sm shadow-lg  bg-white ">
        <div className="text-center p-5 flex-auto justify-center">
          <h2 className="text-xl font-bold py-4 ">Choose wisely</h2>
          <p className="text-sm text-gray-500 px-8">
            Select your channel and language
          </p>
        </div>
        <p className="text-sm text-gray-500 px-8">Channel</p>
        <ChannelSelect />
        <div className="p-3  mt-2 text-center space-x-4 md:block">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default LocaleSelectDialog;

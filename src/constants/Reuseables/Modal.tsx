import { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  cancelButtonText: string;
  confirmButtonText: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  cancelButtonText,
  confirmButtonText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-30 inset-0 flex justify-center items-center bg-[#D9D9D94D] opacity-100 transition-opacity">
      <div className="bg-white flex items-center flex-col py-8 px-4 mx-4 sm:mx-0 rounded-[20px] max-w-[335px] w-full">
        <h2 className="text-[15px] text-center font-medium w-[191px]">
          {title}
        </h2>
        <div className="flex items-center gap-2 mt-5 w-full">
          <button
            type="button"
            onClick={onClose}
            className="max-w-[149px] py-2 text-sm font-medium bg-customGreen w-full text-white rounded-[10px]">
            {cancelButtonText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="max-w-[149px] py-2 text-sm font-medium bg-customRed w-full text-white rounded-[10px]">
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;

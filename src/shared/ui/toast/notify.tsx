import { toast } from "react-toastify";

import CheckInCircle from "shared/assets/svg/check-in-circle.svg?react";

export const notifySuccess = (message: string) => {
  return toast.success(message, {
    closeButton: false,
    draggable: true,
    icon: <CheckInCircle className="text-caribbeanGreen size-5" />,
  });
};

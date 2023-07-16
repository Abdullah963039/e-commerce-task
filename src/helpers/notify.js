import { toast } from "react-toastify";

const notify = (type, message) => {
  if (type == "done") {
    return toast.success(message);
  }
  if (type == "warn") {
    return toast.warn(message);
  }
  if (type == "error") {
    return toast.error(message);
  }
};

export default notify;

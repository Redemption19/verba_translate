import React from "react";
import { IconPaperclip } from "@tabler/icons-react";

// File upload component with hidden input field and paperclip icon
const FileUpload = ({ handleFileUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <IconPaperclip size={21} className="text-white" />
    <input
      type="file"
      id="file-upload"
      onChange={handleFileUpload}
      className="hidden"
    />
  </label>
);

export default FileUpload;
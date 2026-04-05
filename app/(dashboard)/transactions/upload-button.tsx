import { Upload } from "lucide-react";
import * as XLSX from "xlsx";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

type UploadButtonProps = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: UploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array", cellDates: true });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      onUpload({
        data: jsonData,
        errors: [],
        meta: [],
      });
    };
    reader.readAsArrayBuffer(file);
    
    // Reset input value to allow the same file to be uploaded again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".csv, .xlsx, .xls"
        className="hidden"
      />
      <Button
        size="sm"
        className="w-full lg:w-auto"
        onClick={handleClick}
      >
        <Upload className="mr-2 size-4" />
        Import
      </Button>
    </>
  );
};

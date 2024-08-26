import { FileInput, Label } from "flowbite-react";

export function FileInputComponent() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Subir documento" />
      </div>
      <FileInput id="file-upload" />
    </div>
  );
}
"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
} from "@headlessui/react";
import { Button, Input, Line } from "@/components";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";

const AddProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <PlusCircle className={"h-5 w-5 text-gray-500"} weight={"fill"} />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-text-black opacity-40" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="w-[612px] bg-background-white p-6 rounded-br-16 space-y-5">
            <DialogTitle className="text-display5 font-bold">
              Create a New Project
            </DialogTitle>
            <Line />
            <Field className={"space-y-0.5"}>
              <Label className="text-body-large">Project Name</Label>
              <Input placeholder={"Enter project name"} />
            </Field>
            <Line />
            <div className="flex justify-end">
              <Button>Create Project</Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default AddProject;

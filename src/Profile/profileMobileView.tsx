import React, { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { UserCircle2, XCircle } from "lucide-react";

const ProfileMobileView = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const screenSize = useScreenSize();
  return (
    screenSize.width < 1024 && (
      <Dialog>
        <DialogTrigger className="flex w-full cursor-pointer items-center gap-1 rounded py-[5%] pl-[5%] hover:bg-gray-100">
          <UserCircle2 color="black" size={16} />
          <span className="text-sm">See profile</span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex w-full items-center justify-between border-b pb-2 text-left">
              <p>Profile</p>
              <XCircle onClick={() => setOpenDialog(false)} />
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  );
};

export default ProfileMobileView;

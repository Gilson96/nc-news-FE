import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { MenuIcon } from "lucide-react";

const Menu = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <MenuIcon size={20} color={`oklch(50% 0.134 242.749)`} cursor={"pointer"} />
      </DrawerTrigger>
      <DrawerContent style={{width: `${12}rem`}}>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

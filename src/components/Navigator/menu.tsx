import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { MenuSquare } from "lucide-react";

const Menu = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <MenuSquare size={30}/>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        {/* <DrawerFooter>
          </DrawerClose>
          <Button>Submit</Button>
          <DrawerClose>
          <Button variant="outline">Cancel</Button>
          </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function selectedElement({
  selectedItem,
  setSelectedItem,
}) {
  return (
    <Dialog
      open={!!selectedItem}
      onOpenChange={() => setSelectedItem(null)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedItem?.title || "Detalle del elemento"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px]">
          <p>{selectedItem?.content}</p>
        </ScrollArea>
        <DialogFooter>
          <Button onClick={() => setSelectedItem(null)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

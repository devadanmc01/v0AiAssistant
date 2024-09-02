import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function SaveElement({
  isEditDialogOpen,
  setIsEditDialogOpen,
  editingItem,
  setEditingItem,
  handleEditSave,
}) {
  return (
    <Dialog
      open={isEditDialogOpen}
      onOpenChange={setIsEditDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar antes de guardar</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Título"
          value={editingItem.title}
          onChange={(e) =>
            setEditingItem({
              ...editingItem,
              title: e.target.value,
            })
          }
          className="mb-4"
        />
        <Textarea
          value={editingItem.content}
          onChange={(e) =>
            setEditingItem({
              ...editingItem,
              content: e.target.value,
            })
          }
          rows={5}
        />
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsEditDialogOpen(false)}
          >
            Cancelar
          </Button>
          <Button onClick={handleEditSave}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

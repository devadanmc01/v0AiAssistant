import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Food({ renderSavedItems }) {
  return (
    <TabsContent value="food" className="flex-1 p-4 overflow-auto">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>
            Recetas y Consejos de Alimentación Guardados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            {renderSavedItems("food")}
          </ScrollArea>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

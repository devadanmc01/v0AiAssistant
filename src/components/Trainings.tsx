import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Trainings({ renderSavedItems }) {
  return (
    <TabsContent
      value="routines"
      className="flex-1 p-4 overflow-auto"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Rutinas de Ejercicio Guardadas</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            {renderSavedItems("routines")}
          </ScrollArea>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

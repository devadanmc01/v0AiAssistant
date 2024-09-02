import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tips({ renderSavedItems }) {
  return (
    <TabsContent value="tips" className="p-4 overflow-auto">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>Consejos de Fitness Guardados</CardTitle>
        </CardHeader>
        <CardContent>{renderSavedItems("tips")}</CardContent>
      </Card>
    </TabsContent>
  );
}

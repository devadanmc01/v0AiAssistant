import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dumbbell, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Profile() {
  return (
    <TabsContent value="profile" className="flex-1 p-4 overflow-auto">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Perfil de Usuario</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">
                Información Personal
              </h3>
              <p>Nombre: Juan Pérez</p>
              <p>Edad: 30 años</p>
              <p>Altura: 175 cm</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Meta de Peso</h3>
              <div className="flex items-center space-x-4">
                <Progress value={80} className="flex-grow" />
                <span>75 kg</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Racha de Entrenamiento
              </h3>
              <p>5 días consecutivos</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Entrenamiento de Hoy
              </h3>
              <div className="flex items-center space-x-2">
                <Dumbbell className="h-5 w-5" />
                <span>30 min HIIT</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Incluye calentamiento y enfriamiento
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Progreso</h3>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>+12% mejora en fuerza este mes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

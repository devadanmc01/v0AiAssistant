import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Dumbbell,
  TrendingUp,
  Utensils,
  ListTodo,
  Lightbulb,
  LogOut,
  Save,
  User,
  MessageSquare,
} from "lucide-react";
const LeftMenu = ({ setActiveTab }) => {
  return (
    <div className="w-1/4 p-4 border-r flex flex-col">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Juan Pérez</CardTitle>
          <CardDescription>Entusiasta del Fitness</CardDescription>
        </CardHeader>
        <CardContent>
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage
              src="/placeholder.svg?height=80&width=80"
              alt="Usuario"
            />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>Menú</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setActiveTab("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Perfil
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setActiveTab("chat")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setActiveTab("food")}
            >
              <Utensils className="mr-2 h-4 w-4" />
              Food
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setActiveTab("routines")}
            >
              <ListTodo className="mr-2 h-4 w-4" />
              Routines
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setActiveTab("tips")}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Tips
            </Button>
          </nav>
        </CardContent>
      </Card>
      <Button
        variant="ghost"
        className="mt-4 w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-100"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  );
};
export default LeftMenu;

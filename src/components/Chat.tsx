"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import LeftMenu from "./LeftMenu";
import Conversation from "./Conversation";
import Food from "./Food";
import Tips from "./Tips";
import Profile from "./Profile";
import Trainings from "./Trainings";
import SaveElement from "./SaveElement";
import SelectedElement from "./SelectedElement";
export default function Component() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hola! Soy tu asistente virtual de fitness. ¿Cómo puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [savedItems, setSavedItems] = useState({
    food: [],
    routines: [],
    tips: [],
  });
  const [activeTab, setActiveTab] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      // Aquí normalmente enviarías el input a tu backend y obtendrías una respuesta
      // Para este ejemplo, simularemos una respuesta
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Entiendo que estás interesado en fitness. ¿En qué área específica te gustaría enfocarte?",
          },
        ]);
      }, 1000);
    }
  };

  const handleSave = (content: string, category: string) => {
    setEditingItem({ title: "", content, category });
    setIsEditDialogOpen(true);
  };

  const handleEditSave = () => {
    setSavedItems((prev) => ({
      ...prev,
      [editingItem.category]: [
        ...prev[editingItem.category],
        { title: editingItem.title, content: editingItem.content },
      ],
    }));
    setIsEditDialogOpen(false);
  };

  const renderSavedItems = (category) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {savedItems[category].map((item, index) => (
        <Card
          key={index}
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedItem(item)}
        >
          <CardHeader>
            <CardTitle>
              {item.title ||
                `${
                  category.charAt(0).toUpperCase() + category.slice(1)
                } ${index + 1}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="flex h-screen max-h-screen bg-background">
      <LeftMenu setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col"
        >
          <Food renderSavedItems={renderSavedItems} />
          <Tips renderSavedItems={renderSavedItems} />
          <Profile />
          <Trainings renderSavedItems={renderSavedItems} />
          <Conversation
            renderSavedItems={renderSavedItems}
            handleSave={handleSave}
            messages={messages}
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />
        </Tabs>
      </div>
      <SaveElement
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
        handleEditSave={handleEditSave}
      />
      <SelectedElement
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}

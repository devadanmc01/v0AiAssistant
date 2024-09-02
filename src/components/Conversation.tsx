import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { Input } from "@/components/ui/input";
export default function Conversation({
  renderSavedItems,
  handleSave,
  messages,
  input,
  setInput,
  handleSend,
}) {
  return (
    <TabsContent value="chat" className="flex-1 flex flex-col">
      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader>
          <CardTitle>Chat de Asistencia Fitness</CardTitle>
        </CardHeader>
        <ScrollArea className="flex-1 p-4">
          {messages?.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              } mb-4`}
            >
              <div
                className={`rounded-lg p-2 max-w-[70%] ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.content}
                {message.role === "assistant" && (
                  <div className="mt-2 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleSave(message.content, "food")
                      }
                    >
                      <Save className="h-4 w-4 mr-1" /> Food
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleSave(message.content, "routines")
                      }
                    >
                      <Save className="h-4 w-4 mr-1" /> Routine
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleSave(message.content, "tips")
                      }
                    >
                      <Save className="h-4 w-4 mr-1" /> Tip
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t flex">
          <Input
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} className="ml-2">
            Enviar
          </Button>
        </div>
      </Card>
    </TabsContent>
  );
}

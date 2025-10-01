import { AssistantChat } from "@/components/assistant-chat";

export default function AssistantPage() {
  return (
    <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
            <p className="text-muted-foreground">Ask me anything about cybersecurity. I'm here to help.</p>
        </div>
        <div className="h-[calc(100vh-12rem)] w-full">
            <AssistantChat />
        </div>
    </div>
  );
}

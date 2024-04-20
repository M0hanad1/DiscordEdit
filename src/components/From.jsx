import { useState } from "react";
import Input from "./Input";

export default function Form() {
  const [token, setToken] = useState("");
  const [channelId, setChannelId] = useState("");
  const [messageId, setMessageId] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="p-5 rounded flex flex-col gap-5 border-2 sm:w-[75%] border-primary lg:w-[50%] [&input]:border :border-primary/30"
      onSubmit={async (event) => {
        event.preventDefault();
        const res = await fetch(
          `https://discord.com/api/v9/channels/${channelId}/messages`,
          {
            headers: {
              accept: "/",
              "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,ar;q=0.7",
              authorization: token,
              "Content-Type": "application/json",
              "sec-ch-ua": `"Not-A.Brand";v="99", "Chromium";v="124"`,
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "Linux",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-debug-options": "bugReporterEnabled",
              "x-discord-locale": "en-US",
              "x-discord-timezone": "Africa/Tripoli",
              "x-super-properties":
                "eyJvcyI6IkFuZHJvaWQiLCJicm93c2VyIjoiQW5kcm9pZCBDaHJvbWUiLCJkZXZpY2UiOiJBbmRyb2lkIiwic3lzdGVtX2xvY2FsZSI6ImFyLUVHIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTI0LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMjQuMC4wLjAiLCJvc192ZXJzaW9uIjoiIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9messageIdWlsZF9udW1iZXIiOjI4NjM0OSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbCwiZGVzaWduX2lkIjowfQ==",
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify({
              content: message,
              nonce: messageId,
            }),
            method: "POST",
            mode: "cors",
            credentials: "include",
          }
        );
        const data = await res.json();

        if (data.code === 10003) {
          console.log("Invalid channel ID");
        } else if (data.code === 0) {
          console.log("Unauthoraized");
        } else if (data.code === 50001) {
          console.log("Missing Access");
        }
      }}
    >
      <div className="flex gap-3 justify-between">
        <Input
          label="Your Token"
          id="token"
          value={token}
          setValue={setToken}
          minLength={1}
          required
        />
        <Input
          id="channelId"
          label="Channel ID"
          type="number"
          value={channelId}
          setValue={setChannelId}
          minLength={17}
          maxLength={19}
          required
        />
      </div>
      <Input
        id="messageId"
        label="Message ID"
        type="number"
        value={messageId}
        setValue={setMessageId}
        minLength={17}
        maxLength={19}
        required
      />
      <Input
        id="message"
        label="New Message"
        minLength={1}
        maxLength={2000}
        value={message}
        setValue={setMessage}
        required
        isTextarea
      />
      <div className="flex gap-5 self-end">
        <button
          onClick={() => {
            setToken("");
            setMessageId("");
            setMessage("");
          }}
          className="px-4 py-2 border-2 border-primary rounded-md text-primary text-2xl hover:rounded-xl transition-all hover:text-white hover:bg-primary"
        >
          Clear
        </button>
        <button
          disabled={message.replace(" ", "").length === 0}
          className="px-4 disabled:opacity-50 disabled:pointer-events-none py-2 border-2 border-primary bg-primary rounded-md hover:rounded-xl transition-all text-white text-2xl"
          type="submit"
        >
          Edit!
        </button>
      </div>
    </form>
  );
}

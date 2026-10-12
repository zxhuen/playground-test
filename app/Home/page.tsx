"use client";

import Button from "@/app/component/button";
import Icon from "@/app/component/Icon";


export default function HomePage() {
  return (
    <main>
      <h1>Backend Developer</h1>
      <p>I build APIs and AI-powered systems.</p>
       <Icon />
      <Button
        label="Click me"
        onClick={() => alert("Hello!")}
      />
    </main>
  );
}

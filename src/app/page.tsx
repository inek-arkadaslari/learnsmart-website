"use client"
import * as React from "react"
import { Navbar } from "@/components/navbar"
import {DialogModal} from "@/components/dialog";
import {useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  return (
    <main>
      <Navbar onSearchButtonClick={openDialog} />
      <DialogModal isOpen={isDialogOpen} onClose={closeDialog} />
        <Card className="w-[98%] mx-auto mt-1.5 p-4">
            <div className="flex w-full h-[40vh] justify-between">
                <Card className="w-2/5 relative h-full">
                    <Image
                        src="/images/login.png"
                        alt="Login"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </Card>
                <div className="w-2/5  p-4 flex flex-col justify-center">
                    <h1 className="text-4xl text-foreground/60 font-sans font-light">Project Description</h1>
                    <br className="border-2"/>
                    <p className="font-sans font-light">LearnSmart provides essential tools and resources through a web
                        application to support students'
                        academic endeavors. By integrating lecture presentations, syllabi, and other study materials
                        with
                        advanced LLM capabilities and offering interactive learning tools, LearnSmart aims to enhance
                        the
                        efficiency and effectiveness of student learning.</p>
                </div>
            </div>
            <div className="flex w-full h-[40vh] justify-between py-8">
                <div className="w-2/5  p-4 flex flex-col justify-center">
                    <h1 className="text-4xl text-foreground/60 font-sans font-light">Core Features</h1>
                    <br className="border-2"/>
                    <p className="font-sans font-light">Uploading lecture presentations, syllabi, textbooks,
                        scholarly articles, and other essential study materials, utilizing advanced technology to provide
                        explanations on a page-by-page basis or in full general context. Interactive learning tools, including
                        flashcards, quizzes, and schedules, are represented in their syllabus and uploaded course material.
                        Chatbot capable of answering course-related queries and assisting with study questions.
                    </p>
                </div>
                <Card className="w-2/5 relative h-full">
                    <Image
                        src="/images/feature.png"
                        alt="Login"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </Card>
            </div>
        </Card>
    </main>
  );
}



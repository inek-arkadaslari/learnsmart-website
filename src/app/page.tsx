"use client"
import * as React from "react"
import { Navbar } from "@/components/navbar"
import {DialogModal} from "@/components/dialog";
import {useState} from "react";

export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  return (
      <main>
        <Navbar onSearchButtonClick={openDialog} />
        <DialogModal isOpen={isDialogOpen} onClose={closeDialog} />
      </main>
  )
}



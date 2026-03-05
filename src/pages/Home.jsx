import { Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main>
        <Navbar />
        <h2>Welcome to the Home Page</h2>
    </main>
  )
}
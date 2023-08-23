import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./Create"
import Update from "./Update"
import Read from "./Read"
// import Todomain from "./Todo/Todomain"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;


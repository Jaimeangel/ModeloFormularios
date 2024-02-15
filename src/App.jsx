import { useState } from "react"

import FormCrearParker from "./components/FormCrearParker"
import Modal from "./components/Modal"

function App() {
  const [open,setOpen]=useState(false)

    return(
      <div>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal
          open={open}
          isOpen={()=>setOpen(false)}
        >
          <FormCrearParker/>
        </Modal>
      </div>
    )
}

export default App

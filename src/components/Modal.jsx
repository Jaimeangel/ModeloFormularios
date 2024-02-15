function Modal({children,open,isOpen}) {
    return (
        <>
            { open && 
                <div className="fixed w-screen h-screen left-0 top-0 bg-gray-300 bg-opacity-60 shadow">
                    <div>
                        <button 
                            onClick={isOpen}
                            className="w-full bg-white"
                        >
                            CERRAR MODAL
                        </button>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal

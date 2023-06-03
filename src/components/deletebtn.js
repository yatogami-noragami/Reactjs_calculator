

const Deletebtn = ({ setfirstin, setsecondin, setopin, setres }) => {
    const clear = () => {
        setfirstin('')
        setsecondin('')
        setopin('')
        setres('')
    }
    return <>
        <button className="btn btn-outline-danger mt-3 w-100 fs-5 fw-bold" onClick={clear}>clear</button>
    </>
}

export default Deletebtn
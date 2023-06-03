import Operators from "./operators"
const Numinputs = ({ firstin, setfirstin, secondin, setsecondin, opin, setopin }) => {

    const firstChange = (event) => {
        setfirstin(event.target.value)
        //console.log(firstin);
    }

    const secondChange = (event) => {
        setsecondin(event.target.value)
        //console.log(secondin);
    }

    return <>
        <div className='row mb-4'>
            <h5 className=' text-decoration-underline'>Enter first number</h5>
            <input value={firstin} onChange={firstChange} type='number' placeholder='first number' className=' form-control fw-bold' />

        </div>

        <div className='row mb-4'>
            <h5 className=' text-decoration-underline'>Enter second number</h5>
            <input value={secondin} onChange={secondChange} type='number' placeholder='second number' className=' form-control fw-bold' />

        </div>

        <Operators
            opin={opin}
            setopin={setopin}
        ></Operators>
    </>
}

export default Numinputs
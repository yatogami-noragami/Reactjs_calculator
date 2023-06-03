

const Operators = ({ opin, setopin }) => {
    const opChange = (event) => {
        setopin(event.target.value)
        // console.log(opin);
    }
    return <>
        <div className='row mb-4'>
            <h5 className=' text-decoration-underline'>Choose operation</h5>
            <select className='form-select' value={opin} onChange={opChange}>
                <option value='X'>NO OPERATOR</option>
                <option value='PLUS'>PLUS</option>
                <option value='MINUS'>MINUS</option>
                <option value='MULTIPLY'>MULTIPLY</option>
                <option value='DIVIDE'>DIVIDE</option>
            </select>

        </div>
    </>
}

export default Operators
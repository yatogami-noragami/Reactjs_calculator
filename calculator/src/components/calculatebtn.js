

const Calculate = ({ firstin, secondin, opin, res, setres }) => {
    const calculate = (event) => {
        event.preventDefault();
        // console.log(opin);
        switch (opin) {
            case 'PLUS':
                setres(parseInt(firstin) + parseInt(secondin))
                break;
            case 'MINUS':
                setres(parseInt(firstin) - parseInt(secondin))
                break;
            case 'MULTIPLY':
                setres(parseInt(firstin) * parseInt(secondin))
                break;
            case 'DIVIDE':
                setres(parseInt(firstin) / parseInt(secondin))
                break;
        }
    }
    return <>
        <button type='submit' onClick={calculate} className='btn btn-success w-100'>calculate</button>
    </>
}

export default Calculate
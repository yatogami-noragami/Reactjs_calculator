import Numinputs from "./numinputs"
import Calculate from "./calculatebtn"
import Result from "./result"
import Deletebtn from "./deletebtn"
import { useState } from 'react'
const Container = () => {
    const [firstin, setfirstin] = useState('');
    const [secondin, setsecondin] = useState('');
    const [opin, setopin] = useState('');
    const [res, setres] = useState('');
    return <div className='row'>
        <div className=' col-lg-4 offset-lg-4 col-md-8 offset-md-2 border border-3 border-dark rounded mt-md-3 mt-0 px-5 py-3'>
            <form>
                <Numinputs
                    firstin={firstin}
                    setfirstin={setfirstin}
                    secondin={secondin}
                    setsecondin={setsecondin}
                    opin={opin}
                    setopin={setopin}
                ></Numinputs>

                <Calculate
                    firstin={firstin}
                    secondin={secondin}
                    opin={opin}
                    res={res}
                    setres={setres}
                ></Calculate>
            </form>

            <Result
                res={res}
            ></Result>

            <Deletebtn
                setfirstin={setfirstin}
                setsecondin={setsecondin}
                setopin={setopin}
                setres={setres}
            ></Deletebtn>
        </div>
    </div>
}

export default Container
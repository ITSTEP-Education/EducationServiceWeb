import { useState, useEffect } from "react";

const useEducationOptions = ( option: string, _handleClientProps:()=>void ): [string, (e: React.FormEvent<HTMLElement>)=>void]=> {
    const [payPeriod, setPayPeriod] = useState<string>(option);

    const handleOption = (e: React.FormEvent<HTMLElement>): void => {
        e.preventDefault();
  
        setPayPeriod(e.currentTarget.title);
        _handleClientProps();
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    useEffect(() => {handleOption}, []);

    return [payPeriod, handleOption];
}

export default useEducationOptions ;
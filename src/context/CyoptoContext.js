import { createContext, useContext, useEffect, useState } from "react";

const CyptoContext = createContext();


const CyptoContextProvider = ({ children }) => {
    const [currency,setCurrency] = useState('INR');
    const [symbol, setSymbol] = useState('₹');
    
    useEffect(() => {
        if(currency === 'INR') setSymbol('₹')
        if(currency === 'USD') setSymbol('$')
    }, [currency]);

const value = {currency,symbol,setCurrency}

return (
    <CyptoContext.Provider value={value}>
            {children}
        </CyptoContext.Provider>
    )
}

export default CyptoContextProvider;
export const useCyptoContext = () => {return useContext(CyptoContext) }
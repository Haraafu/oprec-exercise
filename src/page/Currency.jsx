import '../index.css';
import { useState, useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Currency() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedUnit1, setSelectedUnit1] = useState('USD');
    const [selectedUnit2, setSelectedUnit2] = useState('IDR');
    const [latestUpdate, setLatestUpdate] = useState(null);
    const [exchangeRates, setExchangeRates] = useState();
    const [inputVal, setInputVal] = useState('1');
    const [result, setResult] = useState({ value: 0, unit: '' });

    const handleUnitChange1 = (unit) => {
        setIsOpen1(false);
        setSelectedUnit1((prevUnit1) => {
            if (unit === selectedUnit2) {
                setSelectedUnit2(prevUnit1);
                return unit;
            } else {
                return unit;
            }
        });
    };

    const handleUnitChange2 = (unit) => {
        setIsOpen2(false);
        setSelectedUnit2((prevUnit2) => {
            if (unit === selectedUnit1) {
                setSelectedUnit1(prevUnit2);
                return unit;
            } else {
                return unit;
            }
        });
    };

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
        if (isOpen2) {
            setIsOpen2(false);
        }
    };
    
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        if (isOpen1) {
            setIsOpen1(false);
        }
    };

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedUnit1.toLowerCase()}.json`
                );
                const data = response.data;
                console.log('Exchange Rate for Unit 2:', data[selectedUnit1.toLowerCase()][selectedUnit2.toLowerCase()]);
                setExchangeRates(data[selectedUnit1.toLowerCase()][selectedUnit2.toLowerCase()]);
                const currentDate = data.date;
                setLatestUpdate(currentDate.toLocaleString());
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchExchangeRates();
    }, [selectedUnit1, selectedUnit2]);

    useEffect(() => {
        if (exchangeRates !== null) {
            const convertedValue = inputVal * exchangeRates;
            setResult({ value: convertedValue, unit: selectedUnit2 });
        }
    }, [inputVal, exchangeRates, selectedUnit2]);

    return (
        <div className='currency bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 min-h-screen flex items-center'>
            <div className='container flex flex-col md:flex-row md:justify-center items-center md:items-start p-[2.8rem]'>
                <div className='flex flex-col md:mb-16 md:ml-40 md:mt-6'>
                    <div className='container flex flex-col w-80'>
                        <Link to='/'>
                            <button className='bg-transparent border text-white rounded-full px-6 py-3 mb-4 md:mr-3 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 transition duration-300 transform hover:scale-105'>Home</button>
                        </Link>
                        <div className='calcBox relative flex flex-col w-full bg-blue-300 bg-opacity-60 border border-blue-500 rounded-2xl p-6 mb-6 text-center shadow-lg'>
                            <h1 className='relative mb-4 -mt-4 w-full p-4 border-b text-xl text-white'>Currency Converter</h1>
                            <div className='unitOne relative flex items-center'> 
                                <p className='mr-2 text-white'>From:</p> 
                                <div className='w-full'>
                                <button className='bg-white flex items-center justify-between w-full p-1 rounded-lg hover:bg-opacity-75 border-2 border-transparent hover:border-black focus:outline-none active:' onClick={toggleDropdown1}>
                                    {selectedUnit1}
                                    {!isOpen1 ? (
                                        <AiOutlineCaretDown className='h-8'></AiOutlineCaretDown>
                                    ): (
                                        <AiOutlineCaretUp className='h-8'></AiOutlineCaretUp>
                                    )}
                                </button>
                                {isOpen1 && (
                                    <div className="flex flex-col absolute top-full mt-2 w-[13.5rem] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className='Options'>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full hover:rounded-t-lg text-gray-700 ${selectedUnit1 === 'USD' ? 'bg-blue-300 rounded-t-lg' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('USD')}
                                            >
                                                USD
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit1 === 'IDR' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('IDR')}
                                            >
                                                IDR
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit1 === 'JPY' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('JPY')}
                                            >
                                                JPY
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit1 === 'BTC' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('BTC')}
                                            >
                                                BTC
                                            </button>
                                        </div>
                                    </div>
                                )}
                                </div>
                            </div>
                            <div className='unitTwo relative flex items-center mt-3'> 
                                <p className='mr-8 text-white'>To:</p> 
                                <div className='w-full'>
                                <button className='bg-white flex items-center justify-between w-full p-1 rounded-lg hover:bg-opacity-75 border-2 border-transparent hover:border-black focus:outline-none active:' onClick={toggleDropdown2}>
                                    {selectedUnit2}
                                    {!isOpen2 ? (
                                        <AiOutlineCaretDown className='h-8'></AiOutlineCaretDown>
                                    ): (
                                        <AiOutlineCaretUp className='h-8'></AiOutlineCaretUp>
                                    )}
                                </button>
                                {isOpen2 && (
                                    <div className="flex flex-col absolute top-full mt-2 w-[13.5rem] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className='Options'>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full hover:rounded-t-lg text-gray-700 ${selectedUnit2 === 'USD' ? 'bg-blue-300 rounded-t-lg' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('USD')}
                                            >
                                                USD
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit2 === 'IDR' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('IDR')}
                                            >
                                                IDR
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit2 === 'JPY' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('JPY')}
                                            >
                                                JPY
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit2 === 'BTC' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('BTC')}
                                            >
                                                BTC
                                            </button>
                                        </div>
                                    </div>
                                )}
                                </div>
                            </div>
                            <input type='number' value={inputVal} onChange={handleInputChange} className='mt-3 w-full h-10 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-center' placeholder='Input Value to Convert'/>
                            <div className='result mt-3 border-t p-3'>
                                <p className='text-lg text-white mb-1'>Result:</p>
                                {result.value !== null ? (
                                    <p className='text-xl text-white'>{`${(result.value).toFixed(2)} ${result.unit}`}</p>
                                ) : (
                                    <p className='text-xl text-white'>-</p>
                                )}
                            </div>
                        </div>
                        <div className='manual border p-3 w-full'>
                            <h1 className='text-white text-lg'>How to use:</h1>
                            <p className='text-white text-md'>
                                1. Choose the currency you want to convert from and to.<br/>
                                2. Input the value you want to convert.<br/>
                                3. Click the convert button.<br/>
                                4. The result will be shown.
                            </p>
                        </div>
                    </div>
                </div>   
                <div className='md:ml-8 mt-[4.2rem] md:mt-[5.7rem] info'>
                    <div className='container flex flex-col bg-blue-300 bg-opacity-60 shadow-lg rounded-xl p-1 justify-center items-center'>
                        <h1 className='text-white text-2xl mb-2 rounded-t-lg w-full border-b p-2 text-center'>Latest Update</h1>
                        <p className='text-white text-xl'>{latestUpdate}</p>
                    </div>
                    <div className='container flex flex-col bg-blue-300 bg-opacity-60 shadow-lg rounded-xl p-2 justify-center items-center mt-8'>
                        <h1 className='text-white text-2xl mb-4 w-full text-center p-2 border-b'>Exchange Rates</h1>
                        <p className='text-white text-xl'>1 {selectedUnit1} = {exchangeRates} {selectedUnit2}</p>
                        <p className='text-white text-xl'>1 {selectedUnit2} = {1/exchangeRates} {selectedUnit1}</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
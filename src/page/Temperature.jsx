import { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Temperature() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleDropdown1 = () => setIsOpen1(!isOpen1);
    const toggleDropdown2 = () => setIsOpen2(!isOpen2);
    
    const [selectedUnit1, setSelectedUnit1] = useState('Celcius (°C)');
    const [selectedUnit2, setSelectedUnit2] = useState('Fahrenheit (°F)');

    const handleUnitChange1 = (unit) => {
        setSelectedUnit1(unit); 
        setIsOpen1(false);
    };

    const handleUnitChange2 = (unit) => {
        setSelectedUnit2(unit);
        setIsOpen2(false);
    };

    const [inputVal, setInputVal] = useState('');
    const [result, setResult] = useState({ value: null, unit: '' });

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const convert = () => {
        const inputValue = parseFloat(inputVal);

        if (selectedUnit1 === 'Celcius (°C)') {
            if (selectedUnit2 === 'Fahrenheit (°F)') {
                const fahrenheit = (inputValue * 9/5) + 32;
                setResult({ value: fahrenheit, unit: '°F'});
            } else if (selectedUnit2 === 'Kelvin (K)') {
                const kelvin = inputValue + 273.15;
                setResult({ value: kelvin, unit: 'K'});
            } else if (selectedUnit2 === 'Rankine (°R)') {
                const rankine = (inputValue * 9/5) + 491.67;
                setResult({ value: rankine, unit: '°R'});
            } else if (selectedUnit2 === 'Reamur (°Re)') {
                const reamur = inputValue * 4/5;
                setResult({ value: reamur, unit: '°Re'});
            }
        } else if (selectedUnit1 === 'Fahrenheit (°F)') {
            if (selectedUnit2 === 'Celcius (°C)') {
                const celcius = (inputValue - 32) * 5/9;
                setResult({ value: celcius, unit: '°C'});
            } else if (selectedUnit2 === 'Kelvin (K)') {
                const kelvin = (inputValue + 459.67) * 5/9;
                setResult({ value: kelvin, unit: 'K'});
            } else if (selectedUnit2 === 'Rankine (°R)') {
                const rankine = inputValue + 459.67;
                setResult({ value: rankine, unit: '°R'});
            } else if (selectedUnit2 === 'Reamur (°Re)') {
                const reamur = (inputValue - 32) * 4/9;
                setResult({ value: reamur, unit: '°Re'});
            }
        } else if (selectedUnit1 === 'Kelvin (K)') {
            if (selectedUnit2 === 'Celcius (°C)') {
                const celcius = inputValue - 273.15;
                setResult({ value: celcius, unit: '°C'});
            } else if (selectedUnit2 === 'Fahrenheit (°F)') {
                const fahrenheit = (inputValue * 9/5) - 459.67;
                setResult({ value: fahrenheit, unit: '°F'});
            } else if (selectedUnit2 === 'Rankine (°R)') {
                const rankine = inputValue * 9/5;
                setResult({ value: rankine, unit: '°R'});
            } else if (selectedUnit2 === 'Reamur (°Re)') {
                const reamur = (inputValue - 273.15) * 4/5;
                setResult({ value: reamur, unit: '°Re'});
            }
        } else if (selectedUnit1 === 'Rankine (°R)') {
            if (selectedUnit2 === 'Celcius (°C)') {
                const celcius = (inputValue - 491.67) * 5/9;
                setResult({ value: celcius, unit: '°C'});
            } else if (selectedUnit2 === 'Fahrenheit (°F)') {
                const fahrenheit = inputValue - 459.67;
                setResult({ value: fahrenheit, unit: '°F'});
            } else if (selectedUnit2 === 'Kelvin (K)') {
                const kelvin = inputValue * 5/9;
                setResult({ value: kelvin, unit: 'K'});
            } else if (selectedUnit2 === 'Reamur (°Re)') {
                const reamur = (inputValue - 491.67) * 4/9;
                setResult({ value: reamur, unit: '°Re'});
            }
        } else if (selectedUnit1 === 'Reamur (°Re)') {
            if (selectedUnit2 === 'Celcius (°C)') {
                const celcius = inputValue * 5/4;
                setResult({ value: celcius, unit: '°C'});
            } else if (selectedUnit2 === 'Fahrenheit (°F)') {
                const fahrenheit = (inputValue * 9/4) + 32;
                setResult({ value: fahrenheit, unit: '°F'});
            } else if (selectedUnit2 === 'Kelvin (K)') {
                const kelvin = (inputValue * 5/4) + 273.15;
                setResult({ value: kelvin, unit: 'K'});
            } else if (selectedUnit2 === 'Rankine (°R)') {
                const rankine = (inputValue * 9/4) + 491.67;
                setResult({ value: rankine, unit: '°R'});
            }
        } else {
            setResult({ value: "Try different units!", unit: ''});
        }
    };

    return (
        <div className='temperature bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 min-h-screen flex items-center justify-center'>
            <div className='container flex flex-row md:justify-center '>
                <div className='flex flex-col w-80 mt-10 md:mt-6'>
                    <Link to='/oprec-exercise/'>
                        <button className='bg-transparent border text-white rounded-full px-6 py-3 mb-4 md:mr-3 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 transition duration-300 transform hover:scale-105'>Home</button>
                    </Link>
                    <div className='calcBox relative flex flex-col h-96 bg-blue-300 bg-opacity-60 border border-blue-500 rounded-2xl p-6 mb-6 text-center shadow-lg'>
                        <h1 className='relative mb-4 -mt-4 w-full p-4 border-b text-xl text-white'>Temperature Converter</h1>
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
                                                className={`block px-4 py-2 text-sm w-full hover:rounded-t-lg text-gray-700 ${selectedUnit1 === 'Celcius (°C)' ? 'bg-blue-300 rounded-t-lg' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('Celcius (°C)')}
                                            >
                                            Celcius (°C)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit1 === 'Fahrenheit (°F)' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('Fahrenheit (°F)')}
                                            >
                                                Fahrenheit (°F)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit1 === 'Kelvin (K)' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('Kelvin (K)')}
                                            >
                                                Kelvin (K)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit1 === 'Rankine (°R)' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('Rankine (°R)')}
                                            >
                                                Rankine (°R)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full hover:rounded-b-lg text-gray-700 ${selectedUnit1 === 'Reamur (°Re)' ? 'bg-blue-300 rounded-b-lg' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange1('Reamur (°Re)')}
                                            >
                                                Reamur (°Re)
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
                                                className={`block px-4 py-2 text-sm w-full hover:rounded-t-lg text-gray-700 ${selectedUnit2 === 'Celcius (°C)' ? 'bg-blue-300 rounded-t-lg' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('Celcius (°C)')}
                                            >
                                            Celcius (°C)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit2 === 'Fahrenheit (°F)' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('Fahrenheit (°F)')}
                                            >
                                                Fahrenheit (°F)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit2 === 'Kelvin (K)' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('Kelvin (K)')}
                                            >
                                                Kelvin (K)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full text-gray-700 ${selectedUnit2 === 'Rankine (°R)' ? 'bg-blue-300' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('Rankine (°R)')}
                                            >
                                                Rankine (°R)
                                            </button>
                                            <button
                                                className={`block px-4 py-2 text-sm w-full hover:rounded-b-lg text-gray-700 ${selectedUnit2 === 'Reamur (°Re)' ? 'bg-blue-300 rounded-b-lg' : 'hover:bg-gray-100'}`}
                                                onClick={() => handleUnitChange2('Reamur (°Re)')}
                                            >
                                                Reamur (°Re)
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <input type='number' value={inputVal} onChange={handleInputChange} className='mt-3 w-full h-10 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-center' placeholder='Input Value to Convert'/>
                        <button
                            type='button' onClick={convert} className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mt-3'
                        >
                            Convert
                        </button>
                        <div className='result mt-3 w-full border-t'>
                            <p className='text-lg text-white p-1'>Result:</p>
                            {result.value !== null ? (
                                <p className='text-xl text-white'>{`${result.value} ${result.unit}`}</p>
                            ) : (
                                <p className='text-xl text-white'>-</p>
                            )}
                        </div>
                    </div>
                    <div className='manual border p-3'>
                        <h1 className='text-lg text-white'>How to use:</h1>
                        <p className='text-md text-white'> 1. Choose the unit you want to convert from and to.<br />
                            2. Input the value you want to convert.<br/>
                            3. Click the convert button.<br/>
                            4. The result will be shown.
                        </p>
                    </div>
                </div>
                <div className='convForm mb-10 ml-10 mt-4 md:mt-10 md:grid md:grid-cols-2 gap-x-9'>
                    <h1 className='text-3xl font-bold text-center mb-4 md:mt-20 text-white'>Conversion Formula</h1>
                    <table className='celcius shadow-lg w-full'>
                        <thead>
                            <tr>
                                <th colSpan='2' className='rounded-t-lg bg-blue-300 bg-opacity-60 p-2 text-white'>Celcius to</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <td>Fahrenheit</td>
                                <td>°F = (°C x 9/5) + 32</td>
                            </tr>
                            <tr>
                                <td>Kelvin</td>
                                <td>K = °C + 273.15</td>
                            </tr>
                            <tr>
                                <td>Rankine</td>
                                <td>°R = (°C x 9/5) + 491.67</td>
                            </tr>
                            <tr>
                                <td>Reamur</td>
                                <td>°Re = °C x 4/5</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fahrenheit shadow-lg w-full mt-4'>
                        <thead>
                            <tr>
                                <th colSpan='2' className='rounded-t-lg bg-blue-300 bg-opacity-60 p-2 text-white'>Fahrenheit to</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <td>Celcius</td>
                                <td>°C = (°F - 32) x 5/9</td>
                            </tr>
                            <tr>
                                <td>Kelvin</td>
                                <td>K = (°F + 459.67) x 5/9</td>
                            </tr>
                            <tr>
                                <td>Rankine</td>
                                <td>°R = °F + 459.67</td>
                            </tr>
                            <tr>
                                <td>Reamur</td>
                                <td>°Re = (°F - 32) x 4/9</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='kelvin shadow-lg w-full mt-4'>
                        <thead>
                            <tr>
                                <th colSpan='2' className='rounded-t-lg bg-blue-300 bg-opacity-60 p-2 text-white'>Kelvin to</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <td>Celcius</td>
                                <td>°C = K - 273.15</td>
                            </tr>
                            <tr>
                                <td>Fahrenheit</td>
                                <td>°F = K x 9/5 - 459.67</td>
                            </tr>
                            <tr>
                                <td>Rankine</td>
                                <td>°R = K x 9/5</td>
                            </tr>
                            <tr>
                                <td>Reamur</td>
                                <td>°Re = (K - 273.15) x 4/5</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='rankine shadow-lg w-full mt-4'>
                        <thead>
                            <tr>
                                <th colSpan='2' className='rounded-t-lg bg-blue-300 bg-opacity-60 p-2 text-white'>Rankine to</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <td>Celcius</td>
                                <td>°C = (°R - 491.67) x 5/9</td>
                            </tr>
                            <tr>
                                <td>Fahrenheit</td>
                                <td>°F = °R - 459.67</td>
                            </tr>
                            <tr>
                                <td>Kelvin</td>
                                <td> K = °R x 5/9</td>
                            </tr>
                            <tr>
                                <td>Reamur</td>
                                <td>°Re = (°R - 491.67) x 4/9</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='reamur shadow-lg w-full mt-4'>
                        <thead>
                            <tr>
                                <th colSpan='2' className='rounded-t-lg bg-blue-300 bg-opacity-60 p-2 text-white'>Reamur to</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <td>Celcius</td>
                                <td>°C = °Re x 5/4</td>
                            </tr>
                            <tr>
                                <td>Fahrenheit</td>
                                <td>°F = (°Re x 9/4) + 32</td>
                            </tr>
                            <tr>
                                <td>Kelvin</td>
                                <td>K = (°Re x 5/4) + 273.15</td>
                            </tr>
                            <tr>
                                <td>Rankine</td>
                                <td>°R = (°Re x 9/4) + 491.67</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
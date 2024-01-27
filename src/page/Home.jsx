import '../index.css';
import logoExercise from '../assets/logoexercise.svg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 min-h-screen flex flex-col md:justify-start md:items-start'>
            <div className='flex flex-col items-center md:p-20 justify-center p-2'>
                <div className='title mt-16 md:mt-0'>
                    <div className='container mx-auto flex flex-col justify-start items-start p-4'>
                        <img src={logoExercise} alt='Logo EXERCISE' className='w-1/3 mb-8 md:mt-10'/>
                        <h1 className='text-5xl mb-4'>TUGAS OPREC EXERCISE</h1>
                        <h2 className='text-3xl'>Falah Andhesryo</h2>
                        <h2 className='text-3xl'>Teknik Komputer 23</h2>
                    </div>
                </div>
                <div className='buttons flex'>
                    <div className='buttons flex flex-col md:flex-row md:justify-end mt-8'>
                        <Link to='/temperature'>
                            <button className='bg-transparent border text-white rounded-full px-6 py-3 mb-4 md:mr-3 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 transition duration-300 transform hover:scale-105'>Temperature Converter</button>
                        </Link>
                        <Link to='/currency'>
                            <button className='bg-transparent border w-full text-white rounded-full px-6 py-3 mb-4 md:mr-3 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 transition duration-300 transform hover:scale-105'>Currency Converter</button>
                        </Link>
                        <a href='https://drive.google.com/file/d/1oV2JrXB8fp-ZIgqanqvjOalWTqgFhLjx/view?usp=sharing' target="_blank" rel='noopener noreferrer'>
                        <button className='bg-transparent border w-full text-white rounded-full px-6 py-3 mb-4 md:ml-3 md:mr-3 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 transition duration-300 transform hover:scale-105'>Tugas Teori</button>
                        </a>
                    </div>
                </div>
            </div>
            <footer className='footer text-black bg-white w-full flex mt-auto p-2'>
                &copy; 2024 Falah Andhesryo
            </footer>
        </div>
    );
}
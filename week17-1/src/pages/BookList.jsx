import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        }
        fetchBooks();
    }, [])

    return (
        <div className="flex justify-start items-center gap-[20px] w-[100%] h-[80vh] m-[20px]">
            <div className="flex flex-col justify-start bg-white p-[50px] h-[80%] rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-none shadow-[2px_2px_5px_rgba(0,0,0,0.1)]">
                <div onClick={goHome} className="text-[40px] text-[#535353] font-bold">🏠</div>
                <div className="text-[40px] text-[#535353] font-bold">🦁BookList🦁</div>
                <ul className="list-disc pl-[5px] mt-[20px]">
                    {books.map((book) => (
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <li>{book.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-start items-center p-[50px] h-[100%] rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-none mt-[100px]">
                <Outlet />
            </div>
        </div>
    )
}

export default BookList;
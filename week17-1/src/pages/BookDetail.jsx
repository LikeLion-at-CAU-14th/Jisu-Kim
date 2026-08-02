import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const params = useParams();
    const id = params.id;

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        }
        fetchBooks();
    }, [])

    const book = books.find((b) => b.id === parseInt(id));

    const [likes, setLikes] = useState(0);

    const updateLikes = () => {
        setLikes(likes + 1);
    };

    useEffect(() => {
        setLikes(0);
    }, [id])

    if (!book) {
        return <div>찾는 책이 없습니다.</div>
    }

    return (
    <div>
        <h1 className="text-[2em] font-bold my-[0.67em]">{book.title}</h1>
        <h3 className="text-[1.17em] font-bold my-[1em]">{book.author}</h3>
        <p className="my-[1em]">{book.description}</p>
        <button
            onClick={updateLikes}
            className="bg-[#75b5f5] text-white border-none rounded-[25px] py-[5px] px-[15px] text-base cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#9ecfff] active:bg-[#3d9dfd]"
        >
            <span className="mr-[8px] text-[20px]">👍🏻</span> {likes}
        </button>
    </div>
)
}

export default BookDetail;
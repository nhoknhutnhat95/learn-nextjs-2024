import React from 'react';
import style from './headerRead.module.css'
import Link from 'next/link';
const HeaderRead = (props) => {
    const {bookName, bookId} = props
    return (
        <div className={`${style.header} py-[12px] text-lg text-white`}>
            <div className='container flex px-0'>
                <div className='w-2/12'>
                    <Link href={'/book'}>Back</Link>
                </div>
                <div className='w-8/12 text-center font-bold text-2xl'>
                    <span>{bookName}</span>
                </div>
                <div className='w-2/12 text-end'>
                    Đọc lại
                </div>
            </div>
        </div>
    )
};

export default HeaderRead;
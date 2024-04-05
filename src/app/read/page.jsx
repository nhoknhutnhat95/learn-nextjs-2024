import React from 'react';
import HeaderRead from './components/Header/header-read';
import Dflip from './components/book/dflip';


const ReadPage = () => {
    return (
        <div className='flex h-screen flex-col'>
            <HeaderRead bookName='Tim và máu' bookId='65dc581d504ea271cef513bc'></HeaderRead>
            <Dflip></Dflip>
        </div>
    );
};

export default ReadPage;
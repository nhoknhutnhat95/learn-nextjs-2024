import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <ul className='flex flex-row gap-4'>
                <li>
                    <Link href={'/login'}>
                        Đăng nhập
                    </Link>
                </li>
                <li>
                    <Link href={'/register'}>
                        Đăng ký
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
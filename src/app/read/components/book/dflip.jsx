'use client'
import React, { useEffect } from 'react';




const Dflip = () => {
    const pdf = 'https://api.thuvienso.minhviet.group/pdf/vn/loi-hua-cua-bac-ho.pdf'
    function initDflip() {
        var option_images = {
            webgl: true,
            // singlePageMode: 1,
            pageSize: 1,
            zoomRatio: 1.5,
            pageMode: DFLIP.PAGE_MODE.DOUBLE,
            height: '100%',
            scrollWheel: false,
            onFlip: function (flipBook) {

            },
            onCreateUI: function (flipBook) {
            },
        };
        $('#flipBookImageContainer').flipBook(pdf, option_images);
    }
    useEffect(() => {
        initDflip()

        return () => {
            
        }
    }, [pdf])

    return (
        <div id='flipBookImageContainer' className='flex-1'>

        </div>
    );
};

export default Dflip;
/* eslint-disable @next/next/no-css-tags */
'use client'
import Script from 'next/script'


export default function ReadLayout({ children }) {
    return (
        <div>
            <link rel='stylesheet' href='/libs/dflip/dflip.min.css'></link>
            <Script src='/libs/jquery/jquery-3.6.1.min.js' strategy="beforeInteractive"></Script>
            <Script src='/libs/dflip/dflip.min.js' strategy="beforeInteractive" onLoad={()=>{
                console.log('Load script')
            }}></Script>
            {children}
        </div>
    );
}
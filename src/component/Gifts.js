 import React from 'react'
import GiftsItem from './GiftsItem'
import './Gifts.css'

function Gifts() {
    return (
        <div className="gifts">
            <h1>Before choosing please see your gift if you choose yes</h1>
            <div className="gifts__wrapper">
                <ul className="gifts__items">
                    <GiftsItem 
                    src='/images/img-10.jpg'
                    text="Nhan de cau hon"
                    label="結婚指輪"
                    path='/about'
                    />
                     <GiftsItem 
                    src='/images/img-11.jpg'
                    text="Vay cuoi ne"
                    label="ウェディングドレス"
                    path='/about'
                    />
                </ul>
                <ul className="gifts__items">
                    <GiftsItem 
                    src='/images/img-12.jpg'
                    text="Cuoi xong mua xe ne"
                    label="スーパーカー"
                    path='/about'
                    />
                     <GiftsItem 
                    src='/images/img-13.jpg'
                    text="Mua nha nua ne"
                    label="ヴィラ"
                    path='/about'
                    />
                    <GiftsItem 
                    src='/images/img-14.jpg'
                    text="Tat ca cho nay cua em"
                    label="お金"
                    path='/about'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Gifts

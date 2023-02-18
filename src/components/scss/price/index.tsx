'use client'
import React from 'react';
// @ts-ignore
import styles from "./index.module.scss";
import {RootState} from "../../../store/store";
import {useSelector} from "react-redux";

const Price = () => {
    const responseData =useSelector((state:RootState)=>state.vendor)
    return (
        <>

            <div className={styles.sectionDescription__Details}>
                <span className={styles.sectionDescription__Details_delivery}>ارسال اکسپرس </span>
                <span className={styles.sectionDescription__Details_price}> ۱۲,۵۰۰ تومان</span>
            </div>
        </>
    );
};

export default Price;

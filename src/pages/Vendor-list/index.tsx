import React, {useEffect, useState} from 'react';
// @ts-ignore
import style from './index.module.scss';
import {Card} from "../../components/scss";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";

import {BeatLoader} from "react-spinners";
import {GetVendorsList} from "../../store/reducers/vendorReducer";
// @ts-ignore
import InfiniteScroll from "react-infinite-scroll-component";

const Vendors = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [page,setPage] = useState(1)
    const status = useSelector((state: RootState) => state.vendor)
    // @ts-ignore
    const cards = useSelector((state) => state.vendor.contactCollection)
    // @ts-ignore
    const hasMore = useSelector((state) => state.vendor.hasMore)
    // @ts-ignore
    const CarDItem = cards.flatMap(card =>card.data?.finalResult)


    useEffect(() => {
        dispatch(GetVendorsList(1))
        setPage(prevState => prevState + 1)
    },[dispatch])



    const fetchMoreData = () => {
        setPage(prevState => prevState + 1)
        setTimeout(() => {
            if(hasMore){

                dispatch(GetVendorsList(page))
            }
        },1000)
    }

    if(status) {
   return (
            <div className={style.container}>
                <div className={style.container__children}
                >
                    {
                        CarDItem ? (<>
                            <InfiniteScroll
                                dataLength={CarDItem.length}
                                next={fetchMoreData}
                                hasMore={hasMore}
                                loader={
                                    <div className={style.Loading}>
                                        <BeatLoader
                                            color="#d636c1"
                                            margin={5}
                                            size={20}
                                        />
                                    </div>}
                            >
                                <Card data={CarDItem} ></Card>
                            </InfiniteScroll>
                        </>):(<h3>محصولی یافت نشد</h3>)
                    }
                </div>
            </div>
        );
    }else if(!status) {
            return (
                <div className={style.Loading}>
                    <BeatLoader
                        color="#d636c1"
                        margin={5}
                        size={20}
                    />
                </div>
            )
    }
    return <div></div>
};

export default Vendors;

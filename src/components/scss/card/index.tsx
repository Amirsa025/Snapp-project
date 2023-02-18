import React from "react";
// @ts-ignore
import styles from "./index.module.scss";
import Price from "../price";

type CardProps = {
    data: any[]
};

export const Card: React.FC<CardProps> = ({data}) => {
    return (
        <>
            {
                data.map((item,id) => {
                    return (
                        <div key={id} className={styles.card}>
                            {
                                item?.type === 'VENDOR' ?
                                    (<section>
                                        <header className={styles.cover__header}>
                                            <div>
                                                <img className="cover-image"
                                                     src={item.data?.backgroundImage}
                                                     alt={item.name}/>
                                            </div>
                                            <div className={styles.header}>
                                                <div className={styles.container__Cart_item}>
                                                    <div className={styles.logo_Cart_item}>
                                                        <div className={styles.logo_Cart_item__photo}>
                                                            <div className={styles.logo_Cart_item__photo__frame}>
                                                                <img src={item.data?.defLogo} alt={item.title}/>
                                                            </div>

                                                        </div>
                                                        <div className={styles.title_Cart__item}>
                                                            <div className={styles.title_Cart__item__Section}>
                                                                <span>{item.data?.title}</span>
                                                            </div>
                                                            <div className={styles.title_Cart__item__Content}>
                                                                <div className={styles.title_Cart__figure}>
                                                                    <span>({item.data?.id})</span>
                                                                </div>
                                                                <div className={styles.title_Cart__item__Rate}>
                                                                    <span>{item.data?.rate}</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.title_Cart__item__icon}>
                                                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                                    </svg>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className={styles.sectionDescription__Cart__item}>
                                                            <div className={styles.sectionDescription__Content}>
                                                                <p>{item.data?.address}</p>
                                                            </div>

                                                            <Price/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>

                                    </section>)
                                    : (<div>{item.data}</div>)
                            }

                        </div>
                    )
                })
            }
        </>
    );
};

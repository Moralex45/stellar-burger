import { FC } from 'react';

import style from "./order-details.module.css"
import { TOrderDetailsProps } from '../../services/types/types';

export const OrderDetails: FC<TOrderDetailsProps> = ({ orderNumber }) => {
    return (
        <div className={`${style.order_container} pt-30`}>
            <span className={`${style.order_number} text text_type_digits-large mb-8`}>{orderNumber}</span>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <div className={`${style.order_image} mb-15`}></div>
            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
            <p className={`${style.order_paragraph} text text_type_main-default pb-30`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

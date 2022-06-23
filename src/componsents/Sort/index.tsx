import styles from './Sort.module.scss';
import React, { useState } from 'react';

type SortProps = {
    categoryId: any;
    sortSelect: any;
}

const Sort: React.FC<SortProps> = React.memo(({ categoryId, sortSelect }) => {

    const [activeSelect, setActiveSelect] = useState(false);
    let categoryArr = [
        {id: 1, name: 'husky'},
        {id: 2, name: 'boshki'},
        {id: 3, name: 'brusko'},
    ];
    let selectArr = [
        {id: 1, sort: 'desc', name: 'от большего'},
        {id: 2, sort: 'asc', name: 'от меньшего'},
    ];

    return (
        <div className={ styles.wrapper }>
        <ul className={ styles.sortCategory }>

            {  categoryArr.map((item) => (
                    <li key={ item.id }>
                        <button onClick={ () => {categoryId(item.id)} } className={ styles.sortItem }>{ item.name }</button>
                    </li>
                ))
            }

        </ul>

        <div className={ styles.select }>
            <button onClick={ () => setActiveSelect(!activeSelect) } className={ styles.sortPrice }>Выбрать</button>
            { activeSelect && <div className={ styles.selectContent }>

                { selectArr.map((item) => (
                        <button key={ item.id } onClick={ () => sortSelect(item.sort) }>{ item.name }</button>
                    ))
                }
                
            </div> }
        </div>
    </div>
    );
}
)
export default Sort;
import React from 'react';
import {Pagination} from 'antd';
import style from './Paginator.module.css';

const Paginator = ({totalItemsCount, currentPage, onPageChanged}) => {

  function onChange(pageNumber) {
    onPageChanged(pageNumber);
  }

  return <div className={style.paginator}>
    <Pagination
      total={totalItemsCount}
      current={currentPage}
      pageSize={12}
      showSizeChanger={false}
      showQuickJumper
      showTotal={total => `Найдено ${total} пользователей`}
      onChange={onChange}
    />
  </div>;
};

export default Paginator;

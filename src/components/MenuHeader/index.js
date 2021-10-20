import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import { getAllCategory } from '../../store/action'



/**
* @author
* @function MenuHeader
**/

export const MenuHeader = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    if (categories?.length) {
      return categories?.map((item, index) => (
        <li key={index}>
          {
            item.parentId ? <a href={item.slug}>{item.name}</a>:
            <span>{item.name}</span>
          }
          
          {item?.children?.length > 0 ? (<ul>{renderCategories(item?.children)}</ul>) : null}
        </li>
      ))
    } else {
      return <h2>Loading....</h2>
    }
  }

  return (
    <div className="menuHeader">

      <ul>{renderCategories(category.categories)}</ul>
      
    </div>
  )

}

export default MenuHeader
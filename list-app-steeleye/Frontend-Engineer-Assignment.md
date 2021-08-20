# React Component Code Review

## Introduction

Based on the code below answer the following queries:
1. Explain what the simple `List` component does.
# Answer `It mainly has 2 components ListItem component which contains total of all list items and singleListItem component which renders the list items in unordered style` 
2. What problems / warnings are there with code?
(a) : The problem here is it does not have any items in the list component due to which it logs an error saying cannot map through undefined item
Need to create a list of items and pass it onto the parent component as props so that it gets rendered accordingly in the list item component as well . 

(b) : unique ids have to be generated to each individual list item and has to be passed as the key prop so that it re renders appropriately without any conflict.

```

3. Please fix, optimize, and/or modify the component as much as you think is necessary.

## Code

```javascript

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [setSelectedIndex, selectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shapeOf({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;


```
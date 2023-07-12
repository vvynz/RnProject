import React from 'react';

export default function hooks() {
  const hooks = {};

  const deleteItem = (id, state) => {
    state(prev => prev.filter(item => item.id !== id));
  };
  hooks.deleteItem = deleteItem;

  return hooks;
}

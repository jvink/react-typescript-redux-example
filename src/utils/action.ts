export const createActionsWithPrefix = (prefix: string, actions: any): any => {
  for (let prop in actions) {
    if (actions.hasOwnProperty(prop)) {
      actions[prop] = prefix + prop;
    }
  }
  return actions;
};

const makeItemsList = (baseList: Array<Array<any>>) =>
  baseList.map((value) => ({
    name: value[0],
    label: value[1],
    path: value[2],
    iconProps: { icon: () => value[3] },
  }));

export default makeItemsList;

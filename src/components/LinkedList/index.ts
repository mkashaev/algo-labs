import LinkedList from './LinkedList';

const llTest = () => {
  const ll = new LinkedList<number>();

  ll.push(1);

  console.log(ll.print());
};

export { llTest };

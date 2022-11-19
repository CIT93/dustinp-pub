const getTodos = async () => {
  const response =  await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    if (response.status === 200) {
      const data = response.json();
      return data;
    } else {
      console.log('An error has taken place');
    }
  };
  
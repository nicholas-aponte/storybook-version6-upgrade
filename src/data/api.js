function getLists() {
    const url = `http://localhost:3004/Lists`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      }) .catch((error) => {
      console.log(error)
    });

}


export {getLists}
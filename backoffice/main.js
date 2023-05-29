async function deleteOne(id) {
    fetch( "https://site222301.tw.cs.unibo.it/api/item/delete/" + id,
      {
        method: "PATCH",
      })
      .then(res =>
        res.json()).then(d => {
            console.log(d)})
      .catch(function (err) {
        console.log("Unable to fetch -", err);
      });
    }
   

  async function addOne(id) {
    const response = await fetch(
      "https://site222301.tw.cs.unibo.it/api/item/add/" + id,
      {
        method: "PATCH",
      }
    );
  }
  


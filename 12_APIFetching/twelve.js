let URL = "https://cat-fact.herokuapp.com/facts";

const getfacts = async () => {
    console.log("getting data .....");
    let response = fetch(URL);
    console.log(response);
    
}